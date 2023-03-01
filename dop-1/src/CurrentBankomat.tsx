import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>
            <Banknote color={props.money.banknotes === 'Dollars' ? 'aquamarine' : 'green'}>
                <div>{props.money.banknotes}</div>
                <div>{props.money.value}</div>
                <div>{props.money.number}</div>
            </Banknote>


            {/*{props.money.banknotes === 'Dollars'*/}
            {/*?*/}
            {/*    <BanknotGreen>*/}
            {/*        <div>{props.money.banknotes}</div>*/}
            {/*        <div>{props.money.value}</div>*/}
            {/*        <div>{props.money.number}</div>*/}
            {/*    </BanknotGreen>*/}
            {/*    :*/}
            {/*    <BanknotBlue>*/}
            {/*        <div>{props.money.banknotes}</div>*/}
            {/*        <div>{props.money.value}</div>*/}
            {/*        <div>{props.money.number}</div>*/}
            {/*    </BanknotBlue>*/}
            {/*}*/}
        </>
    );
};

const Banknote = styled.div`
  background-color: ${props => {
    if (props.color === 'aquamarine') {
      return 'aquamarine'
    } else {
      return '#61dafb';
    }
  }};
  margin: 10px;
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const BanknotGreen = styled.div`
  background-color: aquamarine;
  margin: 10px;
  width: 400px;
  height: 200px;
`
const BanknotBlue = styled.div`
  background-color: #61dafb;
  margin: 10px;
  width: 400px;
  height: 200px;
`