import loader from '../assets/Loading_icon.gif'
import Image from 'next/image'


export const Loader = () => {
    return (
        <Image
            src={loader}
            height={100}
            width={100}
        />
    )
}