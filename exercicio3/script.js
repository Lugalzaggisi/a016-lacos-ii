const comidasFavoritas=["parmegiana", "chouriço", "milanesa", "brócolis", "fígado"]
let o= 1
console.log(`minhas comidas favoritas são:`)
for(let i of comidasFavoritas){
    console.log(`${o++}º: ${i} `)
}