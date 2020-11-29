export const getProcessingSystem = (cardNumber) => {
  const number = cardNumber
    .replace(/\s/g, "")
    .match(/\d/g)
    ?.join("")
    .substring(0, 16)

  if (number && number.length === 16) {
    switch (cardNumber[0]) {
      case "4":
        return "Visa"
      case "5":
        return "MasterCard"
      default:
        return "Unknown"
    }
  }
  return ""
}
