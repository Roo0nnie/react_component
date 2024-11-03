import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { MaterialSymbolsPrint } from '../buttons/buttons_icon/print';
import { MaterialSymbolsShare } from '../buttons/buttons_icon/share';
import { MdiFile } from '../buttons/buttons_icon/file';
import { MaterialSymbolsSave } from '../buttons/buttons_icon/save';

const actions = [
  { icon: <MdiFile />, name: 'Copy' },
  { icon: <MaterialSymbolsSave />, name: 'Save' },
  { icon: <MaterialSymbolsPrint />, name: 'Print' },
  { icon: <MaterialSymbolsShare />, name: 'Share' },
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
