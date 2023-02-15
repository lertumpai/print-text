const { CMD } = require("./cmd")
const { PrintText } = require("./name")

function main() {
  const cmd = new CMD()
  cmd.getCommand()

  if (cmd.isTextEmpty() && !cmd.isPrintAlphabet()) {
    throw new Error("Text is required")
  }

  if (cmd.isCommandEmpty()) {
    cmd.printCommandOption()
  }

  const text = cmd.getText()
  const speed = cmd.getSpeed()
  const symbol = cmd.getSymbol()
  const h = cmd.getH()

  const printText = new PrintText(h, symbol)

  if (cmd.isPrintAlphabet()) {
    return printText.printAlphabets()
  }

  printText.print(text, speed)
}

main()