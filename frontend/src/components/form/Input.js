import React from 'react';

const Input = ({ name, type, data, setData, classes = "" }) => {
    return ( 
        <input
        type={type}
        name={name}
        value={data}
        onChange={(e) => {
            setData(e.target.value);
        }}
        className={`form-control ${classes}`}
      />
      
     );
}
 
export default Input;