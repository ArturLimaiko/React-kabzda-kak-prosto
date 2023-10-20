import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string

}


//в компонент куда мы передаем пропсы ВСЕГДА ОПИСЫВАЕМ ТИП этих пропсов- в нашем случае props: AccordionPropsType
//пропсы получили для того что бы вернуть соответстующую JSX разметку
export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    //collapsed переменная ;
    //setCollapsed функция которую можем вызвать и передать значение стейта
    //вызываем useState и со старта задаем значение collapsed - false
    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {/* во время клика по кнопке вызови функцию setCollapsed
             и передадим в нее значение противоположное !collapsed
             и далее реакт перерисовывает разметку основываясь на переданном значении*/}
            <button onClick={()=> {setCollapsed(!collapsed)}}> TOGGLE</button>
            { !collapsed && <AccordionBody/>}
        </div>
    );
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>-- {props.title} --</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul> ==Menu==
            <li> -- 1 -- </li>
            <li> -- 2 --</li>
            <li> -- 3 --</li>
        </ul>
    );
}