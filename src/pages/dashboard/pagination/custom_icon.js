import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';


import { FeArrowLeft } from '../buttons/buttons_icon/arrow_left';
import { RiArrowRightSLine } from '../buttons/buttons_icon/arrow_right';

export default function CustomIcons() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: FeArrowLeft, next: RiArrowRightSLine }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
