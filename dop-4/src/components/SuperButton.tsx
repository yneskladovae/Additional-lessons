import React from 'react';
import s from './SuperButton.module.css'

type ButtonPropsType = {
    callBack: () => void
    color?: string
    children: React.ReactNode
    size?: "big"
    disabled?: boolean

}

export const SuperButton: React.FC<ButtonPropsType> = (props) => {

    const {callBack, color, children, disabled, ...otherProps} = props;

    const onClickHandler = () => {
        callBack();
    }

    // const finalClassName = `${s.button}
    // ${color === "red" ? s.red : s.default}
    // ${disabled ? s.disabled: ""}`;

    const finalClassName = `${s.button} 
    ${color === "red" ? s.red : color === "secondary" ? s.secondary : s.default}
    ${disabled ? s.disabled: ""}`;

    return (
        <>
            <button onClick={onClickHandler} className={finalClassName}>{children}</button>
        </>
    );

};