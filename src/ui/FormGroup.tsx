import { ReactNode } from "react";
import MuiFormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

interface FormGroupProps {
  children: ReactNode;
}

export const FormGroup = ({ children }: FormGroupProps) => {
  return (
    <MuiFormGroup>
      <Grid container spacing={3}>
        {children}
      </Grid>

      <Box m={2} />
    </MuiFormGroup>
  );
};
