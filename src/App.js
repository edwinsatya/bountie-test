import { useLayoutEffect } from "react";
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

  const getCountryFlagCode = (countries) => {
    return countries.map((country) => {
      const idd = country.idd;
      const codeNumber = `${idd.root}${idd.suffixes ? idd.suffixes[0] : ""}`;
      return {
        codeNumber: codeNumber,
        country: country.name.common,
        flag: country.flag,
      };
    });
  };

  useLayoutEffect(() => {
    getCountries()
      .then((data) => {
        const newVal = getCountryFlagCode(data);
        setListCountry(newVal);
      })
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
        <Form
          setFormState={handleChangeState}
          dataFormState={formState}
          dataCountries={listCountry}
        />
      </main>
      <button onClick={() => console.log(formState)}>tes</button>
    </div>
  );
}

export default App;
