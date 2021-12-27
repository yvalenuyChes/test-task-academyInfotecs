
import filterCards from './hideColons'
import {dataFilter, nameFilter, surnameFilter} from './sort'
import getInitialData from './getInitialData'


// const colFilter = document.querySelector('.table__filter')
const table = document.querySelector('.table')
const sortButton = table.querySelector('.eye-color')
const nameSortButton = table.querySelector('.name')
const surnameSortButton = table.querySelector('.surname')

//? получаем и выводим всех пользователей из хранилища



getInitialData()


sortButton.addEventListener('click', dataFilter)
nameSortButton.addEventListener('click', nameFilter)
surnameSortButton.addEventListener('click', surnameFilter)

//? функция скрытия/показа колонки

// colFilter.addEventListener('change', filterCards)

