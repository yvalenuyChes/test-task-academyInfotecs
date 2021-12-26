//? функция сортировки колонок

import * as data from '../store/DB.json'
import showHiddenText from './showAds'
const table = document.querySelector('.table')
const tableBody = document.querySelector('.table__body')
const sortSelector = table.querySelector('.table__sort-selector')


export default function dataFilter(){
   const arr = []
   tableBody.innerHTML = ''
   const value = sortSelector.value
   for(let i = 0; i < data.length; i++){
      arr.push(data[i][value])

   }
   const resultArr = []
   if(value === 'name'){
      for(let i = 0; i < arr.length; i++){
         resultArr.push(arr[i].firstName) 
      }

      resultArr.sort()
   }else{
      for(let i = 0; i < arr.length; i++){
         resultArr.push(arr[i])
         resultArr.sort()
      }
       
   }
   
   for(let i = 0; i < resultArr.length; i++){
      tableBody.innerHTML += `
      <li class="table__item" >
         <div class="table__item-name">
         ${
            value === 'name'
            ? `<h2 class="table__item-title"> Name:${resultArr[i]}</h2>`
            : `<h2 class="table__item-title"> Name:${data[i].name.firstName}</h2>`
         }
         ${
            value === 'surname'
            ? `<h2 class="table__item-subtitle" >Surname:${resultArr[i]} </h2>`
            : `<h2 class="table__item-subtitle" > Surname:${data[i].name.lastName}</h2>`
         }
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
               ${value === 'eyeColor' 
               ? `Eye color: <span style="color:${resultArr[i]}">${resultArr[i]}</span>`
               :  `Eye color: <span style='color:${data[i].eyeColor}'>${data[i].eyeColor}</span>`
            }
               </p>
            </div>
         </li>
      `
      showHiddenText()
   }
}
