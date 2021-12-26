import * as data from '../store/DB.json'
import filterCards from './hideColons'
import dataFilter from './sort'
import showHiddenText from './showAds'

const table = document.querySelector('.table')
const tableBody = document.querySelector('.table__body')
const colFilter = document.querySelector('.table__filter')
const sortSelector = table.querySelector('.table__sort-selector')


//? получаем и выводим всех пользователей из хранилища

for(let i = 0; i < data.length; i++){
   tableBody.innerHTML += `
   <li class="table__item" >
   <div class="table__item-name">
      <h2 class="table__item-title" >
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

//! функция которая должна добавлять поля автоматически, однако можно убирать не нужные поля

// for(let i = 0; i < (Object.keys(data[0]).length); i++){
//    colFilter.innerHTML += `<option value = ${Object.keys(data[0])[i]}>${Object.keys(data[0])[i]}</option>`
//    if(Object.keys(data[0])[i] === 'phone'){
//       console.log('find');
//    }
// }


// colFilter.addEventListener('change', filterCards)



sortSelector.addEventListener('change', dataFilter)




//? функция скрытия/показа колонки


