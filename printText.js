const alphabet = require("./alphabet")


class PrintText {
  constructor(h = 7, symbol = "") {
    this.h = h
    this.symbol = symbol
    this.alphabets = alphabet.init(h, symbol)
  }

  printAlphabets() {
    Object.values(this.alphabets).forEach(alphabet => {
      console.log(alphabet.join("\n"))
      console.log()
    })
  }

  printAlphabet(char) {
    console.log("Not Join:\n", this.alphabets[char.toUpperCase()])
    console.log("Join:")
    console.log(this.alphabets[char.toUpperCase()].join("\n"))
  }

  transformSpace(t) {
    return t === " " ? "SPACE" : t
  }

  splitLine(text) {
    return text.split("+")
  }

  splitMessage(message) {
    return message.toUpperCase().split("").map(this.transformSpace)
  }

  async print(text, speed) {
    const messages = this.splitLine(text)
    for (const message of messages) {
      const chars = this.splitMessage(message)
      for (let i = 0; i < this.h; i++) {
        const fullMessages = chars.map(char => this.alphabets[char][i]).join(" ")
        for (let m of fullMessages) {
          process.stdout.write(m)
          await new Promise(res => setTimeout(res, speed))
        }
        console.log()
      }
      console.log()
    }
  }
}

module.exports = {
  PrintText
}