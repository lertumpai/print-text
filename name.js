const alphabet = require("./alphabet")


class PrintText {
  constructor(h = 7, symbol = "") {
    this.h = h
    this.symbol = symbol
    this.alphabets = alphabet.init(h, symbol)
  }

  printAlphabets() {
    console.log(this.alphabets)
    Object.values(this.alphabets).forEach(alphabet => {
      console.log(alphabet.join("\n"))
      console.log()
    })
  }

  async print(text, speed = 10) {
    const texts = text.toUpperCase().split("")
    for (let i = 0; i < this.h; i++) {
      const messages = texts.map(t => this.alphabets[t][i]).join(" ")
      for (let m of messages) {
        process.stdout.write(m)
        await new Promise(res => setTimeout(res, speed))
      }
      console.log()
    }
  }
}

module.exports = {
  PrintText
}