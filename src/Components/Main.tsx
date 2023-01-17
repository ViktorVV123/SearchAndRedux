import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../StoreAndRedux/hooks/redux";
import {Fetch} from "../StoreAndRedux/Reducer/featch";

export const Main = () => {


    const dispatch = useAppDispatch()
    const {collections, isLoading, error} = useAppSelector(state => state.useReducer)


    useEffect(() => {
        dispatch(Fetch())
    }, [])



    let [value,setValue] = useState('')




    const onChangeHndler = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)

    }



    return (
        <div>
            <input value={value} onChange={onChangeHndler} style={{margin: '10px'}} placeholder={'поиск...'} />
            <div className="App">
                {isLoading && <h1>Loading ...</h1>}
                {error && <h1>что то сломалось...</h1>}
                {collections.map((e) => {
                    return (
                        <div>

                            {e.collections.filter((e)=>{
                                return e.name.toLowerCase().includes(value.toLowerCase())
                            }).map((e, index) => {
                                return (
                                    <div key={index}>
                                        <div>
                                            {e.name}
                                        </div>
                                        <div><img style={{height: '300px', width: '300px', borderRadius: '10px'}}
                                                  src={e.photos[0]}/></div>
                                        <div style={{display: "flex",justifyContent:'center'}}>
                                            <img style={{
                                                height: '100px',
                                                borderRadius: '10px',
                                                width: '100px',
                                                margin: '5px'
                                            }} src={e.photos[1]}/>
                                            <img style={{
                                                height: '100px',
                                                borderRadius: '10px',
                                                width: '100px',
                                                margin: '5px'
                                            }} src={e.photos[2]}/>
                                            <img style={{
                                                height: '100px',
                                                width: '100px',
                                                borderRadius: '10px',
                                                margin: '5px'
                                            }} src={e.photos[3]}/>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

/*
<div>
    <div className="App">
        {isLoading && <h1>Loading ...</h1>}
        {error && <h1>что то сломалось...</h1>}
        {collections.map((e) => {
            return (
                <div>

                    {e.collections.map((e, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    {e.name}
                                </div>
                                <div><img style={{height: '300px', width: '300px', borderRadius: '10px'}}
                                          src={e.photos[0]}/></div>
                                <div style={{display: "flex",justifyContent:'center'}}>
                                    <img style={{
                                        height: '100px',
                                        borderRadius: '10px',
                                        width: '100px',
                                        margin: '5px'
                                    }} src={e.photos[1]}/>
                                    <img style={{
                                        height: '100px',
                                        borderRadius: '10px',
                                        width: '100px',
                                        margin: '5px'
                                    }} src={e.photos[2]}/>
                                    <img style={{
                                        height: '100px',
                                        width: '100px',
                                        borderRadius: '10px',
                                        margin: '5px'
                                    }} src={e.photos[3]}/>
                                </div>

                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
</div>*/
