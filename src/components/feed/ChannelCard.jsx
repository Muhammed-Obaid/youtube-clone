import React, { useEffect, useState } from 'react'
import { Box, CardContent, CardMedia, Typography, Stack, Card } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => {

  return (
    <Box sx={{ width: { sm: '272px', xs: '92VW' }, height: '290px', mt: marginTop }} className={`flex flex-col justify-center items-center m-auto`}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }} className='text-white flex flex-col justify-center items-center'>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3', mx: 'auto' }}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 15, color: 'gray', ml: 1 }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard


// #fff