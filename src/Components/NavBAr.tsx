import {ChangeEvent, useState} from "react";
import {useAppSelector} from "../StoreAndRedux/hooks/redux";


type NavBarType={

}

export  const NavBAr = () => {




    return (

            <div style={{display: 'flex', flexDirection: 'column',justifyContent:'center',marginLeft:'40px'}}>
                <h1 style={{textAlign:'center'}}>Моя коллекция </h1>
                <div style={{display: 'flex', margin: '10px'}}>
                    <div style={{margin: '10px'}}>Все</div>
                    <div style={{margin: '10px'}}>Горы</div>
                    <div style={{margin: '10px'}}>Море</div>
                    <div style={{margin: '10px'}}>Архитектура</div>
                    <div style={{margin: '10px'}}>Города</div>


                </div>
            </div>


    );
};

