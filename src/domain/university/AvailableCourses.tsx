import Container from "@material-ui/core/Container";
import { CoursesList } from "./components/CoursesList";
import { CoursesStore } from "./store/AutoInitCoursesStore";

export const AvailableCourses = () => {
  const coursesStore = new CoursesStore(true);

  return (
    <Container maxWidth="sm">
      <CoursesList store={coursesStore} />
    </Container>
  );
};
