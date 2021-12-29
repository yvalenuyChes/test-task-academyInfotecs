import '../styles/main.scss'
import {dataSort, nameSort, surnameSort} from './sort'
import getDefaultData from './getInitialData'


const table = document.querySelector('.table')
const defaultSortButton = table.querySelector('.default-sort')


const eyeColorSortButton = table.querySelector('.eye-color')
const nameSortButton = table.querySelector('.name')
const surnameSortButton = table.querySelector('.surname')

const tableFilter = document.querySelector('.filter__buttons')

const tableSort = document.querySelector('.table__sort')


//? получаем и выводим всех пользователей из хранилища

getDefaultData()


//? добавляем кнопкам события сортировки


defaultSortButton.addEventListener('click', getDefaultData)
eyeColorSortButton.addEventListener('click', dataSort)
nameSortButton.addEventListener('click', nameSort)
surnameSortButton.addEventListener('click', surnameSort)


//? функция фильтрации колонок

tableFilter.addEventListener('click', event =>{
   const children = tableFilter.children
   const value = event.target.value
   const arr = document.querySelectorAll(`${value}`)
   for(let i = 0; i < arr.length; i++){
      arr[i].classList.toggle('hide')
   }
   event.target.classList.toggle('active')

   for(let i = 0; i < children.length; i++){
    if(children[i].classList.contains('active')){
      tableSort.classList.add('hide')
      break
    }else{
      tableSort.classList.remove('hide')
    }
   }
})


