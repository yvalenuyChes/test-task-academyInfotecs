//? функция сортировки колонок
import * as data from '../store/DB.json'
import {showHiddenText} from './index'


const tableBody = document.querySelector('.table__body')
const colFilter = document.querySelector('.table__filter')

export default function filterCards(){
   tableBody.innerHTML = ''
   if(colFilter.value === 'name'){
      for(let i = 0; i < data.length; i++){
      tableBody.innerHTML += `
         <li class="table__item">
         <div>
            <h2 class="table__item-title" >
               Name:${data[i].name.firstName}
            </h2>
         </div>
         <div>
            <h2 class="table__item-subtitle" >
               Surname:${data[i].name.lastName}
            </h2>
         </div>
      </li>
      `
      }
   }else if(colFilter.value === 'about'){
      tableBody.innerHTML = ''
      for(let i = 0; i < data.length; i++){
      tableBody.innerHTML += `
      <li class="table__item">
         <div class="table__item-description hidden">
            <p>
               About: ${data[i].about}
            </p>
            <button class="table__item-description-button">
               Learn more
            </button>
         </div>
      </li>
   `
      }
    showHiddenText()
   }else if(colFilter.value === 'eyeColor'){
      tableBody.innerHTML = ''
      for(let i = 0; i < data.length; i++){
      tableBody.innerHTML += `
      <li class="table__item">
         <div>
            <p>
               Eye color: <span style='color:${data[i].eyeColor}'>${data[i].eyeColor}</span>
            </p>
          </div>
      </li>
      `
      }
   }else{
      tableBody.innerHTML = ''
      for(let i = 0; i < data.length; i++){
         tableBody.innerHTML += `
         <li class="table__item" >
         <div class="table__item-name">
            <h2 class="table__item-title">
               Name:${data[i].name.firstName}
            </h2>
            <h2 class="table__item-subtitle" >
               Surname:${data[i].name.lastName}
            </h2>
         </div>
            <div class="table__item-description hidden">
               <p>
                  About: ${data[i].about}
               </p>
               <button class="table__item-description-button">
                  Learn more
               </button>
            </div>
            <div class="eye-color__container">
               <p>
                  Eye color: <span style='color:${data[i].eyeColor}'>${data[i].eyeColor}</span>
               </p>
            </div>
         </li>
         `
      }
      showHiddenText()
   }
}