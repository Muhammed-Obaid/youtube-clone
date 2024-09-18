import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { fetchApi } from '../../utils/fetchApi'
import Videos from '../feed/Videos'



const VideoDetail = () => {
  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items))
    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '95%', position: 'sticky', top: '86px' }} className=''>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width={'100%'} />
            <Typography variant='h5' fontWeight='bold' className=' text-white border- pt-2'>
              {videoDetail?.[0].snippet?.title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${videoDetail?.[0].snippet?.channelId}`} className='text-white'>
                <Typography variant='subtitle1'>
                  {videoDetail?.[0].snippet?.channelTitle}
                  <CheckCircle sx={{ color: 'gray', ml: 2, fontSize: '15px' }} />
                </Typography>
              </Link>
              <Stack direction='row' alignItems='center' gap={2}>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.[0].statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {videoDetail?.[0].statistics?.likeCount ?
                    `${parseInt(videoDetail?.[0].statistics?.likeCount).toLocaleString()} likes` :
                    `${parseInt(videoDetail?.[0].statistics?.commentCount).toLocaleString()} comments`
                  }
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center' className='flex'>
          <Videos videos={videos} direction='column' width={{ md: '360px', sm: '75vw', sx: '100%' }} />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
