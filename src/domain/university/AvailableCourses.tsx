import Container from "@material-ui/core/Container";
import { CoursesList } from "./components/CoursesList";
import { CoursesStore } from "./store/CoursesStore";

export const AvailableCourses = () => {
  const coursesStore = new CoursesStore();

  return (
    <Container maxWidth="sm">
      <CoursesList store={coursesStore} />
    </Container>
  );
};
