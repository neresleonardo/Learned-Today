const pesso1 = 1.0
const pesso2 = Number(2.0)

console.log(pesso1,pesso2)
console.log(Number.isInteger(pesso1))
console.log(Number.isInteger(pesso2))

const avaliacao1 = 9.876
const avaliacao2 = 5.456

const total = avaliacao1 * pesso1 + avaliacao2 * pesso2
const media = total / (pesso1 + pesso2)

console.log(media.toFixed(3))
console.log(media.toString(2))
console.log(typeof media)