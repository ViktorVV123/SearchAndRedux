import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./StoreAndRedux/hooks/redux";
import {Fetch, FetchCategory} from "./StoreAndRedux/Reducer/featch";
import {Main} from "./Components/Main";
import {NavBAr} from "./Components/NavBAr";


function App() {
    const dispatch = useAppDispatch()
    const {categoryes, collections, isLoading, error} = useAppSelector(state => state.useReducer)
    const [value, setValue]:any = useState('')
    const [valuephoto, setValuePhoto]:any = useState('')

    const [FilteredTask, setFilteredTask]: any = useState([])


    useEffect(() => {
        dispatch(FetchCategory())
    }, [])
    useEffect(() => {
        dispatch(Fetch())
    }, [])



    const valuehandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value,)
     /*   const setValuePhoto1 =(collections.filter(e => e.name.toLowerCase().includes(value.toLowerCase())))
return setValuePhoto(setValuePhoto1)*/


    }
    console.log(valuehandler)
        const valueInpt=(value:string)=> {

        console.log(valueInpt)
        }




    const allGg = (key: number) => {
        const result = collections.filter((El) => El.category === key)
        /*console.log(filteredTask)*/
        return setFilteredTask(result);

    }


    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{textAlign: 'center'}}>Коллекция</h1>
            <input onChange={valuehandler}  placeholder={'search...'} value={value}/>
          {/*  <div className={'categoryName'}> {categoryes.map((e, index) => {
                return (
                    <button onClick={() => {
                        allGg(index)
                    }} className={'categoryName'}>
                        <NavBAr name={e.name} key={index}/>
                    </button>
                )
            })}
                <input onChange={valuehandler}  placeholder={'search...'} value={value}/>
            </div>*/}

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: "space-around"
            }}> {
                collections.filter(e=>e.name.toLowerCase().includes(value.toLowerCase())).map((e, index) => {
                    return (
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: "space-around",
                            margin: '10px',
                            padding: '20px'
                        }}>


                            <Main  key={index} title={e.name} photos={e.photos} />
                        </div>
                    )
                })}
                {FilteredTask.map((El: any) => {
                    return (
                        <div>{El.name}</div>
                    )
                })}
            </div>
            {isLoading && <h1>Загрузка...</h1>}
            {error && <h1>что то сломалось...</h1>}
        </div>
    );
}

export default App;
/*
<div className={'app'}>

    <h1 style={{textAlign: 'center'}}>{'Коллекция'}</h1>
    <div>

        {collections.map((e,index) => {

            return (

                <div key={index} className={'categoryName'}>{e.categories.map((e, index) => {

                    return (
                        <div>

                            <div>
                                <button key={index} onClick={()=>filterCategories(index)}>{e.name}</button>


                            </div>

                        </div>
                    )
                })
                }
                    <input placeholder={'поиск...'} value={value} onChange={onChangeInputHandler}/>
                </div>)
        })}
    </div>


    <div>
        {collections.map((e,index) => {
            return (
                <div key={index} style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: "space-around",
                    margin: '10px',
                    padding: '20px'
                }}> {e.collections.filter((e) => {
                    return e.name.toLowerCase().includes(value.toLowerCase())
                }).map((e, index) => {
                    return (
                        <div>
                            <Main key={index} title={e.name} photos={e.photos}/>

                        </div>
                    )
                })
                }
                </div>)
        })}





        {filteredTask.map((El:any)=>{
            return (
                <div>{El.name}</div>
            )
        })}
    </div>
    <div style={{textAlign: 'center'}}>  {isLoading && <h1>Загрузка...</h1>}
        {error && <h1>что то сломалось...</h1>}
    </div>
</div>*/
