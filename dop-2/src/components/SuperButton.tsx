import React from 'react';

type SuperButtonPropsType = {
    name: string
    callBack: () => void
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({name, callBack}) => {
    const onClickHandler = () => {
        callBack();
    }
    return (
        <>
            <button onClick={onClickHandler}>{name}</button>
        </>
    );
};