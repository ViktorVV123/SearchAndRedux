import React, {ChangeEvent, useEffect, useState} from "react";
import '../App.css'


type NavBarType = {

    name: string
}

export const NavBAr = (props: NavBarType) => {


    return (

        <div>

           <div className={'categoryName'}>{props.name}</div>


        </div>



    );
};

