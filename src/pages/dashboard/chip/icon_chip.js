import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { IcRoundAccountCircle } from '../buttons/buttons_icon/account';

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<IcRoundAccountCircle />} label="With Icon" />
      <Chip icon={<IcRoundAccountCircle />} label="With Icon" variant="outlined" />
    </Stack>
  );
}
