import { ReactNode } from "react";
import Grid from "@material-ui/core/Grid";

interface FormProps {
  onSubmit: any;
  children: ReactNode;
}

export const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Grid container spacing={3}>
        {children}
      </Grid>
    </form>
  );
};
