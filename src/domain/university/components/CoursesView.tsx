import { observer } from "mobx-react-lite";
import { CoursesList } from "./CoursesList";
import { ShowCourses, CoursesData, FetchMoreCourses } from "../store/types";

interface CoursesViewProps {
  coursesStore: CoursesData & FetchMoreCourses;
  uiStore: ShowCourses;
}

export const CoursesView = observer(
  ({ uiStore, coursesStore }: CoursesViewProps) => {
    return uiStore.coursesList ? <CoursesList store={coursesStore} /> : <div />;
  }
);
