import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion';
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App(props: any) {
    //  что то полезное делает
    //обязана вернуть JSX
    console.log("App rendering")

    return (
        <div className="App">
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"Users page"}/>

            Article 1
            <img src={"https://cdn.iconscout.com/icon/free/png-256/free-webstorm-3629742-3030793.png"}/>
            <Rating value={0}/>
            <Accordion titleValue={"This is first title"} collapsed={false}/>
            <Accordion titleValue={"This is second title"} collapsed={true}/>

            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff />
            <OnOff />
        </div>
    );
}

type PageTitlePropsType = {
    title : string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}



export default App;
