import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { MaterialSymbolsFingerprint } from './buttons_icon/fingerprint';

export default function IconButtonColors() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="secondary">
        <MaterialSymbolsFingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <MaterialSymbolsFingerprint />
      </IconButton>
    </Stack>
  );
}
