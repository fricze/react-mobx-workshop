import { ReactNode } from "react";
import Grid from "@material-ui/core/Grid";

interface FormElementProps {
  children: ReactNode;
}

export const FormElement = ({ children }: FormElementProps) => {
  return (
    <Grid item sm={6}>
      {children}
    </Grid>
  );
};
