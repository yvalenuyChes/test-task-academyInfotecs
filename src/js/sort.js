//? функция сортировки колонок


import data from '../store/DB.json'
import showHiddenText from './showAds'


const tableBody = document.querySelector('.table__body')
const arr = []

for(let i = 0; i < data.length; i++){
   arr.push(data[i])
}

export function dataSort(){
   tableBody.innerHTML = ''
   arr.sort((a,b) => a.eyeColor > b.eyeColor ? 1 : -1)
   
   for(let i = 0; i < arr.length; i++){
      tableBody.innerHTML += `
      <li class="table__item" >
      <div class="table__item-name">
         <div class="table__item-title">
            <h2>
               Name:${arr[i].name.firstName}
            </h2>
         </div>
         <div class="table__item-subtitle">
            <h2>
               Surname:${arr[i].name.lastName}
            </h2>
         </div>
            
      </div>
         <div class="table__item-description hidden">
            <p>
               About: ${arr[i].about}
            </p>
            <button class="table__item-description-button">
               Learn more
            </button>
         </div>
         <div class="eye-color__container table__container">
            <p>
               Eye color: <span style='color:${arr[i].eyeColor}'>${arr[i].eyeColor}</span>
            </p>
         </div>
      </li>
      `
      showHiddenText()
   }
}


export function nameSort(){
   tableBody.innerHTML = ''
   arr.sort((a,b) => a.name.firstName > b.name.firstName ? 1 : -1)

    for(let i = 0; i < arr.length; i++){
      tableBody.innerHTML += `
      <li class="table__item" >
      <div class="table__item-name">
         <div class="table__item-title">
            <h2>
               Name:${arr[i].name.firstName}
            </h2>
         </div>
         <div class="table__item-subtitle">
            <h2>
               Surname:${arr[i].name.lastName}
            </h2>
         </div>
            
      </div>
         <div class="table__item-description hidden">
            <p>
               About: ${arr[i].about}
            </p>
            <button class="table__item-description-button">
               Learn more
            </button>
         </div>
         <div class="eye-color__container table__container">
            <p>
               Eye color: <span style='color:${arr[i].eyeColor}'>${arr[i].eyeColor}</span>
            </p>
         </div>
      </li>
      `
      showHiddenText()
   }
}



export function surnameSort(){
   tableBody.innerHTML = ''
   arr.sort((a,b) => a.name.lastName > b.name.lastName ? 1 : -1)

    for(let i = 0; i < arr.length; i++){
      tableBody.innerHTML += `
      <li class="table__item" >
      <div class="table__item-name">
         <div class="table__item-title">
            <h2>
               Name:${arr[i].name.firstName}
            </h2>
         </div>
         <div class="table__item-subtitle">
            <h2>
               Surname:${arr[i].name.lastName}
            </h2>
         </div>
            
      </div>
         <div class="table__item-description hidden">
            <p>
               About: ${arr[i].about}
            </p>
            <button class="table__item-description-button">
               Learn more
            </button>
         </div>
         <div class="eye-color__container table__container">
            <p>
               Eye color: <span style='color:${arr[i].eyeColor}'>${arr[i].eyeColor}</span>
            </p>
         </div>
      </li>
      `
      showHiddenText()
   }
}
