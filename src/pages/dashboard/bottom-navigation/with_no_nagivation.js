import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { MaterialSymbolsWifi } from '../buttons/buttons_icon/wifi';
import { MaterialSymbolsInbox } from '../buttons/buttons_icon/inbox';
import { MaterialSymbolsLightFavorite } from '../buttons/buttons_icon/favoritefull';
import { MaterialSymbolsMail } from '../buttons/buttons_icon/mail';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Inbox"
        value="Inbox"
        icon={<MaterialSymbolsInbox />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<MaterialSymbolsLightFavorite />}
      />
      <BottomNavigationAction
        label="Mail"
        value="Mail"
        icon={<MaterialSymbolsMail />}
      />
      <BottomNavigationAction label="Wifi" value="Wifi" icon={<MaterialSymbolsWifi />} />
    </BottomNavigation>
  );
}
