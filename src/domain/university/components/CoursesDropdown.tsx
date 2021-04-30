import { observer } from "mobx-react-lite";
import { CoursesData, SetActiveCourse } from "../store/types";
import { DropdownSelect } from "../../../ui/Dropdown";

interface CoursesDropdownProps {
  coursesStore: CoursesData & SetActiveCourse;
}

export const CoursesDropdown = observer(
  ({ coursesStore }: CoursesDropdownProps) => {
    const courses = coursesStore.courses.map(({ title }) => {
      let primary = title.split(" ").slice(0, 3).join(" ");

      return {
        primary,
        secondary: title,
      };
    });

    return (
      <DropdownSelect
        label="Available courses"
        onChange={(val: string) => coursesStore.setActive(val)}
        items={courses}
      />
    );
  }
);
