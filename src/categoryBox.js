import React from 'react';
import {PropTypes as pt} from 'prop-types';
import CtgList from './ctgList'
import CtgForm from './ctgForm'

function CategoryBox({
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
                <h2>Categories</h2>
            </div>
            {
                ctgEditing > 0 ? (
                    <CtgForm
                        add={add}
                        selectedItem={selectedItem}
                        edit={edit}
                        />
                ) : (
                    <div>
                        <button onClick = {()=>showForm()} > + </button>
                        <button onClick = {()=>toggleHome()} > Expenses </button>
                    </div>)
            }
            <CtgList
                    categories={categories} 
                    remove={remove}
                    select={select}
                    
            />
        </div>
    );
}

CategoryBox.propTypes = {
  categories: pt.array.isRequired,
  remove: pt.func.isRequired,
  add: pt.func.isRequired,
  edit: pt.func.isRequired,
  showForm: pt.func.isRequired,
  select: pt.func.isRequired,
  ctgEditing:pt.bool.isRequired,
  selectedItem:pt.string.isRequired,
  toggleHome: pt.func.isRequired

}
export default CategoryBox;
