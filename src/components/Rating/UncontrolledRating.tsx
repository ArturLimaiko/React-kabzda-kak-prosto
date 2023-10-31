import React, {useState} from "react";


export function UncontrolledRating() {
    //ЕСЛИ В КОМПОНЕНТЕ ЕСТЬ useState И ЕСЛИ ЭТОТ СТЕЙТ МЕНЯЕТСЯ
    // ТО ПЕРЕРИСОВЫВАЕТСЯ ТОЛЬКО ЭТОТ КОМПОНЕНТ!
    //создаем локальный стейт
    //изначальное значение рейтинга 4
    let [rating, setRating] = useState(0)

    return (
        <div>
            {/*rating у каждой звезды свой и мы храним его в локальном стейте
            при клике на кнопку запустится наша функция setRating() и передаем значение 1 и тд*/}
            <Star selected={rating > 0} setRating={()=> { setRating(1)}} />
            <Star selected={rating > 1} setRating={()=> { setRating(2)}} />
            <Star selected={rating > 2} setRating={()=> { setRating(3)}} />
            <Star selected={rating > 3} setRating={()=> { setRating(4)}} />
            <Star selected={rating > 4} setRating={()=> { setRating(5)}} />
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRating: () => void
}

function Star(props: StarPropsType) {
    // return props.selected ? <span><b>  -- Star --  </b></span> : <span>  -- Star --  </span>
    // ниже еще мощнее зарефакторил
    return <span onClick={() => {props.setRating()}}>
            {props.selected ? <b> -- Star -- </b> : ' -- Star -- '}
            </span>
}