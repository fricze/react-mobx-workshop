import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Title } from "../../ui/Title";
import { CourseTitle } from "./components/CourseTitle";

import { PersonalDataForm } from "./components/PersonalDataForm";
import { ContactDataForm } from "./components/ContactDataForm";
import { CoursesDropdown } from "./components/CoursesDropdown";

import { ApplicationStore } from "./store/ApplicationStore";
import { CoursesStore } from "./store/AutoInitCoursesStore";

export const StudentApplicationWithDownshift = () => {
  const applicationStore = new ApplicationStore();
  const coursesStore = new CoursesStore(true);

  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={4}>
          <CoursesDropdown coursesStore={coursesStore} />
          <CourseTitle store={coursesStore} />
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
