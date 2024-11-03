import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { MdiBell } from '../buttons/buttons_icon/bell';

export default function ColorBadge() {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="secondary">
        <MdiBell color="action" />
      </Badge>
      <Badge badgeContent={4} color="success">
        <MdiBell color="action" />
      </Badge>
    </Stack>
  );
}
