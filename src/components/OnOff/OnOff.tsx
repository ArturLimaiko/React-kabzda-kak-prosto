import React from 'react';

type PropsType = {
   on: boolean
    onClick:(on : boolean) => void
}


export function OnOff(props: PropsType) {
    console.log("OnOff rendered")
// используем хук useState
// со старта хранит значение false
// useState возвращает нам массив( переменные)
// в on сидит false а в setOn сидит функция которую если мы вызовем и передадим в нее новое значение
// то это новое значение присобачится в on  и произойдет перерисовка

    console.log("on: " + props.on)

//стили для вкл и выкл кнопки
// в backgroundColor используем тернарное выражение - если on тогда возьмется "green"
    // а иначе "white"
    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        marginLeft: "5px",
        backgroundColor: props.on ? "white" : "red"
    }
    // стили для индикатора
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div>
            {/*если по кнопке кликнут то мы вызовем функцию setOn и передадим значение true*/}
            <div style={onStyle} onClick={ () => {props.onClick(true)}}>On</div>
            <div style={offStyle} onClick={ () => {props.onClick(false) }}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
