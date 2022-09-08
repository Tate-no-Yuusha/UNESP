function Atividade1(){
    const seed = 10
    var contador = 0
    
    gerador(seed,contador)
}

function gerador(seed,contador){
    if(contador == 10) {
        return 0
    }
    if(contador ==0) {
        console.log(`X(${contador}): ${seed}\n`)
        console.log(`${seed}\n`)
    }
    contador++
    novo = contador
    const a = 16807
    const M = Math.pow(2,31)-1
    const c = 0
    seed = (((a*seed)+c)%M)
    console.log(`X(${contador}): ${seed}\n`)
    return gerador(seed,novo)
}
Atividade1();