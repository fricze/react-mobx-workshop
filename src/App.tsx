import { useState, Dispatch, SetStateAction } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField, { StandardTextFieldProps } from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { set } from "lodash";

enum Sex {
  Male = "Male",
  Female = "Female",
}

interface FormField<Value> {
  label: string;
  value: Value;
  error?: string;
}

interface Application {
  firstName: FormField<string>;
  middleName: FormField<string>;
  lastName: FormField<string>;
  sex: FormField<Sex>;

  address: FormField<string>;
  country: FormField<string>;
  phone: FormField<string>;
  email: FormField<string>;

  birthDate: FormField<string>;
  citizenship: FormField<string>;
  needVisa: FormField<boolean>;
  passportNo: FormField<string>;
}

type FormValid = boolean;

interface ApplicationForm {
  application: Application;
  valid?: FormValid;
}

interface SetValue {
  setValue: (a: string) => void;
}

interface InputProps extends SetValue, StandardTextFieldProps {}

const Input = ({ setValue, ...props }: InputProps) => (
  <TextField {...props} onChange={(e) => setValue(e.target.value)} />
);

interface FormProps {
  store: ApplicationForm;
  setState: Dispatch<SetStateAction<ApplicationForm>>;
}

export const Form = ({ store, setState }: FormProps) => {
  const { application } = store;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <Input
            label={application.firstName.label}
            value={application.firstName.value}
            setValue={(value) =>
              setState((form) => ({
                ...form,
                application: {
                  ...form.application,
                  firstName: { ...form.application.firstName, value },
                },
              }))
            }
          />
        </Grid>

        <Grid item sm={6}>
          <Input
            label={application.middleName.label}
            value={application.middleName.value}
            setValue={(value) =>
              setState((form) => ({
                ...set(form, "application.middleName.value", value),
              }))
            }
          />
        </Grid>

        <Grid item sm={6}>
          <Input
            label={application.lastName.label}
            value={application.lastName.value}
            setValue={(value) =>
              setState((form) => set(form, "application.lastName.value", value))
            }
          />
        </Grid>

        <Grid item sm={6}>
          <FormControl>
            <InputLabel id="select-sex">Sex</InputLabel>
            <Select
              labelId="select-sex"
              value={application.sex.value}
              onChange={(e) =>
                setState((form) => ({
                  ...set(form, "application.sex.value", e.target.value),
                }))
              }
            >
              <MenuItem value={Sex.Male}>Male</MenuItem>
              <MenuItem value={Sex.Female}>Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

const initialApplication = {
  firstName: { value: "", label: "First name" },
  lastName: { value: "", label: "Last name" },
  middleName: { value: "", label: "Middle name" },
  sex: { value: Sex.Female, label: "Sex" },

  address: { value: "", label: "Address" },
  country: { value: "", label: "Country" },
  phone: { value: "", label: "Phone" },
  email: { value: "", label: "E-mail" },

  birthDate: { value: "", label: "Birth date" },
  citizenship: { value: "", label: "Citizenship" },
  needVisa: { value: false, label: "Need visa" },
  passportNo: { value: "", label: "Passport no" },
};

const initialState = {
  application: initialApplication,
};

export const ApplicationFormView = () => {
  const [application, setApplicationState] = useState<ApplicationForm>(
    initialState
  );

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">International applicants form</Typography>
      <Box m={4} />
      <Form store={application} setState={setApplicationState} />
    </Container>
  );
};
