import React from 'react';

function CtgItem({category, remove, select}) {
  return (
    <li>
      {category.name}
      <button onClick={()=>remove(category.id)}> X </button>
      <button onClick={()=>select(category.id)}> Edit </button>
    </li>
  );
}


export default CtgItem


