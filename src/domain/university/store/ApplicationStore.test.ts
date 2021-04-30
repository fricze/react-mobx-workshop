import { ApplicationStore } from "./ApplicationStore";

test("Simple setter works", () => {
  const store = new ApplicationStore();

  store.setProp("firstName", "Julia");

  expect(store.firstName).toEqual({
    label: "First name",
    valid: true,
    value: "Julia",
  });

  expect(store.application.firstName).toEqual("Julia");
});

test("Simple setter works and validation works", () => {
  const store = new ApplicationStore();

  store.setProp("firstName", "Ju");

  expect(store.firstName).toEqual({
    label: "First name",
    valid: false,
    value: "Ju",
  });
});
