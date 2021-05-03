import { CoursesStore } from "./AutoInitCoursesStore";
import { getCoursesEmpty, getCourses } from "./test/mockGetCourses";

jest.mock("mobx", () => ({
  ...jest.requireActual("mobx"),
  onBecomeObserved: jest
    .fn()
    .mockImplementation((_instance, _property, handler) => {
      // call onBecomeObserved handler immediately in constructor, not to wait
      // for a property being observed.
      // it's a tricky solution, since we're overriding mobx lifecycle mechanism,
      // but might actually be useful for testing
      handler();
    }),
}));

test("Store has proper initial value", () => {
  const store = new CoursesStore(getCourses, false);

  expect(store.courses).toEqual([]);
  expect(store.nextPageAvailable).toEqual(true);
});

test("Store gets first page properly loaded after onBecomeObserved handler is called", () => {
  const store = new CoursesStore(getCourses, true);

  setImmediate(() => {
    expect(store.courses.length).toEqual(3);
    expect(store.nextPageAvailable).toEqual(true);
  });
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
