import React, {useState} from 'react';
import './App.css';

function App() {

    const main = {
        width: '300px',
        height: '200px',
        padding: '20px',
        border: '2px solid blue',
        margin: '150px auto'
    }

    const counter = {
        width: '280px',
        height: '100px',
        border: '2px solid blue'
    }

    const inc = {
        width: '102px',
        height: '50px',
        marginBottom: '70px'
    }

    const reset = {
        width: '182px',
        height: '50px',
        marginTop: '20px'
    }
    let [value, setValue] = useState(0)
    return (

        <div style={main}>
            <div style={counter} >{value}</div>
            <div>
                <button style={inc} disabled={false} onClick={() => {
                    setValue(value++)
                    if(value === 5){
                        
                    }
                }}>inc
                </button>
                <button style={reset}  disabled={true}  onClick={() => {setValue(0)}}>reset</button>
            </div>
        </div>
    );
}

export default App;
