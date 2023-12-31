import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App(props: any) {
    //  что то полезное делает
    //обязана вернуть JSX
    console.log("App rendering")


    //ВСЕ СТЕЙТЫ ТУТ =>
    //храним стейт Rating тут
    let [ratingValue, setRatingValue] = useState<RatingValueType>(2);
    //храним стейт Accordion тут
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    //храним стейт Accordion тут
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className={"App"}>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"Users page"}/>

            Article 1
            <img src={"https://cdn.iconscout.com/icon/free/png-256/free-webstorm-3629742-3030793.png"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>


            <span> Контролируемый Accordion</span>
            <Accordion titleValue={"This is first title"}  collapsed={accordionCollapsed} onClick={ () => setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<Accordion titleValue={"This is second title"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>*/}


            <span> Неконтролируемый Accordion</span>
            <UncontrolledAccordion titleValue={"This is first title"}/>
            <UncontrolledAccordion titleValue={"This is second title"}/>

            Article 2
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            {/*<span> <b>Контролируемый OnOff</b></span>*/}
            {/*<OnOff on={switchOn} onClick={setSwitchOn}/>*/}

            {/*<span> <b>Неконтролируемый OnOff</b></span>*/}
            <UncontrolledOnOff onClick={setSwitchOn} /> {switchOn.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
