import { observer } from "mobx-react-lite";
import TextField, { StandardTextFieldProps } from "@material-ui/core/TextField";

interface SetValue {
  setValue: (a: string) => void;
}

interface InputProps extends SetValue, StandardTextFieldProps {}

export const Input = observer(({ setValue, error, ...props }: InputProps) => (
  <TextField
    {...props}
    error={!!error}
    helperText={error}
    onChange={(e) => setValue(e.target.value)}
  />
));

interface InputField {
  label: string;
  value: string;
}

interface SetValue {
  setValue: (a: string) => void;
  field: InputField;
}

interface OInputProps extends SetValue, StandardTextFieldProps {}

export const OInput = observer(
  ({ setValue, field, error, ...props }: OInputProps) => (
    <TextField
      {...props}
      label={field.label}
      value={field.value}
      error={!!error}
      helperText={error}
      onChange={(e) => setValue(e.target.value)}
    />
  )
);
