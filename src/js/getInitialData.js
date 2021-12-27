import * as data from '../store/DB.json'
import showHiddenText from './showAds'

const tableBody = document.querySelector('.table__body')

export default function getInitialData(){
   tableBody.innerHTML = ''
   for(let i = 0; i < data.length; i++){
      tableBody.innerHTML += `
      <li class="table__item">
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