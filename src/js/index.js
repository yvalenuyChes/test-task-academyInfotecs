import data from '../store/DB.json'


import {dataSort, nameSort, surnameSort} from './sort'
import getInitialData from './getInitialData'


const table = document.querySelector('.table')
const defaultSortButton = table.querySelector('.default-sort')


const eyeColorSortButton = table.querySelector('.eye-color')
const nameSortButton = table.querySelector('.name')
const surnameSortButton = table.querySelector('.surname')

const container = document.querySelector('.table__filter')



//? получаем и выводим всех пользователей из хранилища

getInitialData()


//? добавляем кнопкам события сортировки


defaultSortButton.addEventListener('click', getInitialData)
eyeColorSortButton.addEventListener('click', dataSort)
nameSortButton.addEventListener('click', nameSort)
surnameSortButton.addEventListener('click', surnameSort)


//? функция фильтрации колонок

container.addEventListener('click', event =>{
   const value = event.target.value
   const arr = document.querySelectorAll(`${value}`)
   for(let i = 0; i < arr.length; i++){
      arr[i].classList.toggle('hide')
   }
   event.target.classList.toggle('active')


   //! убираем видимость кнопок, которые не должны отображаться при фильтрации значений
   if(event.target.value === '.eye-color__container'){
      eyeColorSortButton.classList.toggle('hide')
   }else if(event.target.value === '.table__item-name'){
      nameSortButton.classList.toggle('hide')
      surnameSortButton.classList.toggle('hide')
   }
})


//? редактирование колонок


const editingButtonArr = table.querySelectorAll('.edit_button')

for(let i = 0; i < editingButtonArr.length; i++){
   editingButtonArr[i].addEventListener('click', event =>{
      const item = event.target.closest('.table__item')
      item.querySelector('.editing').classList.toggle('hide')
   })
}

const saveButtonsArr = table.querySelectorAll('.save-button')
const eyeInput = table.querySelector('.input__eye-color')

for(let i = 0; i < saveButtonsArr.length; i++){
   saveButtonsArr[i].addEventListener('click', event =>{
      data[i].eyeColor = eyeInput.value
      getInitialData()
      const container = event.target.closest('.editing')
      container.classList.add('hide')
   })
}

