import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import FormGroup from "./components/Form/FormGroup";
import Header from "./components/Header";
import Popup from "./components/Popup";
import Privacy from "./components/Privacy";
import TopInfo from "./components/TopInfo";

const getCountries = async () => {
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

  const [showPopup, setShowPopup] = useState(false);

  const [agreePrivacy, setAgreePrivacy] = useState(false);

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

  useEffect(() => {
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
    setShowPopup(true);
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
              currentState={formState}
              dataFormState={formState}
              dataCountries={listCountry}
            />

            <Privacy onChange={() => setAgreePrivacy(!agreePrivacy)} />
            <div className="px-3 flex lg:justify-end">
              <button
                disabled={!agreePrivacy}
                className={`${
                  !agreePrivacy ? "bg-gray-300" : "bg-yellow-400"
                } w-full lg:w-2/12 p-2 rounded text-center flex justify-center items-center font-bold`}
              >
                CREATE CUSTOMER
              </button>
            </div>
          </form>
        </div>
        {showPopup && (
          <Popup dataPopup={formState} onClick={() => setShowPopup(false)} />
        )}
      </main>
      <Footer title="V1.0.7" />
    </div>
  );
}

export default App;
