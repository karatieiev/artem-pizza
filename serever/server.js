const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const morgan = require("morgan");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const { nanoid } = require("nanoid");
const idlength = 8;

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ ingredients: [], orders: [] }).write();

const app = express();
app.use(
  fileUpload({
    createParentPath: true
  })
);

app.use(cors());
app.use(express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: "1.0.0"
    }
  },
  apis: ["server.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get("/ingredients", (req, res) => {
  const ingredients = db.get("ingredients");

  res.send(ingredients);
});

app.get("/ingredients/:ingredientId", (req, res) => {
  const ingredient = db
    .get("ingredients")
    .find({ id: req.params.ingredientId })
    .value();

  res.send(ingredient);
});

app.post("/ingredients", (req, res) => {
  try {
    const { image, thumbnail } = req.files;
    const { name, slug, price, category } = req.body;

    const imageExt = image.name.split(".").pop();
    const fileName = `${slug}.${imageExt}`;

    image.mv(`./uploads/${fileName}`);

    const thumbExt = thumbnail.name.split(".").pop();
    const thumbFileName = `${slug}-thumb.${thumbExt}`;

    thumbnail.mv(`./uploads/${thumbFileName}`);

    db.get("ingredients")
      .push({
        id: nanoid(idlength),
        name,
        slug,
        price,
        category,
        image: fileName,
        thumbnail: thumbFileName
      })
      .write();

    return res.send({
      status: true,
      message: "Success"
    });
  } catch (e) {
    return res.status(500).send(e);
  }
});

app.put("/ingredients/:ingredientId", (req, res) => {
  try {
    const { image, thumbnail } = req.files;
    const { name, slug, price, category } = req.body;

    const imageExt = image.name.split(".").pop();
    const fileName = `${slug}.${imageExt}`;

    image.mv(`./uploads/${fileName}`);

    const thumbExt = thumbnail.name.split(".").pop();
    const thumbFileName = `${slug}-thumb.${thumbExt}`;

    thumbnail.mv(`./uploads/${thumbFileName}`);

    db.get("ingredients")
      .find({ id: req.params.ingredientId })
      .assign({
        name,
        slug,
        price,
        category,
        image: fileName,
        thumbnail: thumbFileName
      })
      .write();

    return res.send({
      status: true,
      message: "Success"
    });
  } catch (e) {
    return res.status(500).send(e);
  }
});

app.delete("/ingredients/:ingredientId", (req, res) => {
  db.get("ingredients").remove({ id: req.params.ingredientId }).write();

  res.send({ status: true, message: "Success" });
});

app.get("/orders", (req, res) => {
  const orders = db.get("orders");
  res.send(orders);
});

app.post("/orders", (req, res) => {
  try {
    const { name, ingredients, address, card_number } = req.body;

    db.get("orders")
      .push({ id: nanoid(idlength), name, ingredients, address, card_number })
      .write();

    return res.send({
      status: true,
      message: "Success"
    });
  } catch (e) {
    return res.status(500).send(e);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
