import React from 'react';
import {PropTypes as pt} from 'prop-types';
import ExpnList from './expnList'
import ExpnForm from './expnForm'

function ExpnBox({
    expenses, 
    categories,
    remove, 
    add,
    edit,
    select, 
    showForm,
    ctgEditing,
    selectedItem,
    toggleHome
}) {
    return (
        <div>
            <div className="App-header">
                <h2>Expenses</h2>
            </div>
            
            {
                ctgEditing > 0 ? (
                    <ExpnForm
                        add={add}
                        selectedItem={selectedItem}
                        edit={edit}
                        categories={categories}
                        />
                ) : (
                    <div>
                        <button onClick = {()=>showForm()} > + </button>
                        <button onClick = {()=>toggleHome()} > Edit categories </button>
                    </div>
                )
            }
            <ExpnList
                    expenses={expenses} 
                    remove={remove}
                    select={select}
                    
            />
        </div>
    );
}

ExpnBox.propTypes = {
  expenses: pt.array.isRequired,
  categories: pt.array.isRequired,
  remove: pt.func.isRequired,
  add: pt.func.isRequired,
  edit: pt.func.isRequired,
  showForm: pt.func.isRequired,
  select: pt.func.isRequired,
  ctgEditing:pt.bool.isRequired,
  selectedItem:pt.string.isRequired,
  toggleHome: pt.func.isRequired,

}
export default ExpnBox;
