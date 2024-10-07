import FahrtenEingabeFormular from "./components/FahrtenEingabeFormular";
import FahrtenListe from "./components/FahrtenListe";
import './app.css'
import { useState } from "react";
export default function App() {
  const [fahrten, setFahrten] = useState([])
  return <main>
    <section className="liste">
      <FahrtenListe fahrten={fahrten} />
    </section>
    <section className="form">
      <FahrtenEingabeFormular setFahrten={setFahrten} />
    </section>
  </main>
}