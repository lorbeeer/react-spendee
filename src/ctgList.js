import React from 'react';
import {PropTypes as pt} from 'prop-types';
import CtgItem from './ctgItem'

function CtgList({categories, remove, select}) {
  return (
    <ul>
      {categories.map((ctg) =>
        <CtgItem 
            key={ctg.id}
            category={ctg} 
            remove={remove}
            select={select}
        />
      )}
    </ul>
  );
}

CtgList.propTypes = {
  categories: pt.array.isRequired,
  remove: pt.func.isRequired,
  select: pt.func.isRequired

}
export default CtgList