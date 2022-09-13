import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card/Card";
import { BrandsForm } from "../components/BrandsForm"
import { setCars, setCurrentPage } from "../Redux/Slice/CarsSlice";
import { useEffect } from "react";
import { Loader } from "../components/Loader";
import style from '../styles/Home.module.scss'
import { Pagination } from "../components/Pagination";

export default function Home(props) {

  const { cars, currentPage } = useSelector((state) => state.Cars)
  const isLoading = useSelector((state) => state.Cars.isLoading)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(setCars(props.cars.list))
    }, [])



  // Т.к. не было документации API всю логику пагинаци
  // добавил на фронтенд

  const currentCars = []
  const carsCountPerPage = 5
  const totalCarsCount = cars.length
  const onPageChange = (e) => {
    dispatch(setCurrentPage(e))
  }

  for (let i = (currentPage * carsCountPerPage) - 5; i <= (currentPage * carsCountPerPage) - 1; i++) {
    currentCars.push(cars[i])
  }

  return (
    <>
      <BrandsForm />
      <Pagination
        onPageChange={onPageChange}
        totalCarsCount={totalCarsCount}
        carsCountPerPage={carsCountPerPage}
      />
      {
        isLoading ?

          <div className={style.loaderContainer}>
            <Loader />
          </div> :

          <div className={style.container}>
            {
              currentCars.map(
                (e) => (
                  e ?
                    <Card
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
                    /> :
                    null
                )
              )
            }
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


