import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/navbar/Navbar'
import Feed from './components/feed/Feed'
import VideoDetail from './components/videoDetail/VideoDetail'
import ChannelDetail from './components/chanelDetail/ChannelDetail'
import SearchFeed from './components/searchFeed/SearchFeed'
function App() {

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }} className=''>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/videos/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>

    </BrowserRouter>
  )
}

export default App
