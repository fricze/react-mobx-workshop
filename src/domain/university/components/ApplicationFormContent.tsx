import { observer } from "mobx-react-lite";
import * as Types from "../store/types";
import { PersonalDataForm } from "./PersonalDataForm";
import { ContactDataForm } from "./ContactDataForm";

interface ApplicationFormTabsProps {
  uiStore: Types.TabGroup;
  applicationStore: Types.ContactDataSetProp &
    Types.ContactDataForm &
    Types.PersonalDataSetProp &
    Types.PersonalDataForm;
}

export const ApplicationFormContent = observer(({
  uiStore,
  applicationStore,
}: ApplicationFormTabsProps) => {
  const { activeTab } = uiStore;

  switch (activeTab) {
    case Types.Tab.Personal:
      return <PersonalDataForm store={applicationStore} />;
    case Types.Tab.Contact:
      return <ContactDataForm store={applicationStore} />;
    default:
      return <div />;
  }
});
