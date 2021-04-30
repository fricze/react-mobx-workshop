import { CoursesStore } from "./AutoInitCoursesStore";
import { getCoursesEmpty, getCourses } from "./test/mockGetCourses";

test("Store has proper initial value", () => {
  const store = new CoursesStore(getCourses);

  expect(store.courses).toEqual([]);
});

test("fetchMore gets data from getCourses", () => {
  const store = new CoursesStore(getCourses);

  store.fetchMore();

  setImmediate(() => {
    expect(store.courses.length).toEqual(3);
    expect(store.nextPageAvailable).toEqual(true);
  });
});

test("fetchMore has empty courses list when empty list was returned", () => {
  const store = new CoursesStore(getCoursesEmpty);

  store.fetchMore();

  setImmediate(() => {
    expect(store.courses.length).toEqual(0);
    expect(store.nextPageAvailable).toEqual(false);
  });
});
