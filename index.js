const range = 100_000_000
let counter = 0
const loop = () => {
  let str = ''
  for(let i = 0; i< range; i++) {
    str+=`${i}`
    counter++
  }
  return str
}

const result = loop()
console.log({result})
console.log('This loop has ran ' + counter + ' times')
