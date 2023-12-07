import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

export default function NavBar({
    handleClickBtn
}: {
    handleClickBtn: Function
}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Typography color={"white"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My pets
          </Typography>
          <Button sx={{mr:5}} onClick={()=>handleClickBtn()}>
            <Typography color={"white"}>Mes favoris</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}