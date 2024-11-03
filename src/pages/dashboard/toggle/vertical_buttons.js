import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MaterialSymbolsViewListSharp } from '../buttons/buttons_icon/view';
import { MaterialSymbolsViewModuleSharp } from '../buttons/buttons_icon/module';
import { MaterialSymbolsViewQuiltSharp } from '../buttons/buttons_icon/quilt';

export default function VerticalToggleButtons() {
  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <MaterialSymbolsViewListSharp />
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
        <MaterialSymbolsViewModuleSharp />
      </ToggleButton>
      <ToggleButton value="quilt" aria-label="quilt">
        <MaterialSymbolsViewQuiltSharp />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
