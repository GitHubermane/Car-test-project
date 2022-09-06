import styles from "../../styles/Card/Slider.module.scss";

export const Slider = (props) => {
    return (
        <div>
            <div className="car-slider">
                <img
                    className={styles.img}
                    src={props.img}
                    alt=""
                />
            </div>
        </div>
    )
}