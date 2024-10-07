import { useState } from "react"

export default function FahrtenEingabeFormular(props) {
    const [fahrzeug, setFahrzeug] = useState("")
    const [startOrt, setStartOrt] = useState("")
    const [zielOrt, setZielOrt] = useState("")
    const [strecke, setStrecke] = useState(0)

    function add() {
        const fahrt = {
            fahrzeug,
            startOrt,
            zielOrt,
            strecke
        }
        console.log(fahrt)
        props.setFahrten(old => [...old, fahrt]) // ...spread operator
    }
    return (
        <section>
            <input onChange={(e) => setFahrzeug(e.target.value)} type="text" placeholder="Fahrzeug" />
            <input onChange={(e) => setStartOrt(e.target.value)} type="text" placeholder="Startort" />
            <input onChange={(e) => setZielOrt(e.target.value)} type="text" placeholder="Zielort" />
            <input onChange={(e) => setStrecke(e.target.value)} type="number" placeholder="Strecke" />
            <button onClick={add}>Hinzufügen</button>
            <p>{fahrzeug}</p>
        </section>
    )
}