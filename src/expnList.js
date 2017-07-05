import React from 'react';
import {PropTypes as pt} from 'prop-types';
import ExpnItem from './expnItem'

function ExpnList({expenses, remove, select}) {
  return (
    <ul>
      {expenses.map((expn) =>
        <ExpnItem 
            key={expn.id}
            expense={expn} 
            remove={remove}
            select={select}
        />
      )}
    </ul>
  );
}

ExpnList.propTypes = {
  expenses: pt.array.isRequired,
  remove: pt.func.isRequired,
  select:pt.func.isRequired

}
export default ExpnList