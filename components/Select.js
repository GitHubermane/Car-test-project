
export const Select = () => {
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

    return (
        <div>
            <select name="brands" id="brands">
                {brands.map((e) => (
                    <option key={e.id} value={e.name}>
                        {e.name}
                    </option>
                ))}
            </select>
        </div>
    )
}