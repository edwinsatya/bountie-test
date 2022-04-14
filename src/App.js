import { useLayoutEffect } from "react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import FormGroup from "./components/Form/FormGroup";
import Header from "./components/Header";
import Privacy from "./components/Privacy";
import TopInfo from "./components/TopInfo";

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

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <TopInfo />
        <div className="px-3 lg:px-5">
          <form onSubmit={submitForm}>
            <FormGroup
              setFormState={handleChangeState}
              dataFormState={formState}
              dataCountries={listCountry}
            />

            <Privacy />
            <div className="px-3 flex lg:justify-end">
              <button className="bg-yellow-400 w-full lg:w-2/12 p-2 rounded text-center flex justify-center items-center font-bold">
                CREATE CUSTOMER
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer title="V1.0.7" />
    </div>
  );
}

export default App;
