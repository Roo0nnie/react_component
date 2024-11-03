import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { MdiBell } from '../buttons/buttons_icon/bell';

export default function DotBadge() {
  return (
    <Box sx={{ color: 'action.active' }}>
      <Badge color="secondary" variant="dot">
        <MdiBell />
      </Badge>
    </Box>
  );
}
