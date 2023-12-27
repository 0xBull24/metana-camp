function Food() {

    // regular JS can come before the return statement with the JSX
    const food1 = "Orange"
    const food2 = "Banana"

    // Using the `{}` notation for injecting variables and using other JS methods inside of the `{}` notation
    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}

export default Food