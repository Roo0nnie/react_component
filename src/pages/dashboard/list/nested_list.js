import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { MaterialSymbolsInbox } from '../buttons/buttons_icon/inbox';
import { IcSharpDrafts } from '../buttons/buttons_icon/draft';
import { MaterialSymbolsSend } from '../buttons/buttons_icon/send';
import { MaterialSymbolsLightStar } from '../buttons/buttons_icon/star';
import { IcRoundExpandLess } from '../buttons/buttons_icon/expandless';
import { IcOutlineExpandMore } from '../buttons/buttons_icon/expand';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <MaterialSymbolsSend />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <IcSharpDrafts />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <MaterialSymbolsInbox />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <IcRoundExpandLess /> : <IcOutlineExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <MaterialSymbolsLightStar />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
