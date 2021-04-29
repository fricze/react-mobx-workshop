import TextField, { StandardTextFieldProps } from "@material-ui/core/TextField";

interface SetValue {
  setValue: (a: string) => void;
}

interface InputProps extends SetValue, StandardTextFieldProps {}

export const Input = ({ setValue, ...props }: InputProps) => (
  <TextField {...props} onChange={(e) => setValue(e.target.value)} />
);
