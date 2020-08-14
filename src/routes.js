import Layout from './component/Login/Layout'
import FullLayout from './component/Home/FullLayout'
import Dashboard from './component/Home/Dashboard'
import Login from './component/Login/Login'
import { Redirect } from 'react-router-dom'
import React from 'react'
import DaftarBarang from './component/Home/DaftarBarang'

export default [
    {
        path: '/',
        layout: Layout,
        component: () => <Redirect to="/login" />
    },
    {
        path: '/login',
        layout: Layout,
        component: Login
    },
    {
        path: '/dashboard',
        layout: FullLayout,
        component: Dashboard,
    },
    {
        path: '/daftarbarang',
        layout: FullLayout,
        component: DaftarBarang
    }
]