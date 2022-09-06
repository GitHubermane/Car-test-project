import { Select } from "../components/Select";
import styles from "../styles/Home.module.scss";

export default function Home({ cars }) {

  return (
    <>
      <Select/>
      <div className={styles.item}>
        <div className={styles.car__titleBlock}>
          <h3 className={styles.car__title}>Lorem, ipsum dolor</h3>
          <div className={styles.car__code}>WDRFEW</div>
          <div className={styles.car__year}>2013</div>
        </div>

        <div>
          <div className="car-slider">
            <img
              className={styles.car__img}
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"
              alt=""
            />
          </div>
        </div>

        <div className="characteristic">
          <div className={styles.characteristic__title}>Двигатель</div>
          <div className={styles.characteristic__description}>122</div>
        </div>

        <div className="characteristic">
          <div className={styles.characteristic__title}>КПП</div>
          <div className={styles.characteristic__description}>Авто</div>
        </div>

        <div className="characteristic">
          <div className={styles.characteristic__title}>Пробег</div>
          <div className={styles.characteristic__description}>12234км</div>
        </div>

        <div className="characteristic">
          <div className={styles.characteristic__title}>Цвет</div>
          <div className={styles.characteristic__description}>Серый</div>
        </div>

        <div className="functions">
          <div className={styles.characteristic__title}>Пакеты</div>
          <div className={styles.characteristic__description}>
            Зеркала супер
          </div>
        </div>

        <div className={styles.buying}>
          <div className={styles.buying__price}>
            <span className={styles.green}>746 150</span> &#8381;
          </div>

          <div className={styles.buying__extraPrice}>
            Доп. опций на <span className={styles.green}>999 999</span> &#8381;
          </div>

          <button className={styles.buying__button}>Купить</button>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async (con) => {
    const response = await fetch("https://maximum.expert/api/stock-test?brand=Kia")
    const cars = await response.json()
    console.log(cars);
    return {
      props: {cars}
    }
}


