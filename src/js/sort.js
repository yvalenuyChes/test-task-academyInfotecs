//? функция сортировки колонок


import * as data from '../store/DB.json'
import showHiddenText from './showAds'
const tableBody = document.querySelector('.table__body')


export function dataSort(){
   tableBody.innerHTML = ''
   const arr = data.sort((a,b) => a.eyeColor > b.eyeColor ? 1 : -1)
   
   for(let i = 0; i < arr.length; i++){
      tableBody.innerHTML += `
      <li class="table__item" >
      <div class="table__item-name">
         <div class="table__item-title">
            <h2>
               Name:${data[i].name.firstName}
            </h2>
         </div>
         <div class="table__item-subtitle">
            <h2>
               Surname:${data[i].name.lastName}
            </h2>
         </div>
            
      </div>
         <div class="table__item-description hidden">
            <p>
               About: ${data[i].about}
            </p>
            <button class="table__item-description-button">
               Learn more
            </button>
         </div>
         <div class="eye-color__container table__container">
            <p>
               Eye color: <span style='color:${data[i].eyeColor}'>${data[i].eyeColor}</span>
            </p>
         </div>
      </li>
      `
      showHiddenText()
   }
}


export function nameSort(){
   tableBody.innerHTML = ''
   const arr = data.sort((a,b) => a.name.firstName > b.name.firstName ? 1 : -1)

    for(let i = 0; i < arr.length; i++){
      tableBody.innerHTML += `
      <li class="table__item" >
      <div class="table__item-name">
         <div class="table__item-title">
            <h2>
               Name:${data[i].name.firstName}
            </h2>
         </div>
         <div class="table__item-subtitle">
            <h2>
               Surname:${data[i].name.lastName}
            </h2>
         </div>
            
      </div>
         <div class="table__item-description hidden">
            <p>
               About: ${data[i].about}
            </p>
            <button class="table__item-description-button">
               Learn more
            </button>
         </div>
         <div class="eye-color__container table__container">
            <p>
               Eye color: <span style='color:${data[i].eyeColor}'>${data[i].eyeColor}</span>
            </p>
         </div>
      </li>
      `
      showHiddenText()
   }
}



export function surnameSort(){
   tableBody.innerHTML = ''
   const arr = data.sort((a,b) => a.name.lastName > b.name.lastName ? 1 : -1)

    for(let i = 0; i < arr.length; i++){
      tableBody.innerHTML += `
      <li class="table__item" >
      <div class="table__item-name">
         <div class="table__item-title">
            <h2>
               Name:${data[i].name.firstName}
            </h2>
         </div>
         <div class="table__item-subtitle">
            <h2>
               Surname:${data[i].name.lastName}
            </h2>
         </div>
            
      </div>
         <div class="table__item-description hidden">
            <p>
               About: ${data[i].about}
            </p>
            <button class="table__item-description-button">
               Learn more
            </button>
         </div>
         <div class="eye-color__container table__container">
            <p>
               Eye color: <span style='color:${data[i].eyeColor}'>${data[i].eyeColor}</span>
            </p>
         </div>
      </li>
      `
      showHiddenText()
   }
}
