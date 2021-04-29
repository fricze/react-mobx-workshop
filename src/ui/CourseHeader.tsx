import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react-lite";
import Skeleton from "@material-ui/lab/Skeleton";

interface CourseHeaderProps {
  title: string;
}

export const CourseHeader = observer(({ title }: CourseHeaderProps) => (
  <>
    <Box display="flex">
      <img src="/university.jpeg" width="40" height="40" />
      <Typography variant="caption">{title}</Typography>
    </Box>

    <Box m={4} />
  </>
));

export const CourseHeaderSkeleton = observer(() => (
  <>
    <Box display="flex">
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="text" height={40} width="60%" />
    </Box>

    <Box m={4} />
  </>
));
