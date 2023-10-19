import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}


//в компонент куда мы передаем пропсы ВСЕГДА ОПИСЫВАЕМ ТИП этих пропсов- в нашем случае props: AccordionPropsType
//пропсы получили для того что бы вернуть соответстующую JSX разметку
export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            { !props.collapsed && <AccordionBody/>}
            {/*// !props.collapsed  если НЕ свернут(если не передано true) то покажи меню*/}
            {/*{ props.collapsed === false && <AccordionBody/>} //если collapsed НЕ свернут то покажи меню*/}
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