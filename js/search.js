'use strict'
const input = document.getElementById('input')
const sorry = document.getElementById('sorry')
const input_button = document.getElementById('search')
input_button.onclick = search

let result = []

function search(){
    result = []

    let words = input.value.split(' ')
    words = words.filter( (word) => word.length > 0 )
    words = words.map( (word) => {return word.toLowerCase()} )

    console.log('words',words)

    PHONES.forEach( (phone) => {
        let isGet = false
        let brand = phone.brand.toLowerCase()
        let model = phone.model.toLowerCase()

        words.forEach( (word) => {
            if (brand.indexOf(word) >= 0) {
                if  (isGet == false ) {
                    isGet = true
                    result.push(phone)
                }
            }
        } )

        if (isGet === false) {
            words.forEach( (word) => {
                if (model.indexOf(word) >= 0) {
                    if  (isGet == false ) {
                        isGet = true
                        result.push(phone)
                    }
                }
            } )
        }
    })

    if (result.length===0) {
        sorry.innerHTML=`Извините, по запросу <span>${input.value}</span> ничего не найдено`
    } else {
        sorry.innerHTML=''
    }
    console.log(result)
}

document.onkeyup=getKEYUp

function getKEYUp(event){
    if(event.code==='Enter' && input.value.length)search()
}