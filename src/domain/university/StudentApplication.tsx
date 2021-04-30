import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Title } from "../../ui/Title";

import { PersonalDataForm } from "./components/PersonalDataForm";
import { ContactDataForm } from "./components/ContactDataForm";
import { CoursesView } from "./components/CoursesView";

import { ApplicationStore } from "./store/ApplicationStore";
import { CoursesStore } from "./store/AutoInitCoursesStore";
import { UiStore } from "./store/UiStore";
import { ApplicationFormTabs } from "./components/ApplicationFormTabs";
import { ApplicationFormContent } from "./components/ApplicationFormContent";

export const StudentApplication = () => {
  const applicationStore = new ApplicationStore();
  const coursesStore = new CoursesStore(true);
  const uiStore = new UiStore();

  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={4}>
          <Button onClick={() => uiStore.toggleCoursesList()}>
            Show available courses
          </Button>

          <CoursesView uiStore={uiStore} coursesStore={coursesStore} />
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

// container
export const SingleStudentApplication = () => {
  const applicationStore = new ApplicationStore();
  const uiStore = new UiStore();

  return (
    <Container maxWidth="sm">
      <Title>International applicants form</Title>

      <ApplicationFormContent
        applicationStore={applicationStore}
        uiStore={uiStore}
      />

      <ApplicationFormTabs store={uiStore} />
    </Container>
  );
};
