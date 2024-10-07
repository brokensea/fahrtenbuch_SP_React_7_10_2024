import Fahrt from "./Fahrt";

export default function FahrtenListe(props) {
    return (
        <section className="liste">
            <h1>Liste</h1>
            {props.fahrten.map(ele => <Fahrt fahrt={ele} />)}
        </section>

    )
}