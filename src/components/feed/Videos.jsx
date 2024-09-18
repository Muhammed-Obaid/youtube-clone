import React, { useEffect, useState } from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({ videos, direction, loading, width }) => {

  if (loading) return <div className='text-white text-5xl'>loading...</div>
  // if (!loading && !videos.length) return <div className='text-red-800'>no data found please try later</div>

  const [video, setVideo] = useState([])
  const [channel, setChannel] = useState([])
  const [playlist, setPlaylist] = useState([])
  useEffect(() => {
    const filterVideo = []
    const filterChannel = []
    const filterPlaylist = []
    if (!videos) return;
    videos.forEach(item => {
      if (item.id.videoId) {
        filterVideo.push(item)
      }
      if (item.id.channelId) {
        filterChannel.push(item)
      }
      if (item.id.playlistId) {
        filterPlaylist.push(item)
      }
    });
    setVideo(filterVideo)
    setChannel(filterChannel)
    setPlaylist(filterPlaylist)
  }, [videos])

  return (
    <Stack direction={direction || 'row'} sx={{ width: { sx: 'auto' } }} flexWrap='wrap' gap={2} justifyContent='center' className='px-2'>
      {channel.length ? <Box className=''><ChannelCard channelDetail={channel[0]} /></Box> : null}
      {video?.map((item, id) => (
        <Box key={id} width={{ direction }} className={`mb-5 mx-0 w-[100%] sm:w-auto`}>
          {item.id.videoId && <VideoCard video={item} width={width} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
