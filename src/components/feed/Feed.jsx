import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchApi } from '../../utils/fetchApi'

const Feed = () => {
  const [selectedCategory, setSelectedCategpry] = useState('New')
  const [loading, setLoading] = useState(false)
  const [videos, setVideos] = useState([])
  useEffect(() => {
    setLoading(true)
    fetchApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => (setVideos(data.items)))
      .finally(() => setLoading(false))
  }, [selectedCategory])

  return (
    <Stack className='' sx={{ flexDirection: { sx: 'colmn', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }, position: { md: 'sticky', sx: 'static' }, top: 58 }} className='border-'>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategpry={setSelectedCategpry} />
        <Typography variant='body2' sx={{ mt: 1.5, color: '#fff' }} display={{ md: 'block', xs: 'none' }} className=''>
          Copyright 2024
        </Typography>
      </Box>
      <Box p={1} minHeight='90vh' flex={2}>
        <Typography variant='h4' fontWeight='bold' mb={2} color='white'>
          {selectedCategory} <span className='' style={{ color: 'red' }}>Videos</span>
        </Typography>
        <Videos videos={videos} loading={loading} />
      </Box>
    </Stack>
  )
}

export default Feed
