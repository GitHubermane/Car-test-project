import { Characteristic } from "./Characteristic";
import { Packages } from "./Packages";
import { Prices } from "./Prices";
import { Slider } from "./Slider";
import { Title } from "./Title";
import style from '../../styles/Card/Card.module.scss'

export const Card = (props) => {
    return (
        <div className={style.card}>
            <Title
                brand={props.brand}
                model={props.model}
                year={props.year}
                modelcode={props.modelcode}
            />

            < Slider
                photobank={props.photobank}
            />

            <div className={style.block}>
                <div className={style.characteristicBlock}>
                    <Characteristic
                        name='Двигатель'
                        description={props.engine}
                    />
                    <Characteristic
                        name='КПП'
                        description={props.transmission}
                    />
                    <Characteristic
                        name='Цвет интерьера'
                        description={props.interior}
                    />
                    <Characteristic
                        name='Цвет'
                        description={props.colour}
                    />
                </div>
    
                <Packages options={props.options}/>
    
                <Prices price={props.price} />
            </div>
        </div>

    )
}