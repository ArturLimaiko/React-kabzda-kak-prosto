import React, {useState} from 'react';

type PropsType = {
    onClick: (on : boolean) => void
}


export function UncontrolledOnOff(props: PropsType) {
    console.log("OnOff rendered")

// используем хук useState
// со старта хранит значение false
// useState возвращает нам массив( переменные)
// в on сидит false а в setOn сидит функция которую если мы вызовем и передадим в нее новое значение
// то это новое значение присобачится в on  и произойдет перерисовка
    let [on, setOn] = useState(false);
    console.log("on: " + on)

//стили для вкл и выкл кнопки
// в backgroundColor используем тернарное выражение - если on тогда возьмется "green"
    // а иначе "white"
    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        marginLeft: "5px",
        backgroundColor: on ? "white" : "red"
    }
    // стили для индикатора
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor:on ? "green" : "red"
    }

    //Мини функции для вкл и выкл кнопок
    const onClicked = ( ) => {
        setOn(true)
        props.onClick(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onClick(false)
    }

    return (
        <div>
            {/*если по кнопке кликнут то мы вызовем функцию setOn и передадим значение true*/}
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
