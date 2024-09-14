// function nome(texto: any){
//     texto.split('/')
// }
// try{
//     //tentar fazer tudo o que está aqui
//     console.log('Adriano');
//     nome(123)
// } catch(erro){
//     //caso algum erro aconteça, ele é capturado aqui
//     if(erro instanceof TypeError){
//         console.log(erro.message)
//     }
//     // console.log('Erro desconhecido'); 
// } 
// finally{
//     //independente do erro ou não, esse bloco de código será executado
//     console.log('Sempre será executado');
// }

try {
    console.log('Antes de lançar um erro')

    //lançar um erro
    // throw 'Um erro criado por mim'
    throw new Error('Um erro do javascript')

} catch (erro) {
   if (erro instanceof Error) {
    console.log(erro.message)
   }
}