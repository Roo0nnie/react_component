import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { MaterialSymbolsLightAdd } from '../buttons/buttons_icon/add';
import { MaterialSymbolsLightEdit } from '../buttons/buttons_icon/edit';
import { MaterialSymbolsLightFavorite } from '../buttons/buttons_icon/favoritefull';
import { IonNavigate } from '../buttons/buttons_icon/navigate';

export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <MaterialSymbolsLightAdd />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <MaterialSymbolsLightEdit />
      </Fab>
      <Fab variant="extended">
        <IonNavigate sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <MaterialSymbolsLightFavorite />
      </Fab>
    </Box>
  );
}
