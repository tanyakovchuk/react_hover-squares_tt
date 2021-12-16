import React, {useEffect, useState} from 'react';
import './App.scss';
import {getData} from './api/data';
import {Square} from "./components/Square/Square";
import {Form} from "./components/Form/Form";

function App() {
    const [data, setData] = useState({});
    const [mode, setMode] = useState('');

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await getData();
            setData(response);
        }
        fetchMyAPI()
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        setMode(e.target.value);
    }

    return (
        <div className="App">

            <Form handleSubmit={handleSubmit} data={data} mode={mode}/>

            {mode !== '' && <Square field={data[mode].field}/>}
        </div>
    );
}

export default App;
