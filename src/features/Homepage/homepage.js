import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Article } from '../Articles/article'
import { Best } from './Best/best'


export function Homepage() {


    return(
        <div>
            <Routes>
                <Route path='/' element={<Article />} />
                <Route path='/best' element={<Best />} />
            </Routes>
        </div>
    )
}