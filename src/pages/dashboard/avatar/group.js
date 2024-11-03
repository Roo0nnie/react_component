import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="/assets/images/avatars/1.png" />
      <Avatar alt="Travis Howard" src="/assets/images/avatars/2.png" />
      <Avatar alt="Cindy Baker" src="/assets/images/avatars/3.png" />
      <Avatar alt="Agnes Walker" src="/assets/images/avatars/4.png" />
      <Avatar alt="Trevor Henderson" src="/assets/images/avatars/5.png" />
    </AvatarGroup>
  );
}
