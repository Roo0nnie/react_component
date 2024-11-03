import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { MaterialSymbolsLightFavorite } from '../buttons/buttons_icon/favoritefull';
import { GridiconsPhone } from '../buttons/buttons_icon/phone';
import { IcRoundPersonAdd } from '../buttons/buttons_icon/add_person';

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab icon={<GridiconsPhone />} aria-label="phone" />
      <Tab icon={<MaterialSymbolsLightFavorite />} aria-label="favorite" />
      <Tab icon={<IcRoundPersonAdd />} aria-label="person" />
    </Tabs>
  );
}
