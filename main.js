const { CMD } = require("./cmd")
const { PrintText } = require("./printText")

function main() {
  const cmd = new CMD()
  cmd.getCommand()

  const text = cmd.getText()
  const speed = cmd.getSpeed()
  const symbol = cmd.getSymbol()
  const char = cmd.getChar()

  if (cmd.isCommandEmpty()) {
    cmd.printCommandOption()
  }

  if (cmd.isTextEmpty() && !cmd.isPrintAlphabet() && !char) {
    throw new Error("Text is required")
  }
  const h = cmd.getH()

  const printText = new PrintText(h, symbol)

  if (cmd.isPrintAlphabet()) {
    return printText.printAlphabets()
  }

  if (char) {
    return printText.printAlphabet(char)
  }

  printText.print(text, speed)
}

main()