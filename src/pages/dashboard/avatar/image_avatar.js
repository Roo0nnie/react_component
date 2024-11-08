import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/assets/images/avatars/1.png" />
      <Avatar alt="Travis Howard" src="/assets/images/avatars/2.png" />
      <Avatar alt="Cindy Baker" src="/assets/images/avatars/3.png" />
    </Stack>
  );
}
