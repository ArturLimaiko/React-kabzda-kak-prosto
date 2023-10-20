import React, {useState} from "react";

export function UncontrolledRating() {
    //ЕСЛИ В КОМПОНЕНТЕ ЕСТЬ useState И ЕСЛИ ЭТОТ СТЕЙТ МЕНЯЕТСЯ
    // ТО ПЕРЕРИСОВЫВАЕТСЯ ТОЛЬКО ЭТОТ КОМПОНЕНТ!
    //создаем локальный стейт
    //изначальное значение рейтинга 0
let [rating , setRating] = useState( 0)

    return (
        <div>
            {/*rating у каждой звезды свой и мы храним его в локальном стейте
            при клике на кнопку запустится наша функция setRating() и передаем значение 1 и тд*/}
            <Star selected={rating > 0}/><button onClick={() => {setRating(1)}}>1</button>
            <Star selected={rating > 1}/><button onClick={() => {setRating(2)}}>2</button>
            <Star selected={rating > 2}/><button onClick={() => {setRating(3)}}>3</button>
            <Star selected={rating > 3}/><button onClick={() => {setRating(4)}}>4</button>
            <Star selected={rating > 4}/><button onClick={() => {setRating(5)}}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
   return props.selected ? <span><b>  -- Star --  </b></span> : <span>  -- Star --  </span>
}