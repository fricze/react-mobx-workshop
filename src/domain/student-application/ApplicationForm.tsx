import { useApplicationState } from "./store/hooks";
import { setProp, UiStore } from "./store/state";
import { Sex } from "./types/PersonalData";
import { Form } from "../../ui/Form";
import { Input } from "../../ui/Input";
import { Select } from "../../ui/Select";
import { FormElement } from "../../ui/FormElement";

interface ApplicationFormProps {
  store: UiStore;
  setProp: setProp;
  setNames: any;
  onSubmit: any;
}

const ApplicationForm = ({
  store,
  setProp,
  setNames,
  onSubmit,
}: ApplicationFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormElement>
        <Input
          label={store.names.label}
          value={store.names.value}
          setValue={(value: string) => setNames(value)}
        />
      </FormElement>

      <FormElement>
        <Input
          label={store.lastName.label}
          value={store.lastName.value}
          setValue={(value: string) => setProp("lastName", value)}
        />
      </FormElement>

      <FormElement>
        <Select
          label={store.sex.label}
          value={store.sex.value}
          setValue={(value: Sex) => setProp("sex", value)}
          options={[
            { label: "Male", value: Sex.Male },
            { label: "Female", value: Sex.Female },
          ]}
        />
      </FormElement>
    </Form>
  );
};

export const ApplicationFormContainer = () => {
  const { setNames, setProp, application, onSubmit } = useApplicationState();
  return (
    <ApplicationForm
      setProp={setProp}
      store={application}
      onSubmit={onSubmit}
      setNames={setNames}
    />
  );
};
