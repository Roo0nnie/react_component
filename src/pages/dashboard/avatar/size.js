import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function SizeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/assets/images/avatars/1.png"
        sx={{ width: 24, height: 24 }}
      />
      <Avatar alt="Remy Sharp" src="/assets/images/avatars/1.png" />
      <Avatar
        alt="Remy Sharp"
        src="/assets/images/avatars/1.png"
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
  );
}
