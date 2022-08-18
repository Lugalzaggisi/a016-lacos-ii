let n = Number(prompt(`insira um número para a tabuada`))
const x = [0,1,2,3,4,5,6,7,8,9,10]
for(let i in x){
    console.log(`o resultado de ${n} vezes ${i} é ${n*i}`)
}