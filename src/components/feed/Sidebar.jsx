import React from 'react'
import './sidebar.css'
import { Stack } from '@mui/material'
import { categories } from '../../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategpry }) => (
    <Stack className=''
        direction='row'
        sx={{ overflowY: 'auto', height: { sx: 'auto', md: '90%' }, flexDirection: { md: 'column' } }}
    >
        {categories.map((category) => (
            <button
                className='text-white my-[6px] rounded-full flex py-1 px-2 w-[150px] items-center icon-btn mr-2'
                style={{ background: category.name === selectedCategory && '#fc1503' }}
                key={category.name}
                onClick={() => setSelectedCategpry(category.name)}
            >
                <span className='flex items-center mr-2' style={{ color: category.name === selectedCategory ? 'white' : 'red' }}>{category.icon}</span>
                <span className='text-sm' style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
            </button>
        ))}

    </Stack>
)

export default Sidebar
