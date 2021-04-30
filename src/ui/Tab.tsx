import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

interface TabGroupProps {
  tabs: string[];
  setTab: (tab: any) => void;
}

export const TabGroup = ({ tabs, setTab }: TabGroupProps) => {
  return (
    <Box display="flex" justifyContent="space-around">
      {tabs.map((tab) => (
        <Button onClick={() => setTab(tab)}>{tab}</Button>
      ))}
    </Box>
  );
};
