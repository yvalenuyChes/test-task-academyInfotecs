import * as data from '../store/DB.json'
const tableBody = document.querySelector('.table__body')
const colFilter = document.querySelector('.table__filter')


//? получаем и выводим всех пользователей из хранилища

for(let i = 0; i < data.length; i++){
   tableBody.innerHTML += `
   <li class="table__item" >
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
      <div class="table__item-description hidden">
         <p>
            About: ${data[i].about}
         </p>
         <button class="table__item-description-button">
            Learn more
         </button>
      </div>
      <div>
         <p>
            Eye color: <span style='color:${data[i].eyeColor}'>${data[i].eyeColor}</span>
         </p>
      </div>
   </li>
   `
}

//? функция скрытия/показа текста

const showTextButtonArray = tableBody.querySelectorAll('.table__item-description-button')

for(let i = 0; i < showTextButtonArray.length; i++){
   showTextButtonArray[i].addEventListener('click', event=> {
      const text = event.target.closest('.table__item-description')
      text.classList.toggle('hidden')
   })
}


//? функция сортировки колонок

console.log(Object.keys(data[0]).length);



for(let i = 0; i < (Object.keys(data[0]).length); i++){
   colFilter.innerHTML += `<option value = ${Object.keys(data[0])[i]}>${Object.keys(data[0])[i]}</option>`
}




//? функция скрытия/показа колонки


