import { Characteristic } from "./Characteristic";
import { Packages } from "./Packages";
import { Prices } from "./Prices";
import { Slider } from "./Slider";
import { Title } from "./Title";

export const Card = (props) => {

    return (
        <div>

            <Title
                brand={props.brand}
                model={props.model}
                year={props.year}
                modelcode={props.modelcode}
            />

            < Slider
                img={props.img}
            />

            <Characteristic
                name='Двигатель'
                description={props.engine}
            />
            <Characteristic
                name='КПП'
                description={props.transmission}
            />
            <Characteristic
                name='Пробег'
                description='Какое-то'
            />
            <Characteristic
                name='Цвет'
                description={props.colour}
            />

            <Packages />

            <Prices price={props.price} />
        </div>

    )
}