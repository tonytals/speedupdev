import React from "react";

import {Modal} from "./style/style";

const MenuLateralHeader = (props)=>{

    let open = props.open ?props.open: null;

    return(

        <Modal open={open}>

        </Modal>

    );
}


export default MenuLateralHeader;