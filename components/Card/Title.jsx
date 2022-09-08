import styles from '../../styles/Card/Title.module.scss'

export const Title = (props) => {

    return (
        <div className={styles.block}>
            <h3 className={styles.title}>{props.brand} {props.model}</h3>
            <div className={styles.code}>{props.modelcode}</div>
            <div className={styles.year}>{props.year}</div>
        </div>
    )
}