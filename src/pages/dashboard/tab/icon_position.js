import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


import { MaterialSymbolsLightFavorite } from '../buttons/buttons_icon/favoritefull';
import { MaterialSymbolsAlarm } from '../buttons/buttons_icon/alarm';
import { MaterialSymbolsCloud } from '../buttons/buttons_icon/cloud';
import { MaterialSymbolsHome } from '../buttons/buttons_icon/home';

export default function IconPositionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
      <Tab icon={<MaterialSymbolsHome />} label="top" />
      <Tab icon={<MaterialSymbolsAlarm />} iconPosition="start" label="start" />
      <Tab icon={<MaterialSymbolsLightFavorite />} iconPosition="end" label="end" />
      <Tab icon={<MaterialSymbolsCloud />} iconPosition="bottom" label="bottom" />
    </Tabs>
  );
}
