import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IconParkOutlineMoreOne } from '../buttons/buttons_icon/more';
import { MaterialSymbolsMenu } from '../buttons/buttons_icon/menu';
import { MaterialSymbolsSearch } from '../buttons/buttons_icon/search';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1,  width:"100%" }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MaterialSymbolsMenu />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
            MUI
          </Typography>
          <IconButton size="large" aria-label="search" color="inherit">
            <MaterialSymbolsSearch />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <IconParkOutlineMoreOne />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
