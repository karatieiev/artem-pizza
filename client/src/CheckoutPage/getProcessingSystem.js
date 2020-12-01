export const getProcessingSystem = (cardNumber) => {
  const number = cardNumber.replace(/\s/g, "").match(/\d/g)?.join("")

  if (!number || number.length !== 16) {
    return ""
  }

  switch (number[0]) {
    case "4":
      return "Visa"
    case "5":
      return "MasterCard"
    default:
      return "Unknown"
  }
}
