import * as React from 'react';
import Badge from '@mui/material/Badge';
import { MdiBell } from '../buttons/buttons_icon/bell';

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MdiBell color="action" />
    </Badge>
  );
}
