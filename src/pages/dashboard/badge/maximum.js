import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { MdiBell } from '../buttons/buttons_icon/bell';

export default function BadgeMax() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={99}>
        <MdiBell />
      </Badge>
      <Badge color="secondary" badgeContent={100}>
        <MdiBell />
      </Badge>
      <Badge color="secondary" badgeContent={1000} max={999}>
        <MdiBell />
      </Badge>
    </Stack>
  );
}
