import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Article } from '../Articles/article'
import { Best } from './Best/best'
import { Hot } from './Hot/hot'
import { New } from './New/new'
import { Top } from './Top/top'


export function Homepage() {


    return(
        <div>
            <Routes>
                <Route path='/' element={<Article />} />
                <Route path='/best' element={<Best/>} />
                <Route path='/hot' element={<Hot />} />
                <Route path='/new' element={<New />} />
                <Route path='/top' element={<Top/>} />
            </Routes>
        </div>
    )
}