import React, {ChangeEvent, useState} from 'react';

type InputType = {
    value: string
    setValue:(value: string) => void
}

export const Input = (props: InputType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value)
    }
    return (
        <>
            <input value={props.value} onChange={onChangeHandler}/>
        </>
    );
};