import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { setCars, toggleIsLoading } from "../Redux/Slice/CarsSlice";
import style from "../styles/BrandsForm.module.scss"

export const BrandsForm = () => {
    const brands = [
        {
            id: 1,
            name: "Audi",
        },
        {
            id: 2,
            name: "Mitsubishi",
        },
        {
            id: 3,
            name: "Volkswagen",
        },
        {
            id: 4,
            name: "Kia",
        },
        {
            id: 5,
            name: "Honda",
        },
        {
            id: 6,
            name: "Hyndai",
        },
    ];
    const initialValues = {
        brand: 'Audi'
    }
    const dispatch = useDispatch()
    const submit = async (values, { setSubmitting }) => {
        dispatch(toggleIsLoading(true))
        const response = await fetch(`https://maximum.expert/api/stock-test?brand=${values.brand}`)
        const cars = await response.json()
        dispatch(setCars(cars.list))
        dispatch(toggleIsLoading(false))
        setSubmitting(false)
    }
    return (
        <div className={style.container}>
            <Formik
                initialValues={initialValues}
                enableReinitialize
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field
                            className={style.input}
                            as="select"
                            name="brand"
                        >
                            {brands.map((e) => (
                                <option key={e.id} value={e.name}>
                                    {e.name}
                                </option>
                            ))}
                        </Field>
                        <button
                            className={style.btn}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}