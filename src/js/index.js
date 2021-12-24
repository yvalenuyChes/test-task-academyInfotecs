import * as data from '../store/DB.json'
const tableBody = document.querySelector('.table__body')


// получаем и выводим всех пользователей из хранилища
for(let i = 0; i < data.length; i++){
   tableBody.innerHTML += `
   <li class="table__item" >
      <h2 class="table__item-title" >
         Name:${data[i].name.firstName}
      </h2>
      <br/>
      <h2 class="table__item-subtitle" >
         Lastname:${data[i].name.lastName}
      </h2>
      <br/>
      <div class="table__item-description hidden">
         <p>
            About: ${data[i].about}
         </p>
         <button class="table__item-description-button">
            Learn more
         </button>
      </div>

      <br/>
      <br/>
      <p>
         Eye color: ${data[i].eyeColor}
      </p>
   </li>
   `
}

const showTextButtonArray = tableBody.querySelectorAll('.table__item-description-button')

for(let i = 0; i < showTextButtonArray.length; i++){
   showTextButtonArray[i].addEventListener('click', event=> {
      const text = event.target.closest('.table__item-description')
      text.classList.toggle('hidden')
   })
}

