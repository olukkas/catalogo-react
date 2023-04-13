import React from 'react';
import { Box, Container } from '@mui/material';


type Props = {
  children: React.ReactNode
}

export function Layout({children}: Props) {
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{mt: 4, mb: 4}}
      >
        {children}
      </Container>
    </Box>
  );
}
