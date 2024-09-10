
import React from "react";
import {Dialog,DialogHeader,DialogBody,} from "@material-tailwind/react";
import ButtonDefault from "./ButtonDefault";

export const PopupDefault = (props:any)=> {

  const {buttonContent, titleContent, bodyContent} = props
  const [open, setOpen] = React.useState(false);
 

  
  const handleOpen = () => {
    
    setOpen(!open)
  }


  return (
    <>
      <ButtonDefault type="submit">
        {buttonContent}
      </ButtonDefault>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{titleContent}</DialogHeader>
        <DialogBody>{bodyContent}</DialogBody>
        
      </Dialog>
    </>
  );
}