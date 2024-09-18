import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from '../feed/Videos'
import { fetchApi } from '../../utils/fetchApi'
import ChannelCart from '../feed/ChannelCard'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchApi(`channels?part=snippet&id=${id}`)
      .then((data) => (setChannelDetail(data?.items?.[0])))
    fetchApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => (setVideos(data?.items)))
      .finally(() => setLoading(false))
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div className='h-[250px] ' style={{ background: 'linear-gradient(to right, #050825, #092039, #11344b, #1f4a5d, #31606d)', zIndex: 2 }}
        />
        <ChannelCart channelDetail={channelDetail} marginTop='-93px' />
      </Box>
      <Box display='flex' p={2} className=''>
        <Box sx={{ mr: { sm: '100px' } }} className=''/>
        <Videos videos={videos} loading={loading} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
