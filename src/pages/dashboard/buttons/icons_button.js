import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { MaterialSymbolsDelete } from './buttons_icon/delete';
import { HugeiconsShoppingCartAdd01 } from './buttons_icon/addShoppingCart';
import { MaterialSymbolsAlarm } from './buttons_icon/alarm';

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <MaterialSymbolsDelete />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <MaterialSymbolsDelete />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <MaterialSymbolsAlarm />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <HugeiconsShoppingCartAdd01 />
      </IconButton>
    </Stack>
  );
}
