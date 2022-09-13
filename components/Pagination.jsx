import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentPage } from "../Redux/Slice/CarsSlice"
import style from "../styles/Pagination.module.scss"
export const Pagination = (props) => {

    const totalPagesCount = Math.ceil(props.totalCarsCount / props.carsCountPerPage)
    const pages = []
    // useEffect(() => {
        for (let i = 1; i <= totalPagesCount; i++) {
            pages.push(i)
        }
    // }, [])


    return (
        <div className={style.pagesBlock}>
            {pages.map((page) => (
                <button
                    className={style.btn}
                    key={page}
                    onClick={() => { props.onPageChange(page) }}
                >
                    {page}
                </button>
            ))}
        </div>
    )
}