import React from 'react';
 
function ExpnForm({ add, edit, categories, selectedItem }) {
    let description;
    let sum;
    let data;
    let category;
    const opts = categories.map((ctg) =>
        <option key={ctg.id}>{ctg.name}</option>
    );
    return (
        <div>
            <input placeholder="Description"
                   ref={node => {
                   description = node;
            }} />
            <input placeholder="Sum"
                   ref={node => {
                   sum = node;
            }} />
            <input placeholder="Data as xx.xx.xxxx"
                   ref={node => {
                   data = node;
            }} />
            <select ref={node => {category = node;}}>
                {opts}
            </select>     
            {
                selectedItem.length === 0 ? (
                    <button onClick={() => {
                            add(description.value, sum.value, data.value, category.value);
                            description.value = '';  
                            sum.value = '';  
                            data.value = '';
                            }}>Create expense
                    </button>
                ) : (
                    <button onClick={() => {
                            edit(description.value, sum.value, data.value, category.value);
                            description.value = '';  
                            sum.value = '';  
                            data.value = '';
                            }}>Edit expense
                    </button> 
                )
            }
                
        </div>
    );
      
}
export default ExpnForm

