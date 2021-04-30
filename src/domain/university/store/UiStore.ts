import { makeAutoObservable } from "mobx";
import { Tab, TabGroup, SetTab } from "./types";

export class UiStore implements SetTab, TabGroup {
  activeTab = Tab.Personal;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setTab(tab: Tab): void {
    this.activeTab = tab;
  }
}
