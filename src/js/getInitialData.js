import data from '../store/DB.json'
import colonsEditing from './editingColon'
import showHiddenText from './showAds'

const tableBody = document.querySelector('.table__body')
const table = document.querySelector('.table')

export default function getDefaultData(){

   tableBody.innerHTML = ''
   for(let i = 0; i < data.length; i++){
      tableBody.innerHTML += `
      <li class="table__item">
      <div>
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
               <div class="table__item-editing">
                  <button class="table__item-editing edit_button table__button">Edit</button>
               </div>
            </div>
      </div>


      <div class="editing hide">
         <div class="editing-name">
            <div class="editing-title">
               <input value=${data[i].name.firstName} placeholder="Name" class="input input__name"/>
            </div>
            <div class="editing-subtitle">
               <input value=${data[i].name.lastName} placeholder="Surname" class="input input__surname" />
            </div>   
            </div>
            <div class="editing-description hidden">
               <textarea placeholder="About" class="textarea-about"></textarea>
            </div>
            <div class="eye-color__container">
               <div>
                  Eye color: <input value = ${data[i].eyeColor} placeholder="Eye color" class="input__eye-color" />
               </div>
               <div class="editing-save">
                  <button class="save-button table__button">Save</button>
               </div>
            </div>
      </div>
      </li>
      `
   }

   const editingButtonArr = table.querySelectorAll('.edit_button')


   for(let i = 0; i < editingButtonArr.length; i++){
      editingButtonArr[i].addEventListener('click', event =>{
         const parentNode = event.target.closest('.table__item')
         parentNode.querySelector('.editing').classList.toggle('hide')
      })
   }
   showHiddenText()
   colonsEditing()
}