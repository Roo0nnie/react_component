import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import { MaterialSymbolsCheck } from '../buttons/buttons_icon/check';

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => setSelected((prevSelected) => !prevSelected)}
    >
      <MaterialSymbolsCheck />
    </ToggleButton>
  );
}
