import React, { useState } from 'react';
import { Box, } from '@mui/material';

import Foldszint from './Foldszint';
import Emelet from './Emelet';

const Home = () => {


    return (
        <Box>
                <Foldszint />
   
                <Emelet />

        </Box>
    );
}

export default Home;
