import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useAppDispatch, useAppSelector} from "./StoreAndRedux/hooks/redux";
import {Fetch} from "./StoreAndRedux/Reducer/featch";
import {Main} from "./Components/Main";
import {NavBAr} from "./Components/NavBAr";

function App() {

    const dispatch = useAppDispatch()
    const {collections, isLoading, error} = useAppSelector(state => state.useReducer)
    const [value,setValue]=useState('')
    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    useEffect(() => {
        dispatch(Fetch())
    }, [])


    return (
        <div className={'app'}>

            <h1 style={{textAlign: 'center'}}>{'Коллекция'}</h1>
            <div>

                {collections.map((e) => {

                    return (

                        <div className={'categoryName'}>{e.categories.map((e,index) => {

                            return (
                                <div>

                                    <div><NavBAr key={index} name={e.name}/></div>

                                </div>
                            )
                        })
                        }
                            <input placeholder={'поиск...'} value={value} onChange={onChangeInputHandler}/>
                        </div>)
                })}
            </div>


            <div>
                {collections.map((e) => {
                    return (
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: "space-around",
                            margin: '10px',
                            padding: '20px'
                        }}> {e.collections.filter((e) => {
                            return e.name.toLowerCase().includes(value.toLowerCase())
                        }).map((e,index) => {
                            return (
                                <div>
                                    <Main key={index} title={e.name} photos={e.photos}/>

                                </div>
                            )
                        })
                        } </div>)
                })}
            </div>
          <div style={{textAlign:'center'}}>  {isLoading && <h1>Загрузка...</h1>}
            {error && <h1>что то сломалось...</h1>}
          </div>
        </div>
    );
}

export default App;
