import { ApplicationData } from "../types/ApplicationData";
import { ApplicationForm } from "./ui-state";
import { initialApplication } from "./domain-state";

export type DomainStore = ApplicationData;
export type UiStore = ApplicationForm;

export const initialState: DomainStore = initialApplication;

type DomainKey = keyof DomainStore;
type DomainValue = DomainStore[DomainKey];

export type setProp = (key: DomainKey, value: DomainValue) => void;
