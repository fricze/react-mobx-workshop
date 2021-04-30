import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { observer } from "mobx-react-lite";
import { CoursesData, FetchMoreCourses } from "../store/types";
import { SecondaryTitle } from "../../../ui/SecondaryTitle";
import { CourseHeader, CourseHeaderSkeleton } from "../../../ui/CourseHeader";
import { CourseState } from "../store/types";

interface CoursesListProps {
  store: CoursesData & FetchMoreCourses;
}

export const CoursesList = observer(({ store }: CoursesListProps) => {
  return (
    <Box>
      <SecondaryTitle>Available courses</SecondaryTitle>
      <Box maxHeight={400} overflow="scroll">
        {store.courses.map(({ title, state, id }) =>
          state === CourseState.Loading ? (
            <CourseHeaderSkeleton key={id} />
          ) : (
            <CourseHeader title={title} key={id} />
          )
        )}
      </Box>

      <Box m={4} />
      <Button
        disabled={!store.nextPageAvailable}
        variant="contained"
        onClick={() => store.fetchMore()}
      >
        Fetch more
      </Button>
    </Box>
  );
});
