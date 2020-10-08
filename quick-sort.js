let passadas = 0, comparacoes = 0, trocas = 0
function quicksort(arr, inicio = 0, fim = arr.length - 1){

    console.log({arr, inicio, fim})

    if(fim > inicio){
        passadas ++
        let posDiv = inicio - 1
        let posPivot = fim

        for (let i = inicio; i < fim; i++){ 
            comparacoes++

            if(arr[i] < arr[posPivot]){
                posDiv++
                [arr[i], arr[posDiv]] = [arr[posDiv], arr[i]]
                trocas++
            }
        }

        //Ultimo incremento de posDiv, após o loop terminar
        posDiv++
        [arr[posDiv], arr[posPivot]] = [arr[posPivot], arr[posDiv]]
        trocas++

        quicksort(arr, inicio, posDiv - 1) // Lado esquerdo
        quicksort(arr, posDiv + 1, fim) // Lado direito
    }
}

// let nums = [54, 81, 72, 36, 9, 90, 63, 27, 18, 45]

// quicksort(nums)
// console.log(nums)

// console.log('Passadas: ' + passadas)
// console.log('Comparaçoes: ' + comparacoes)
// console.log('Trocas: ' + trocas)

const nomes = require('.dados/100-mil-nomes')
