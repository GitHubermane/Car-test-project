import styles from "../../styles/Card/Slider.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export const Slider = (props) => { 
    return (
        <div className={styles.container}>

            <Swiper spaceBetween={0}>
                {
                    props.photobank.map((e) => (
                        <SwiperSlide key={e._id} tag="li">
                            <img
                                className={styles.img}
                                src={e.url}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>

    )
}