import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material';
const Container = styled(AppBar)`
  background: #060606;
  height: 9vh
`
function Header() {
  return (
    <Container position='static'>
      <Toolbar>
        CodeUrView
      </Toolbar>
    </Container>
  )
}

export default Header