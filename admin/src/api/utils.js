export const buildFormData = (data) => {
  const formData = new FormData()
  formData.append("name", data.name)
  formData.append("slug", data.slug)
  formData.append("category", data.category)
  formData.append("price", data.price)
  formData.append("image", data.image[0])
  return formData
}
