function diamond (n) {
  n = parseInt(n)
  if (n < 1 || n % 2 == 0) return null
  return Array(n).fill(null)
    .map((value, i) => {
      let spaces = Math.abs(i - (Math.floor(n / 2)))
      let stars = n - spaces * 2
      return Array(spaces + 1).join(' ') + Array(stars + 1).join('*')
    })
    .join('\n')
}
console.log('请输入整数:')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.on('line', function (input) {
  let n =Number(input)
  if(!isNaN(n)&&input!=='') {
    console.log(diamond(n))  
  }else{
    console.log('请输入整数:')
  }
})