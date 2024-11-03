import * as React from 'react';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { MaterialSymbolsAlarm } from '../buttons/buttons_icon/alarm';
import { MaterialSymbolsFingerprint } from '../buttons/buttons_icon/fingerprint';
import { MaterialSymbolsLightBookmarkOutline } from '../buttons/buttons_icon/bookmarked';



export default function IconAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>
        <MaterialSymbolsAlarm />
      </Avatar>
      <Avatar sx={{ bgcolor: pink[500] }}>
        <MaterialSymbolsFingerprint />
      </Avatar>
      <Avatar sx={{ bgcolor: green[500] }}>
        <MaterialSymbolsLightBookmarkOutline />
      </Avatar>
    </Stack>
  );
}
