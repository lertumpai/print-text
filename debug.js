function space(n = 0, str = " ") {
  return str.repeat(n)
}


function K(h = 7) {
  const ans = []
  const wMid = Math.ceil(h * 0.8)
  const w = wMid + Math.ceil(h / 2) - 1
  const middle = Math.ceil(h / 2)
  for (let line = 1; line <= h; line++) {
    let text
    if (line < middle) {
      text = `K${space(w - line - 1)}K${space(line - 1)}`
    }
    else if (line === middle) {
      text = `${space(wMid, "K")}${space(w - wMid)}`
    } else {
      const lineSumEqualH = h + 1 - line
      text = `K${space(w - lineSumEqualH - 1)}K${space(lineSumEqualH - 1)}`
    }
    ans.push(text)
  }
  return ans
}

console.log(K(5).join("\n"))