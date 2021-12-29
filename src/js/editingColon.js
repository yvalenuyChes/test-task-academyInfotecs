//? редактирование колонок


import data from '../store/DB.json'
import getDefaultData from './getInitialData'


const table = document.querySelector('.table')



export default function colonsEditing(){

const saveButtonsArr = table.querySelectorAll('.save-button')
const eyeInputArr = table.querySelectorAll('.input__eye-color')
const nameInputArr = table.querySelectorAll('.input__name')
const surnameInputArr = table.querySelectorAll('.input__surname')
const textareaValue = table.querySelectorAll('.textarea-about')


for(let i = 0; i < saveButtonsArr.length; i++){
   
   saveButtonsArr[i].addEventListener('click', event =>{
      data[i].name.firstName = nameInputArr[i].value.trim()
      data[i].name.lastName = surnameInputArr[i].value.trim()
      data[i].about = textareaValue[i].value.trim()
      data[i].eyeColor = eyeInputArr[i].value.toLowerCase().trim()
      const container = event.target.closest('.editing')
      container.classList.add('hide')
      getDefaultData()
   })
}

}