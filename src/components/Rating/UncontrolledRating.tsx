import React, {useState} from "react";

type UncontrolledRatingPropsType = {
    value: number
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {

    const [rating, setRating] = useState(props.value);

    const handleRatingChange = (value: number) => {
        setRating(value);
    };

    return (
        <div>
            <Star selected={rating > 0}/><button onClick={() => {handleRatingChange(1)}}>1</button>
            <Star selected={rating > 1}/><button onClick={() => {handleRatingChange(2)}}>2</button>
            <Star selected={rating > 2}/><button onClick={() => {handleRatingChange(3)}}>3</button>
            <Star selected={rating > 3}/><button onClick={() => {handleRatingChange(4)}}>4</button>
            <Star selected={rating > 4}/><button onClick={() => {handleRatingChange(5)}}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    if (props.selected === true) {
        return <span><b>Star </b></span>
    } else return <span>Star </span>
}