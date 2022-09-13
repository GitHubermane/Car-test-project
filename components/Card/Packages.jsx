import { useState } from "react";
import style from "../../styles/Card/Package.module.scss";
import { Modal } from "../Modal";

export const Packages = (props) => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className={style.container}>
            <div className={style.title}>
                Пакеты
            </div>
            <div className={style.description}>
                {props.options[0] && props.options[0].name}
                <button
                    className={style.descriptionBtn}
                    onClick={() => {
                        setModalActive(true)
                    }}
                >
                    (+ ещe {props.options.length} пакета)
                </button>
                <Modal
                    active={modalActive}
                    setActive={setModalActive}
                    options={props.options}
                />
            </div>
        </div>
    )
}