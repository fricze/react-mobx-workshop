import TextField, { StandardTextFieldProps } from "@material-ui/core/TextField";

interface SetValue {
  setValue: (a: string) => void;
}

interface InputProps extends SetValue, StandardTextFieldProps {}

export const Input = ({ setValue, error, ...props }: InputProps) => (
  <TextField
    {...props}
    error={!!error}
    helperText={error}
    onChange={(e) => setValue(e.target.value)}
  />
);
