import React from 'react';
 
function CtgForm({ add, edit, selectedItem }) {
    let input;
    return (
        <div>
            <input placeholder={selectedItem.length === 0 ? "Enter name of category":"Enter new name of category"}
                   ref={node => {
                   input = node;
            }} />
            {
                selectedItem.length === 0 ? (
                    <button 
                        onClick={() => {
                            add(input.value);
                            input.value = '';  
                }}>Add category</button>
                ) : (
                    <button 
                        onClick={() => {
                            edit(input.value);
                            input.value = '';  
                }}
                >Edit category</button>)
            }
        </div>
    );
}
export default CtgForm