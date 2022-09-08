import close from '../assets/close_FILL0_wght400_GRAD0_opsz48.svg'
import Image from 'next/image'
import style from '../styles/CloseBtn.module.scss'

export const CloseBtn = () => {

    return (
        
        <Image
            className={style.btn}
            src={close}
            width='30'
            height='30'
        />
    )
}