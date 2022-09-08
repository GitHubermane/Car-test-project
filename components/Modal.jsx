import style from '../styles/Modal.module.scss'
import close from '../assets/close_FILL0_wght400_GRAD0_opsz48.svg'
import Image from 'next/image'

export const Modal = (props) => {
    const onCloseModal = () => {
        props.setActive(false)
    }

    return (
        <>
            {
                props.active ?
                    <div className={style.container}>
                        <div className={style.titleBlock}>

                            <div className={style.title}>
                                <span className={style.green}>
                                    Пакеты опций
                                </span>
                            </div>

                            <button
                                className={style.btn}
                                onClick={onCloseModal}
                            >
                                <Image
                                    src={close}
                                    width='30'
                                    height='30'
                                />
                            </button>
                        </div>
                        {props.options.map((option) => (
                            <div
                                className={style.description}
                                key={`${option._id}${option.name}`}
                            >
                                {option.name}
                            </div>
                        ))}
                    </div>:
                    null
            }

        </>
    )
}