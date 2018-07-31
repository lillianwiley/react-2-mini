import React from 'react';

export default function ColorChanger(props) {
  return (
    <select className="dropDownContainer" onChange={(e) => props.update(e.target.value)} disabled={props.allowEdit === 'false'}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}


// //function add(obj){
// var total = obj.num500 + obj.num90
// }

// // let numbers = {
// //   num1: 2,
// //   num2: 4
// // }
// add({num500: 3, num90: 4})