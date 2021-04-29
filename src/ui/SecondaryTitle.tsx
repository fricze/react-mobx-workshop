import { ReactNode } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface SecondaryTitleProps {
  children: ReactNode;
}

export const SecondaryTitle = ({ children }: SecondaryTitleProps) => {
  return (
    <>
      <Box m={2} />
      <Typography variant="h5">{children}</Typography>
      <Box m={2} />
    </>
  );
};
