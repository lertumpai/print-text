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

  async print(text, speed) {
    const texts = text.toUpperCase().split("").map(t => t === " " ? "SPACE" : t)
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