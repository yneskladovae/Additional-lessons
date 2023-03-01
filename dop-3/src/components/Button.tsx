import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button: React.FC<ButtonPropsType> = ({callBack, name}) => {
    const onClickHandler = () => {
        callBack()
    }

    return (
        <>
            <button onClick={onClickHandler}>{name}</button>
        </>
    );
};