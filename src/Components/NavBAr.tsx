import React, {ChangeEvent, useEffect, useState} from "react";
import '../App.css'


type NavBarType = {

    name: string
    key: number
}

export const NavBAr = (props: NavBarType) => {



    return (

        <div >

           <div  onClick={()=>props.key}>{props.name}</div>


        </div>



    );
};

