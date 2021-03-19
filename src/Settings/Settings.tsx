import React from 'react';
import s from './Settings.module.css'
import {Button} from "../Button/Button";

type SettingsPropsType = {
    startValue: number
    maxValue: number
    setMaxvalue: (e: number) => void
    setStartValue: (e: number) => void
    setCount: (value: number) => void
    disabledForSet: boolean
    setDisabledForSet: (value: boolean) => void
    setDisabledForInc: (value: boolean) => void
}

export function Settings(props: SettingsPropsType) {

    const set = () => {
        props.setCount(props.startValue)
        props.setDisabledForSet(!props.disabledForSet)
        props.setDisabledForInc(false)
    }

    return (
        <div className={s.main}>
            <div className={s.selects}>
                <div>
                    max value: <input
                    className={(props.maxValue < 0 || props.maxValue === props.startValue || props.startValue > props.maxValue ? s.input : '')}
                    value={props.maxValue} type="number"
                    onChange={(e) => props.setMaxvalue(e.currentTarget.valueAsNumber)}
                    onClick={() => {
                        props.setDisabledForSet(false)
                        props.setDisabledForInc(true)
                    }}
                />
                </div>
                <div>
                    start value: <input
                    className={(props.startValue < 0 || props.maxValue === props.startValue || props.startValue > props.maxValue ? s.input : '')}
                    value={props.startValue} type="number"
                    onChange={(e) => props.setStartValue(e.currentTarget.valueAsNumber)}
                    onClick={() => {
                        props.setDisabledForSet(false)
                        props.setDisabledForInc(true)
                    }}
                />
                </div>
            </div>
            <div className={s.panel}>
                <Button text={'set'} disabled={props.disabledForSet || props.maxValue < 0 || props.startValue < 0 || props.maxValue === props.startValue || props.startValue > props.maxValue}
                        click={set}
                />
            </div>
        </div>
    )
}