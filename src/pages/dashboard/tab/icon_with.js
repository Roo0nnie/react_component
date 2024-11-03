import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { MaterialSymbolsLightFavorite } from '../buttons/buttons_icon/favoritefull';
import { GridiconsPhone } from '../buttons/buttons_icon/phone';
import { IcRoundPersonAdd } from '../buttons/buttons_icon/add_person';

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<GridiconsPhone />} label="PHONE" />
      <Tab icon={<MaterialSymbolsLightFavorite />} label="FAVORITES" />
      <Tab icon={<IcRoundPersonAdd />} label="PERSON" />
    </Tabs>
  );
}
