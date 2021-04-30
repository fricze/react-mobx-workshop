import { autorun, set, toJS } from "mobx";

export function autoSave(_this: any, name: string, restoreFn: any) {
  const storedJson = localStorage.getItem(name);

  if (storedJson) {
    const data = restoreFn(JSON.parse(storedJson).list);
    set(_this, data);
  }

  autorun(() => {
    const value = toJS(_this);
    localStorage.setItem(name, JSON.stringify(value));
  });
}
