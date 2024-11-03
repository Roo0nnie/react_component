import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { MaterialSymbolsDelete } from './buttons_icon/delete';
import { MaterialSymbolsSend } from './buttons_icon/send';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined"  startIcon={<MaterialSymbolsDelete />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<MaterialSymbolsSend/>}>
        Send
      </Button>
    </Stack>
  );
}
