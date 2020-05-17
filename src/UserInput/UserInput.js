import React from 'react';


const userinput = (props) =>{
    const inputStyle = {
        border: '2px solid red'
    };
    return(
    <div >
  
    <input type="text" style={inputStyle} onChange={props.changedName} value={props.currentName}/>
    </div>
    )
};
export default userinput;