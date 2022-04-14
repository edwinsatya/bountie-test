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
                options={dataCountries}
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

          <InputWrapper title={"Address"} required>
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
        </div>
      </div>
    </form>
  );
};

export default Form;
