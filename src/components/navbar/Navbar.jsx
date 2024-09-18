import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack
      zIndex={2}
      direction='row'
      alignItems='center'
      p={1}
      sx={{ backgroundColor: '#000', position: 'sticky', top: 0, justifyContent: 'space-between' }}>
      <Link to='/' className='flex items-center'>
        <img src={logo} alt='logo' height={40} width={40}
        />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
