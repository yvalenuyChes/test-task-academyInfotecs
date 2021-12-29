import data from '../store/DB.json'


import {dataSort, nameSort, surnameSort} from './sort'
import getDefaultData from './getInitialData'


const table = document.querySelector('.table')
const defaultSortButton = table.querySelector('.default-sort')


const eyeColorSortButton = table.querySelector('.eye-color')
const nameSortButton = table.querySelector('.name')
const surnameSortButton = table.querySelector('.surname')

const container = document.querySelector('.table__filter')



//? получаем и выводим всех пользователей из хранилища

getDefaultData()


//? добавляем кнопкам события сортировки


defaultSortButton.addEventListener('click', getDefaultData)
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


