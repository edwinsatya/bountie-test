import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header";
import TopInfo from "./components/TopInfo";

//https://restcountries.com/v3.1/all

const getCountries = () => {
  return fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((json) => json);
};

function App() {
  const [formState, setFormState] = useState({
    title: "",
    lastName: "",
    firstName: "",
    phoneNumber: "",
    address: "",
    country: "",
    province: "",
    email: "",
    date: "",
    month: "",
    year: "",
  });

  const [listCountry, setListCountry] = useState([]);

  useEffect(() => {
    getCountries()
      .then((data) => setListCountry(listCountry))
      .catch((err) => console.log(err));
  }, []);

  const handleChangeState = (e) => {
    const newState = { ...formState };
    newState[e.field] = e.value;
    setFormState(newState);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <TopInfo />
        <Form setFormState={handleChangeState} dataFormState={formState} />
      </main>
      <button onClick={() => console.log(formState)}>tes</button>
    </div>
  );
}

export default App;
