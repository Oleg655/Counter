import React, {useState} from 'react';
import {Settings} from "./Settings/Settings";
import {Increment} from "./Increment/Increment";
import s from './App.module.css'

function App() {

    const [maxValue, setMaxvalue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    let [count, setCount] = useState<number>(0)
    let [disabledForSet, setDisabledForSet] = useState<boolean>(false)
    let [disabledForInc, setDisabledForInc] = useState<boolean>(true)
    let [disabledForReset, setDisabledForReset] = useState<boolean>(true)

    return (
        <div className={s.main}>
            <Increment count={count}
                       setCount={setCount}
                       maxValue={maxValue}
                       disabledForInc={disabledForInc}
                       setDisabledForInc={setDisabledForInc}
                       disabledForReset={disabledForReset}
                       setDisabledForReset={setDisabledForReset}
                       startValue={startValue}
                       disabledForSet={disabledForSet}
            />

            <Settings
                startValue={startValue}
                maxValue={maxValue}
                setMaxvalue={setMaxvalue}
                setStartValue={setStartValue}
                setCount={setCount}
                disabledForSet={disabledForSet}
                setDisabledForSet={setDisabledForSet}
                setDisabledForInc={setDisabledForInc}
            />

        </div>
    );
}

export default App;
