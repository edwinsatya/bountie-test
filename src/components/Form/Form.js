import { useState } from "react";
import InputRadio from "./Input/InputRadio";
import InputSelect from "./Input/InputSelect";
import InputText from "./Input/InputText";
import InputWrapper from "./Input/InputWrapper";
import TitleForm from "./TitleForm";

const Form = ({ setFormState, dataFormState, dataCountries }) => {
  const listTitle = [
    {
      value: "Mrs",
    },
    {
      value: "Ms",
    },
    {
      value: "Mdm",
    },
    {
      value: "Mr",
    },
    {
      value: "Dr",
    },
  ];

  const [currentCode, setCurrentCode] = useState("");

  const computeListCodeAndFlag = () => {
    return dataCountries.map((country) => {
      return {
        title: country.flag,
        value: country.codeNumber,
      };
    });
  };

  const computeListCountry = () => {
    return dataCountries.map((country) => {
      return {
        title: country.country,
        value: country.country,
      };
    });
  };

  return (
    <form className="px-3 py-6">
      <div>
        <TitleForm title={"Create New Account"} />
        <div className="p-3 lg:p-5">
          <InputWrapper title={"Title"}>
            <InputRadio
              checked={dataFormState.title}
              onChange={(e) =>
                setFormState({
                  field: "title",
                  value: e,
                })
              }
              listTitle={listTitle}
            />
          </InputWrapper>

          <div className="flex flex-col lg:flex-row">
            <InputWrapper
              className="lg:w-1/2 lg:pr-5"
              title={"Last Name"}
              required
            >
              <InputText
                onChange={(e) =>
                  setFormState({
                    field: "lastName",
                    value: e,
                  })
                }
                placeHolder={"Last Name"}
              />
            </InputWrapper>

            <InputWrapper
              className="lg:w-1/2 lg:pl-5"
              title={"First Name"}
              required
            >
              <InputText
                onChange={(e) =>
                  setFormState({
                    field: "firstName",
                    value: e,
                  })
                }
                placeHolder={"First Name"}
              />
            </InputWrapper>
          </div>

          <InputWrapper title={"Mobile Phone Number"} required>
            <div className="lg:w-1/2 lg:pr-4 flex">
              <InputSelect
                className="w-2/12 text-center mr-1"
                onChange={(e) => setCurrentCode(e.target.value)}
                options={computeListCodeAndFlag()}
              />

              <InputText className="w-2/12 ml-1" value={currentCode} disabled />
              <InputText
                className="w-full"
                onChange={(e) =>
                  setFormState({
                    field: "phoneNumber",
                    value: `${currentCode + e}`,
                  })
                }
                placeHolder={"Phone Number"}
              />
            </div>
          </InputWrapper>
        </div>

        <TitleForm title={"Address"} />

        <div className="p-3 lg:p-5">
          <InputWrapper title={"Address"}>
            <InputText
              onChange={(e) =>
                setFormState({
                  field: "address",
                  value: e,
                })
              }
              placeHolder={"Address"}
            />
          </InputWrapper>

          <div className="flex flex-col lg:flex-row">
            <InputWrapper
              title={"Country/Location"}
              className="lg:w-1/2 lg:pr-5"
              required
            >
              <InputSelect
                className="p-2"
                onChange={(e) =>
                  setFormState({
                    field: "country",
                    value: e,
                  })
                }
                options={computeListCountry()}
              />
            </InputWrapper>

            <InputWrapper
              className="lg:w-1/2 lg:pl-5"
              title={"Province/District"}
              required
            >
              <InputText
                onChange={(e) =>
                  setFormState({
                    field: "province",
                    value: e,
                  })
                }
                placeHolder={"Province/District"}
              />
            </InputWrapper>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
