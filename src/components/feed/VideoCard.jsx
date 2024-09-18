import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../../utils/constants'
import moment from 'moment'

const VideoCard = ({ video: { id: { videoId }, snippet }, width }) => {
    return (
        <Card sx={{ width: width || { md: '360px', sm: '300px', sx: '100%' }, border: 'none', boxShadow: 'none' }} className=''>
            <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet.title}
                    sx={{ height: '180px', width: { xs: '100%', sm: '100%' } }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: 'black', height: 110 }} className='flex flex-col'>
                <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
                    <Typography variant='' fontWeight='bold' color='#fff' className='text-'>
                        {snippet.title.slice(0, 45) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <div className='flex justify-between mt-1'>
                    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                        <Typography variant='' fontWeight='bold' color='#fff' className=' opacity-80 text-sm'>
                            {snippet?.channelTitle.slice(0, 28) || demoChannelTitle}
                            <CheckCircle sx={{ fontSize: 15, color: 'gray', ml: 1 }} />
                        </Typography>
                    </Link>
                    <div className='text-white text-xs opacity-60 ml-2'>{moment(snippet?.publishedAt).startOf('ss').fromNow()}</div>
                </div>
            </CardContent>
        </Card>
    )
}

export default VideoCard

