import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { MdiBell } from '../buttons/buttons_icon/bell';

export default function ShowZeroBadge() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={0}>
        <MdiBell />
      </Badge>
      <Badge color="secondary" badgeContent={0} showZero>
        <MdiBell />
      </Badge>
    </Stack>
  );
}
