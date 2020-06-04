import Button from '@material-ui/core/Button'
import React from 'react'


const NewButton = ({children, ...props}) =>{
  const {variant, marginleft} = props
  const style  = variant === "contained" ? {
    backgroundColor:"#7AAFF7",
    color:"white",
    marginLeft : marginleft !== undefined ? marginleft : "none"
}:
{
    border:"1px solid #7AAFF7",
    color:"#7AAFF7",
    marginLeft : marginleft !== undefined ? marginleft : "none"
};
    return(
        <Button style={style} {...props}
        variant={variant}
        >{children}</Button>
    )
}
export default NewButton;
