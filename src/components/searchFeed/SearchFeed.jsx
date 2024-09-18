import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import Videos from '../feed/Videos'
import { fetchApi } from '../../utils/fetchApi'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const { searchTerm } = useParams()
  const [loading, setLoading] = useState(false)
  const [videos, setVideos] = useState([])
  useEffect(() => {
    setLoading(true)
    fetchApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => (setVideos(data.items)))
      .finally(() => setLoading(false))

  }, [searchTerm])

  return (
    <Box p={1} minHeight='90vh' border='1px solid re' flex={2}>
      <Typography variant='h4' fontWeight='bold' mb={2} color='white'>
        Search results for: <span className='' style={{ color: 'red' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} loading={loading} />
    </Box>
  )
}

export default SearchFeed
