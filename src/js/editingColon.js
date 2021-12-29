//? редактирование колонок


import data from '../store/DB.json'
import getDefaultData from './getInitialData'


const table = document.querySelector('.table')



export default function colonsEditing(){

const saveButtonsArr = table.querySelectorAll('.save-button')
const eyeInputArr = table.querySelectorAll('.input__eye-color')

for(let i = 0; i < saveButtonsArr.length; i++){
   
   saveButtonsArr[i].addEventListener('click', event =>{
      data[i].eyeColor = eyeInputArr[i].value
      const container = event.target.closest('.editing')
      container.classList.add('hide')
      getDefaultData()
   })
}

}