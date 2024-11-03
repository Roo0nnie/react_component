import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { MaterialSymbolsInbox } from '../buttons/buttons_icon/inbox';
import { MaterialSymbolsLightFavorite } from '../buttons/buttons_icon/favoritefull';
import { MaterialSymbolsMail } from '../buttons/buttons_icon/mail';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Inbox" icon={<MaterialSymbolsInbox />} />
        <BottomNavigationAction label="Favorites" icon={<MaterialSymbolsLightFavorite />} />
        <BottomNavigationAction label="Mails" icon={<MaterialSymbolsMail />} />
      </BottomNavigation>
    </Box>
  );
}
