import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

type getType = {
    userId: number
    id: number
    title: string
    body: string
}

function App() {
    const [get, setGet] = useState<getType[]>([]);
    console.log(get)
    const cleanPageHandler = () => {
        setGet([])
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setGet(json))
    }, [])


    return (
        <div className="App">
            <Button nickName="CleanPage" callBack={cleanPageHandler}/>
            <ul>

                {
                    get.map(el => {
                        return (
                            <li key={el.id}>
                                <div>{el.id}</div>
                                <span>{el.userId}</span>
                                <span>{el.title}</span>
                            </li>
                    )
                    })
                }
            </ul>

        </div>
    );
}

export default App;
