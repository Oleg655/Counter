import React from 'react';
import s from './Increment.module.css';
import {Button} from "../Button/Button";

type IncrementPropsType = {
    count: number
    maxValue: number
    setCount: (value: number) => void
    disabledForInc: boolean
    setDisabledForInc: (value: boolean) => void
    disabledForReset: boolean
    setDisabledForReset: (value: boolean) => void
    startValue: number
    disabledForSet: boolean
}


export function Increment(props: IncrementPropsType) {

    let text

    if (props.maxValue < 0 || props.startValue < 0 || props.maxValue === props.startValue || props.startValue > props.maxValue) {
        text = 'incorrect value!'
    } else {
        text = 'enter values and press "set"'
    }

    const inc = () => {
        props.setCount(props.count + 1)
        if (props.count === props.maxValue - 1) {
            props.setDisabledForInc(true)
            props.setDisabledForReset(false)
        }
    }
    const reset = () => {
        props.setCount(props.startValue)
        props.setDisabledForReset(true)
        props.setDisabledForInc(false)
    }

    return (
        <div className={s.main}>
            {props.disabledForSet === false ?
                <div className={s.start + ' ' + (text === 'incorrect value!' ? s.redStart : '')}>{text}</div> : <div
                    className={s.counter + ' ' + (props.count === props.maxValue ? s.redCounter : '')}>{props.count}</div>}
            <div className={s.panel}>
                <Button  disabled={props.disabledForInc} click={inc} text={'inc'}/>

                <Button disabled={props.disabledForReset} click={reset} text={'reset'}/>
            </div>
        </div>
    )
}