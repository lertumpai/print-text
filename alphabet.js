function space(n = 0, str = " ") {
  return str.repeat(n)
}

function init(h = 7, symbol) {
  if (h % 2 === 0) throw Error("h must be old number")
  const alphabet = {}
  alphabet["A"] = A(h, symbol)
  alphabet["B"] = B(h, symbol)
  alphabet["C"] = C(h, symbol)
  alphabet["D"] = D(h, symbol)
  alphabet["E"] = E(h, symbol)
  alphabet["F"] = F(h, symbol)
  alphabet["G"] = G(h, symbol)
  alphabet["H"] = H(h, symbol)
  alphabet["I"] = I(h, symbol)
  alphabet["J"] = J(h, symbol)
  alphabet["K"] = K(h, symbol)
  alphabet["L"] = L(h, symbol)
  alphabet["M"] = M(h, symbol)
  alphabet["N"] = N(h, symbol)
  alphabet["O"] = O(h, symbol)
  alphabet["P"] = P(h, symbol)
  alphabet["Q"] = Q(h, symbol)
  alphabet["R"] = R(h, symbol)
  alphabet["S"] = S(h, symbol)
  alphabet["T"] = T(h, symbol)
  alphabet["U"] = U(h, symbol)
  alphabet["V"] = V(h, symbol)
  alphabet["W"] = W(h, symbol)
  alphabet["X"] = X(h, symbol)
  alphabet["Y"] = Y(h, symbol)
  alphabet["Z"] = Z(h, symbol)
  return alphabet
}

function A(h, symbol) {
  h = h || 7
  symbol = symbol || "A"
  const ans = []
  const w = Math.ceil(h * 1.25)
  const middle = Math.ceil(h / 2)
  for (let line = 1; line <= h; line++) {
    const text = line === middle || line === 1 ? space(w, symbol) :`${symbol}${space(w - 2)}${symbol}`
    ans.push(text)
  }
  return ans
}

function B(h, symbol) {
  h = h || 7
  symbol = symbol || "B"
  const ans = []
  const w = Math.ceil(h * 1.3)
  const middle = Math.ceil(h / 2)
  for (let line = 1; line <= h; line++) {
    const text = line === middle || line === 1 || line === h ? `${space(w - 1, symbol)}${space(1)}` :`${symbol}${space(w - 2)}${symbol}`
    ans.push(text)
  }
  return ans
}

function C(h, symbol) {
  h = h || 7
  symbol = symbol || "C"
  const ans = []
  const w = Math.ceil(h * 1.3)
  for (let line = 1; line <= h; line++) {
    const text = line === 1 || line === h ? space(w, symbol) :`${symbol}${space(w - 1)}`
    ans.push(text)
  }
  return ans
}

function D(h, symbol) {
  h = h || 7
  symbol = symbol || "D"
  const ans = []
  const w = Math.ceil(h * 1.3)
  for (let line = 1; line <= h; line++) {
    let text
    if (line === 1 || line === h) {
      text = `${space(w - 1, symbol)}${space(1)}`
    }
    else if (line === 2 || line === h - 1) {
      text = `${symbol}${space(w - 2)}${symbol}`
    }
    else {
      text = `${symbol}${space(w - 1)}${symbol}`
    }
    ans.push(text)
  }
  return ans
}

function E(h, symbol) {
  h = h || 7
  symbol = symbol || "E"
  const ans = []
  const w = Math.ceil(h * 1.3)
  const middle = Math.ceil(h / 2)
  for (let line = 1; line <= h; line++) {
    const text = line === middle || line === 1 || line === h ? space(w, symbol) :`${symbol}${space(w - 1)}`
    ans.push(text)
  }
  return ans
}

function F(h, symbol) {
  h = h || 7
  symbol = symbol || "F"
  const ans = []
  const w = Math.ceil(h * 1.3)
  const middle = Math.ceil(h / 2)
  for (let line = 1; line <= h; line++) {
    const text = line === middle || line === 1 ? space(w, symbol) :`${symbol}${space(w - 1)}`
    ans.push(text)
  }
  return ans
}

function G(h, symbol) {
  h = h || 7
  symbol = symbol || "G"
  const ans = []
  const w = Math.ceil(h * 1.3)
  const middle = Math.ceil(h / 2)
  for (let line = 1; line <= h; line++) {
    let text
    if (line === h || line === 1) {
      text = `${space(1)}${space(w - 2, symbol)}${space(1)}`
    }
    else if(line === 2) {
      text = `${space(1, symbol)}${space(w - 2)}${space(1, symbol)}`
    }
    else if(line > 2 && line < middle) {
      text = `${space(1, symbol)}${space(w - 1)}`
    }
    else if(line === middle) {
      const calSpace = Math.ceil(w * 0.4)
      text = `${space(1, symbol)}${space(calSpace)}${space(w - calSpace - 1, symbol)}`
    }
    else {
      text = `${space(1, symbol)}${space(w - 2)}${space(1, symbol)}`
    }
    ans.push(text)
  }
  return ans
}

function H(h, symbol) {
  h = h || 7
  symbol = symbol || "H"
  const ans = []
  const w = Math.ceil(h * 1.3)
  const middle = Math.ceil(h / 2)
  for (let line = 1; line <= h; line++) {
    const text = line === middle ? space(w, symbol) :`${symbol}${space(w - 2)}${symbol}`
    ans.push(text)
  }
  return ans
}

function I(h, symbol) {
  h = h || 7
  symbol = symbol || "I"
  const ans = []
  const w = Math.ceil(h * 1.3)
  const wOld = w % 2 === 1 ? w : w - 1
  for (let line = 1; line <= h; line++) {
    halfWOld = Math.floor(wOld / 2)
    const text = line === 1 || line === h ? space(wOld, symbol) :`${space(halfWOld)}${symbol}${space(halfWOld)}`
    ans.push(text)
  }
  return ans
}

function J(h, symbol) {
  h = h || 7
  symbol = symbol || "J"
  const ans = []
  for (let line = 1; line <= h; line++) {
    let text
    if (line === 1) {
      text = "   JJJJJJJ"
    }
    else if (line === h) {
      text = " JJJJJ    "
    }
    else if (line === h - 1 || line === h - 2) {
      text = "J     J   "
    }
    else {
      text = "      J   "
    }
    ans.push(text)
  }
  return ans
}

function K(h, symbol) {
  h = h || 7
  symbol = symbol || "K"
  const ans = []
  const wMid = Math.ceil(h * 0.8)
  const w = wMid + Math.ceil(h / 2) - 1
  const middle = Math.ceil(h / 2)
  for (let line = 1; line <= h; line++) {
    let text
    if (line < middle) {
      text = `${symbol}${space(w - line - 1)}${symbol}${space(line - 1)}`
    }
    else if (line === middle) {
      text = `${space(wMid, symbol)}${space(w - wMid)}`
    } else {
      const lineSumEqualH = h + 1 - line
      text = `${symbol}${space(w - lineSumEqualH - 1)}${symbol}${space(lineSumEqualH - 1)}`
    }
    ans.push(text)
  }
  return ans
}

function L(h, symbol) {
  h = h || 7
  symbol = symbol || "L"
  const ans = []
  const w = Math.ceil(h * 1.2)
  for (let line = 1; line <= h; line++) {
    let text
    if (line === h) {
      text = space(w, symbol)
    }
    else {
      text = `${symbol}${space(w - 1)}`
    }
    ans.push(text)
  }
  return ans
}

function M(h, symbol) {
  h = h || 7
  symbol = symbol || "M"
  const ans = []
  const w = h * 2 -1
  for (let line = 1; line <= h; line++) {
    let text
    if (line === 1) {
      text = `${symbol}${space(w - 2)}${symbol}`
    }
    else if (line === h) {
      const calSpace = Math.floor((w - 3) / 2)
      text = `${symbol}${space(calSpace)}${symbol}${space(calSpace)}${symbol}`
    }
    else {
      text = `${symbol}${space(line - 2)}${symbol}${space(w - 4 - (line - 2) * 2)}${symbol}${space(line - 2)}${symbol}`
    }
    ans.push(text)
  }
  return ans
}

function N(h, symbol) {
  h = h || 7
  symbol = symbol || "N"
  const ans = []
  const w = h
  for (let line = 1; line <= h; line++) {
    const text = `${symbol}${space(line - 1)}${symbol}${space(w - line)}${symbol}`
    ans.push(text)
  }
  return ans
}

function O(h, symbol) {
  h = h || 7
  symbol = symbol || "O"
  const ans = []
  const w = Math.ceil(h * 1.3)
  for (let line = 1; line <= h; line++) {
    const text = line === 1 || line === h ? space(w, symbol) : `${symbol}${space(w - 2)}${symbol}`
    ans.push(text)
  }
  return ans
}

function P(h, symbol) {
  h = h || 7
  symbol = symbol || "P"
  const ans = []
  const w = Math.ceil(h * 1.3)
  const middle = Math.ceil(h / 2)
  for (let line = 1; line <= h; line++) {
    let text
    if (line === 1 || line === middle) {
      text = `${space(w - 1, symbol)}${space(1)}`
    }
    else if (line > middle) {
      text = `${symbol}${space(w - 1)}`
    }
    else {
      text = `${symbol}${space(w - 2)}${symbol}`
    }
    ans.push(text)
  }
  return ans
}

function Q(h, symbol) {
  h = h || 7
  symbol = symbol || "Q"
  const ans = []
  const w = Math.ceil(h * 1.5)
  for (let line = 1; line <= h; line++) {
    let text
    if (line === 1) {
      text = space(w, symbol)
    }
    else if (line === h) {
      text = `${space(w - 4, symbol)}${space(2)}${symbol}${space(1)}`
    }
    else if (line === h - 1) {
      text = `${symbol}${space(w - 4)}${symbol}${space(2)}`
    }
    else if (line === h - 2) {
      text = `${symbol}${space(w - 5)}${symbol}${space(2)}${symbol}`
    }
    else {
      text = `${symbol}${space(w - 2)}${symbol}`
    }
    ans.push(text)
  }
  return ans
}

function R(h, symbol) {
  h = h || 7
  symbol = symbol || "R"
  const ans = []
  const w = Math.ceil(h * 1.3)
  const middle = Math.ceil(h / 2)
  for (let line = 1; line <= h; line++) {
    let text
    if (line === 1 || line === middle) {
      text = `${space(w - 1, symbol)}${space(1)}`
    }
    else if(line > middle) {
      const calSpace = w - middle + (line % middle) - 1
      text = `${symbol}${space(w - middle + (line % middle) - 1)}${symbol}${space(w - calSpace - 2)}`
    }
    else {
      text = `${symbol}${space(w - 2)}${symbol}`
    }
    ans.push(text)
  }
  return ans
}

function S(h, symbol) {
  h = h || 7
  symbol = symbol || "S"
  const ans = []
  const w = Math.ceil(h * 1.3)
  const middle = Math.ceil(h / 2)
  for (let line = 1; line <= h; line++) {
    let text
    if (line === 1 || line === middle || line === h) {
      text = space(w, symbol)
    }
    else if(line < middle) {
      text = `${symbol}${space(w - 1)}`
    }
    else {
      text = `${space(w - 1)}${symbol}`
    }
    ans.push(text)
  }
  return ans
}

function T(h, symbol) {
  h = h || 7
  symbol = symbol || "T"
  const ans = []
  const w = Math.ceil(h * 1.5)
  const wOld = w % 2 === 1 ? w : w - 1
  const halfWOld = (wOld - 1) / 2
  for (let line = 1; line <= h; line++) {
    const text = line === 1 ? space(wOld, symbol) : `${space(halfWOld)}${symbol}${space(halfWOld)}`
    ans.push(text)
  }
  return ans
}

function U(h, symbol) {
  h = h || 7
  symbol = symbol || "U"
  const ans = []
  const w = Math.ceil(h * 1.5)
  for (let line = 1; line <= h; line++) {
    const text = line === h ? `${space(1)}${space(w - 2, symbol)}${space(1)}` : `${symbol}${space(w - 2)}${symbol}`
    ans.push(text)
  }
  return ans
}

function V(h, symbol) {
  h = h || 7
  symbol = symbol || "V"
  const ans = []
  const w = h * 2 -1
  for (let line = 1; line <= h; line++) {
    const text = line === h ? `${space(h - 1)}${symbol}${space(h - 1)}` : `${space(line - 1)}${symbol}${space(w - 2 * line)}${symbol}${space(line - 1)}`
    ans.push(text)
  }
  return ans
}

function W(h, symbol) {
  h = h || 7
  symbol = symbol || "W"
  const ans = []
  const w = Math.ceil(h * 1.5)
  const wOld = w % 2 === 1 ? w : w - 1
  const calSpace = (wOld - 3) / 2
  for (let line = 1; line <= h; line++) {
    const text = line === h ? space(wOld, symbol) : `${symbol}${space(calSpace)}${symbol}${space(calSpace)}${symbol}`
    ans.push(text)
  }
  return ans
}

function X(h, symbol) {
  h = h || 7
  symbol = symbol || "X"
  const ans = []
  const w = h
  const middle = Math.ceil(h / 2)
  for (let line = 1; line <= h; line++) {
    let text
    if (line < middle) {
      text = `${space(line - 1)}${symbol}${space(w - 2 * line + 1)}${symbol}${space(line - 1)}`
    }
    else if (line === middle) {
      text = `${space(middle - 1)}${symbol}${symbol}${space(middle - 1)}`
    }
    else {
      text = `${space(h - line)}${symbol}${space(w - 2 * h + 2 * line - 1)}${symbol}${space(h - line)}`
    }
    ans.push(text)
  }
  return ans
}

function Y(h, symbol) {
  h = h || 7
  symbol = symbol || "Y"
  const ans = []
  const middle = Math.ceil(h / 2)
  const w = Math.ceil(h * 1.5)
  const wOld = w % 2 === 1 ? w : w - 1
  const halfWOld = (wOld - 1) / 2
  for (let line = 1; line <= h; line++) {
    let text
    if (line === middle) {
      text = space(wOld, symbol)
    }
    else if (line < middle) {
      text = `${symbol}${space(wOld - 2)}${symbol}`
    } else {
      text = `${space(halfWOld)}${symbol}${space(halfWOld)}`
    }
    ans.push(text)
  }
  return ans
}

function Z(h, symbol) {
  h = h || 7
  symbol = symbol || "Z"
  const ans = []
  const w = (h - 2) * 2
  for (let line = 1; line <= h; line++) {
    const calSpace = 2 * line - 4
    const text = line === h || line === 1 ? `${space(w, symbol)}` : `${space(w - calSpace - 2)}${symbol}${symbol}${space(calSpace)}`
    ans.push(text)
  }
  return ans
}

module.exports = {
  init,
  space,
}
