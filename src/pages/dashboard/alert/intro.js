import * as React from 'react';
import Alert from '@mui/material/Alert';
import { MaterialSymbolsCheck } from '../buttons/buttons_icon/check';

export default function SimpleAlert() {
  return (
    <Alert icon={<MaterialSymbolsCheck fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>
  );
}
