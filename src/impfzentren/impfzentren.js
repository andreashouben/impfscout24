import React from "react";
import {useEffect, useState} from "react";

const Impfzentren = () => {

    const [impfzentren, setImpfzentren] = useState([])

    useEffect(() => {
        (async function anyNameFunction() {
            const res = await fetch('/api/impfzentren');
            const data = await res.json()
            setImpfzentren(data)
        })();

    }, [setImpfzentren])

    return (
        <ul>
            {impfzentren.map((item) => <li key={item.Lat}>{item.Titel}</li>)}
        </ul>
    )

}

export default Impfzentren