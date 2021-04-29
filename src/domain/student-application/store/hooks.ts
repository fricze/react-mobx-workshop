import { useState } from "react";
import { DomainStore, UiStore, initialState } from "./state";

type DomainK = keyof DomainStore;
type DomainV = DomainStore[DomainK];

// computed/derived data
const deriveUiStore = (store: DomainStore): UiStore => ({
  names: { value: store.firstName + " " + store.lastName, label: "Name" },
  lastName: { value: store.lastName, label: "Last name" },
  sex: { value: store.sex, label: "Sex" },

  fullAddress: {
    value: store.country + " " + store.address,
    label: "Address",
  },
  phone: { value: store.phone, label: "Phone" },
  email: { value: store.email, label: "E-mail" },

  birthDate: { value: store.birthDate, label: "Birth date" },
  citizenship: { value: store.citizenship, label: "Citizenship" },
  needVisa: { value: store.needVisa, label: "Need visa" },
  passportNo: { value: store.passportNo, label: "Passport no" },
});

export const useApplicationState = () => {
  const [application, setApplicationState] = useState<DomainStore>(
    initialState
  );

  const setProp = (key: DomainK, value: DomainV) =>
    setApplicationState((applicationData) => {
      return {
        ...applicationData,
        [key]: value,
      };
    });

  const onSubmit = () => {
    console.log("onSubmit");
  };

  return {
    setProp,
    application: deriveUiStore(application),
    onSubmit,
  };
};
