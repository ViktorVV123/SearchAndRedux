import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {useAppDispatch, useAppSelector} from "./StoreAndRedux/hooks/redux";
import {Fetch} from "./StoreAndRedux/Reducer/featch";
import {Main} from "./Components/Main";
import {NavBAr} from "./Components/NavBAr";

function App() {





    return (
        <div>
            <NavBAr/>
<Main/>

        </div>
    );
}

export default App;
