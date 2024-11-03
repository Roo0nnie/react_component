import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { MaterialSymbolsInbox } from '../buttons/buttons_icon/inbox';
import { MaterialSymbolsLightBookmark } from '../buttons/buttons_icon/bookmarkedfull';
import { MaterialSymbolsLightAdd } from '../buttons/buttons_icon/add';

export default function FolderList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MaterialSymbolsInbox />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Inbox" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MaterialSymbolsLightBookmark />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Save" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MaterialSymbolsLightAdd />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Add" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}
