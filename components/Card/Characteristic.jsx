import styles from "../../styles/Card/Characteristic.module.scss";

export const Characteristic = (props) => {

    return (
        <div className={styles.block}>
            <div className={styles.title}>
                {props.name}
            </div>
            <div className={styles.description}>
                {props.description}
            </div>
        </div>
    )
}