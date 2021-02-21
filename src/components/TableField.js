import React from 'react';

const TableField = ({fieldName, settingsField, removeBook, editBook}) => {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField &&
      <>
        <i onClick={editBook} className="fas fa-edit"/>
        <i onClick={removeBook} className="far fa-trash-alt"/>
      </>
      }

    </div>
  );
}
;

export default TableField;
