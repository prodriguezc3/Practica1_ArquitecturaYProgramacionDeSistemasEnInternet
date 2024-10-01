//Paula Rodriguez Cubas Practica 1
const numeroPrincipioD:number = 3

console.log('------------------------------------')
function moverDisco(numeroDisco:number, origen:string, destino:string, aux:string): void {
   if(numeroDisco === 1){ 
        console.log(`Muevo disco ${numeroDisco} de ${origen} a ${destino}`)
        return
    }

    moverDisco(numeroDisco-1, origen, aux, destino)
        console.log(`Muevo disco ${numeroDisco} de ${origen} a ${destino}`)
    moverDisco(numeroDisco-1, aux, destino, origen)
    
}

moverDisco(numeroPrincipioD, 'Origen', 'Final', 'Auxilar')
