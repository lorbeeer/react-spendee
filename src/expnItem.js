import React from 'react';

function ExpnItem({expense, remove, select}) {

  return (
    <li>
      <div>
          {expense.category} {expense.description} {expense.data} {expense.sum}
          <button onClick={()=>remove(expense.id)}> X </button>
          <button onClick={()=>select(expense.id)}> Edit </button>
      </div>
    </li>
  );
}


export default ExpnItem
