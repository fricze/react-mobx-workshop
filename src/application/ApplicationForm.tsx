import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ApplicationFormContainer } from "../domain/student-application/ApplicationForm";

// container
export const ApplicationFormView = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4">International applicants form</Typography>
      <Box m={4} />
      <ApplicationFormContainer />
    </Container>
  );
};
