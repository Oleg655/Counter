import React from 'react'
import s from "../Increment/Increment.module.css";

type ButtonPropsType = {
    text: string
    click: () => void
    disabled: boolean
}

export function Button (props: ButtonPropsType){

    return <div>
        <button className={s.button} disabled={props.disabled} onClick={props.click}>{props.text}</button>
    </div>
}