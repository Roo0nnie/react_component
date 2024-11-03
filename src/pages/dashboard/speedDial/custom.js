import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { MaterialSymbolsPrint } from '../buttons/buttons_icon/print';
import { MaterialSymbolsShare } from '../buttons/buttons_icon/share';
import { MdiFile } from '../buttons/buttons_icon/file';
import { MaterialSymbolsSave } from '../buttons/buttons_icon/save';
import { MaterialSymbolsLightEdit } from '../buttons/buttons_icon/edit';

const actions = [
  { icon: <MdiFile />, name: 'Copy' },
  { icon: <MaterialSymbolsSave />, name: 'Save' },
  { icon: <MaterialSymbolsPrint />, name: 'Print' },
  { icon: <MaterialSymbolsShare />, name: 'Share' },
];

export default function OpenIconSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<MaterialSymbolsLightEdit />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
