import InputRadio from "./Input/InputRadio";
import InputText from "./Input/InputText";
import InputWrapper from "./Input/InputWrapper";
import TitleForm from "./TitleForm";

const Form = ({ setFormState, dataFormState }) => {
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

          <InputWrapper title={"Mobile Phone Number"}></InputWrapper>
        </div>
      </div>
    </form>
  );
};

export default Form;
