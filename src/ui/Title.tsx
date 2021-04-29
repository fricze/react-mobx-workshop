import { ReactNode } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface TitleProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <>
      <Box m={2} />
      <Typography variant="h4">{children}</Typography>
      <Box m={4} />
    </>
  );
};
