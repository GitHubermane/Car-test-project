import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card/Card";
import {BrandsForm} from "../components/BrandsForm"
import { setCars } from "../Redux/Slice/CarsSlice";
import { useEffect } from "react";
import { Loader } from "../components/Loader";
import style from '../styles/Home.module.scss'

export default function Home(props) {
  const cars = useSelector((state) => state.Cars.cars)
  const isLoading = useSelector((state) => state.Cars.isLoading)
  const dispatch = useDispatch()
  useEffect(() => { dispatch(setCars(props.cars.list)) }, [])


  return (
    <>
      <BrandsForm />
      {
        isLoading ?

          <div className={style.loaderContainer}>
            <Loader />
          </div> :

          <div className={style.container}>
            {cars.map(
              (e) => <Card
                key={e._id}
                engine={e.feedData.engine.engineName}
                transmission={e.feedData.equipmentVariantTransmissionType}
                colour={e.feedData.colorByClassifierName}
                price={e.feedData.price}
                img={e.photobank.imgs[0].url}
                brand={e.feedData.brandName}
                model={e.feedData.modelByClassifierName}
                year={e.feedData.productionYear}
                modelcode={e.feedData.modelCode}
                interior={e.feedData.interior.color}
                photobank={e.photobank.imgs}
                options={e.feedData.options}
              />
            )}
          </div>

      }
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("https://maximum.expert/api/stock-test?brand=Audi")
  const cars = await response.json()
  return {
    props: { cars }
  }
}


