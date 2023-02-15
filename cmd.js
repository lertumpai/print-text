class CMD {
  constructor() {
    this.command = {}
    this.TEXT = 'text'
    this.H = 'h'
    this.SPEED = 'speed'
    this.SYMBOL = 'symbol'
    this.PRINT_ALPHABET = 'print'
  }

  getText() {
    return this.command[this.TEXT]
  }

  getH() {
    return Number(this.command[this.H])
  }

  getSpeed() {
    return Number(this.command[this.SPEED])
  }

  getSymbol() {
    return Number(this.command[this.SYMBOL])
  }

  getCommand() {
    this.command = process.argv
    .filter(val =>
      val.startsWith("--" + this.TEXT)
      || val.startsWith("--" + this.H)
      || val.startsWith("--" + this.SPEED)
      || val.startsWith("--" + this.SYMBOL)
      || val.startsWith("--" + this.PRINT_ALPHABET)
    )
    .reduce((res, val) => {
      const [key, value] = val.replace("--", "").split("=")
      return {
        ...res,
        [key]: value,
      }
    }, {})
  }

  isPrintAlphabet() {
    return this.command[this.PRINT_ALPHABET] === "true"
  }

  isCommandEmpty() {
    return Object.values(this.command).length === 0
  }

  isTextEmpty() {
    return !this.command[this.TEXT]
  }

  printCommandOption() {
    console.log(`node main.js [OPTIONS]
--${this.TEXT} -> Word to print support only A-Z ex. --${this.TEXT}=Hello
--${this.H} -> Height of character. ex. --${this.H}=7
--${this.SPEED} -> typing velocity in milliseconds. ex. --${this.SPEED}=50
--${this.SYMBOL} -> The symbol to print a name. ex. --${this.SYMBOL}=X
--${this.PRINT_ALPHABET} -> To print all of alphabet to see how it's look like. ex. --${this.PRINT_ALPHABET}=true`)
  }
}

module.exports = {
  CMD
}