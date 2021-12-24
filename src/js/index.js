import * as data from '../store/DB.json'
const tableBody = document.querySelector('.table__body')


// const appData = JSON.parse(data)

console.log()



// table.innerHTML += `
// ${
//     for (let i = 0; i < data.length; i++){

// }
// }
// `

for(let i = 0; i < data.length; i++){
   tableBody.innerHTML += `
   <li>
   <h2>Name:${data[i].name.firstName}</h2>
   <br/>
   <h2>Last Name:${data[i].name.lastName}</h2>
   <br/>
   <p>About:
   ${data[i].about}
   </p>
   <br/>
   ${data[i].eyeColor}
   </li>
   `
}

