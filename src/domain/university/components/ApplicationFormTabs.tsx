import { observer } from "mobx-react-lite";
import * as Types from "../store/types";
import { TabGroup } from "../../../ui/Tab";

interface ApplicationFormTabsProps {
  store: Types.SetTab;
}

export const ApplicationFormTabs = observer(
  ({ store }: ApplicationFormTabsProps) => {
    const { setTab } = store;

    return (
      <TabGroup
        tabs={Types.TabValues}
        setTab={(tab: Types.Tab) => setTab(tab)}
      />
    );
  }
);
