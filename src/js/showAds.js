//? функция скрытия/показа текста


const tableBody = document.querySelector('.table__body')

export default function showHiddenText(){
   const showTextButtonArray = tableBody.querySelectorAll('.table__item-description-button')

   for(let i = 0; i < showTextButtonArray.length; i++){
      showTextButtonArray[i].addEventListener('click', event=> {
         const text = event.target.closest('.table__item-description')
         text.classList.toggle('hidden')
      })
   }
}