import React, {ChangeEvent, useEffect, useState} from 'react';
import '../App.css'

type MainType={
    title:string
    photos:string

}



export const Main = (props:MainType) => {








    let [value, setValue] = useState('')


    const onChangeHndler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)

    }


    return (
        <div>

            <div className={'collectionAll'}>

                <div   >
                    <h3 style={{textAlign:'center'}}>{props.title}</h3>
                    <img className={'CollectionBig'}  src= {props.photos}/>

                </div>


                <div className={'collectionBottom'}>
                    <img style={{
                        height: '100px',
                        borderRadius: '10px',
                        width: '120px',
                        margin: '5px'
                    }} src= {props.photos[1]}/>
                    <img style={{
                        height: '100px',
                        borderRadius: '10px',
                        width: '120px',
                        margin: '5px'
                    }} src= {props.photos[2]}/>
                  <img style={{
                      height: '100px',
                      borderRadius: '10px',
                      width: '120px',
                      margin: '5px'
                  }} src= {props.photos[3]}/>
                </div>

            </div>
        </div>
    );
};

/*
  <div>

            <div>

                <div style={{display: "flex", justifyContent: 'center'}}>
                    <div style={{margin: '10px'}}>Все</div>
                    <div style={{margin: '10px'}}>Горы</div>
                    <div style={{margin: '10px'}}>Море</div>
                    <div style={{margin: '10px'}}>Архитектура</div>
                    <div style={{margin: '10px'}}>Города</div>
                    <div><input value={value} onChange={onChangeHndler} style={{margin: '10px'}}
                                placeholder={'поиск...'}/></div>
                </div>

                <div style={{display:'flex', flexWrap:'wrap'}}>
                    {isLoading && <h1>Loading ...</h1>}
                    {error && <h1>что то сломалось...</h1>}
                    {collections.map((e) => {
                        return (
                            <div>

                                {e.collections.filter((e) => {
                                    return e.name.toLowerCase().includes(value.toLowerCase())
                                }).map((e, index) => {
                                    return (
                                        <div key={index}>
                                            <div>
                                                {e.name}
                                            </div>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                flexDirection: 'column'
                                            }}>
                                                <div>
                                                    <img style={{height: '300px', width: '300px', borderRadius: '10px'}}
                                                         src={e.photos[0]}/>
                                                </div>
                                                <div style={{display: "flex", justifyContent: 'center'}}>
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
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>*/
