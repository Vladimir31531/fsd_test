import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function MuiLoader({color}) {
    return (
        <Box sx={{ display: 'flex', width: 'fit-content', margin: '0 auto', color: color }}>
            <CircularProgress sx={{ color: color }} />
        </Box>
    );
}