import styles from "../../styles/Card/Prices.module.scss";

export const Prices = (props) => {

    return (
        <div className={styles.block}>
            <div className={styles.priceBlock}>
                <div className={styles.mainPrice}>
                    <span className={styles.green}>{props.price}</span> &#8381;
                </div>

                <div className={styles.extraPrice}>
                    Доп. опций на <span className={styles.green}>999 999</span> &#8381;
                </div>
            </div>
            <button className={styles.button}>Купить</button>
        </div>
    )
}