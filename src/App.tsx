import { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField, { StandardTextFieldProps } from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

enum Sex {
  Male = "Male",
  Female = "Female",
}

interface FormField<Value> {
  label: string;
  value: Value;
  error?: string;
}

interface PersonalData {
  firstName: FormField<string>;
  middleName: FormField<string>;
  lastName: FormField<string>;
  sex: FormField<Sex>;
  birthDate: FormField<string>;
}

interface ContactData {
  address: FormField<string>;
  country: FormField<string>;
  phone: FormField<string>;
  email: FormField<string>;
}

interface CitizenData {
  citizenship: FormField<string>;
  needVisa: FormField<boolean>;
  passportNo: FormField<string>;
}

type ApplicationFormFields = PersonalData & ContactData & CitizenData;

type FormValid = boolean;

interface ApplicationForm {
  application: ApplicationFormFields;
  valid?: FormValid;
}

type ApplicationKey = keyof ApplicationFormFields;
type ApplicationValue = string | Sex | boolean;

interface SetValue {
  setValue: (a: string) => void;
}

interface InputProps extends SetValue, StandardTextFieldProps {}

const Input = ({ setValue, ...props }: InputProps) => (
  <TextField {...props} onChange={(e) => setValue(e.target.value)} />
);

interface StudentApplicationFormProps {
  store: ApplicationForm;
  setProp: (key: ApplicationKey, value: ApplicationValue) => void;
  onSubmit: any;
}

interface FormViewProps {
  onSubmit: any;
  children: React.ReactNode;
}

const FormView = ({ onSubmit, children }: FormViewProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
};

interface FormInputProps {
  label: string;
  value: string;
  setValue: any;
}

const FormInput = ({ label, value, setValue }: FormInputProps) => {
  return (
    <Grid item sm={6}>
      <Input label={label} value={value} setValue={setValue} />
    </Grid>
  );
};

interface FormSelectProps {
  label: string;
  value: string;
  setValue: any;
  options: { value: any; label: string }[];
}

const FormSelect = ({ label, value, setValue, options }: FormSelectProps) => {
  return (
    <Grid item sm={6}>
      <FormControl>
        <InputLabel id="select-sex">{label}</InputLabel>
        <Select
          labelId="select-sex"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {options.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export const StudentApplicationForm = ({
  store,
  setProp,
  onSubmit,
}: StudentApplicationFormProps) => {
  const { application } = store;

  return (
    <FormView onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <FormInput
          label={application.firstName.label}
          value={application.firstName.value}
          setValue={(value: string) => setProp("firstName", value)}
        />

        <FormInput
          label={application.middleName.label}
          value={application.middleName.value}
          setValue={(value: string) => setProp("middleName", value)}
        />

        <FormInput
          label={application.lastName.label}
          value={application.lastName.value}
          setValue={(value: string) => setProp("lastName", value)}
        />

        <FormSelect
          label={application.sex.label}
          value={application.sex.value}
          setValue={(value: Sex) => setProp("sex", value)}
          options={[
            { label: "Male", value: Sex.Male },
            { label: "Female", value: Sex.Female },
          ]}
        />
      </Grid>
    </FormView>
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

const useApplicationState = () => {
  const [application, setApplicationState] = useState<ApplicationForm>(
    initialState
  );

  const setProp = (key: ApplicationKey, value: ApplicationValue) =>
    setApplicationState((form) => {
      const oldValue = form.application[key];
      return {
        ...form,
        application: {
          ...form.application,
          [key]: { ...oldValue, value },
        },
      };
    });

  const onSubmit = () => {
    console.log("onSubmit");
  };

  return {
    setProp,
    application,
    onSubmit,
  };
};

// container
export const ApplicationFormView = () => {
  const { onSubmit, setProp, application } = useApplicationState();

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">International applicants form</Typography>
      <Box m={4} />
      <StudentApplicationForm
        store={application}
        setProp={setProp}
        onSubmit={onSubmit}
      />
    </Container>
  );
};
