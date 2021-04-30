import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Title } from "../../ui/Title";

import { PersonalDataForm } from "./components/PersonalDataForm";
import { ContactDataForm } from "./components/ContactDataForm";
import { CoursesList } from "./components/CoursesList";

import { ApplicationStore } from "./store/ApplicationStore";
import { CoursesStore } from "./store/CoursesStore";

export const StudentApplication = () => {
  const applicationStore = new ApplicationStore();
  const coursesStore = new CoursesStore();

  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={4}>
          <CoursesList store={coursesStore} />
        </Grid>

        <Grid item xs={1} />

        <Grid item xs={7}>
          <Title>International applicants form</Title>
          <PersonalDataForm store={applicationStore} />

          <ContactDataForm store={applicationStore} />
        </Grid>
      </Grid>
    </Container>
  );
};

export const SingleStudentApplication = () => {
  const applicationStore = new ApplicationStore();

  return (
    <Container maxWidth="md">
      <Title>International applicants form</Title>

      <PersonalDataForm store={applicationStore} />

      <ContactDataForm store={applicationStore} />
    </Container>
  );
};
