import { observer } from "mobx-react-lite";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface CourseTitleProps {
  store: { activeCourse?: string };
}

export const CourseTitle = observer(({ store }: CourseTitleProps) =>
  store.activeCourse ? (
    <>
      <Box m={6} />
      <Typography variant="h6">
        You're applying to: {store.activeCourse}
      </Typography>
    </>
  ) : (
    <div />
  )
);
