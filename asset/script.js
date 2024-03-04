// PARI E DISPARI

// 1 recupero gli elementi dal DOM
// 2 creo la funzione per il numero del PC
// 3 creo la funzione per recuperare il valore numerico fornito dall'utente
// 4 recupero gli argomenti da dare nei parametri della funziona 5
// 5 creo la funzione per verificare se la somma dei miei numeri è pari o dispari
// 6 apro la lista degli eventi e recupero tutto ciò che ho dichiarato fuori
// 7 verifico cosa ha scelto l'utente tra pari e dispari e contollo se corrisponde al risultato della somma
// 8 stampo sul DOM

// 1
const button = document.getElementById('button')
const victory = document.getElementById('vincitore')
const number = document.querySelector('input')
const pR = document.querySelector('select')
// 2
function getResultCpu() {
    const resultCpu = Math.floor(Math.random() * 6)
    return resultCpu
}
// 3
function getUserNumber() {
    const userNumber = parseInt(number.value)
    if (userNumber < 1 || userNumber > 5){
        alert('DEVI INSERIRE UN NUMERO COMPRESO TRA 1 E 5')
        return
    }
    if (isNaN(userNumber)){
        alert('DEVI INSERIRE UN NUMERO')
        return
    }
    return userNumber
}

// 4
const result = isEven(getResultCpu, getUserNumber)
// 5
function isEven(num1, num2){
    const sum = num1 + num2
    let resultNumber = ''
    if (sum % 2 === 0){
        resultNumber = 'PARI'
    } else{
        resultNumber = 'DISPARI'
    }
    return resultNumber
}
