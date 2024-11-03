import React from 'react';
import { TextField, Autocomplete } from '@mui/material';

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Dark Knight', year: 2008 },
];

function OptionalStruc() {
    return (
        <div>
            <Autocomplete
                disablePortal
                options={top100Films}
                getOptionLabel={(option) => option.title}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </div>
    );
}

export default OptionalStruc;
