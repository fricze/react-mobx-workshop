import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MuiSelect from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

interface SelectProps {
  label: string;
  value: string;
  setValue: any;
  options: { value: any; label: string }[];
}

export const Select = ({ label, value, setValue, options }: SelectProps) => {
  return (
    <FormControl>
      <InputLabel id={label}>{label}</InputLabel>
      <MuiSelect
        labelId={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
