import Button from '@material-ui/core/Button'
import React from 'react'


const NewButton = ({children, ...props}) =>{
  const {variant, marginleft, disabled,parentStyle} = props
  const style  = variant === "contained" ? {
    backgroundColor:"#7AAFF7",
    color:"white",
    marginLeft : marginleft !== undefined ? marginleft : "none"
}:
{
    color : disabled === true ? "#888888" : "#7aaff7" ,
    border : disabled === true ? "1px solid #888888" : "1px solid #7AAFF7",
    marginLeft : marginleft !== undefined ? marginleft : "none",
};
    return(
        <Button style={parentStyle !== undefined ? parentStyle : style} {...props}
        disabled={disabled}
        variant={variant}
        >{children}</Button>
    )
}
export default NewButton;
