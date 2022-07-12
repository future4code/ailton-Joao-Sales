import { AdminHomePage } from '../AdminHomePage/AdminHomePage'
import { ApplicationFormPage } from '../ApplicationFormPage/ApplicationFormPage'
import { CreateTripPage } from '../CreateTripPage/CreateTripPage'
import { HomePage } from '../HomePage/HomePage'
import { ListTripsPage } from '../ListTripPage/ListTripsPage'
import { LoginPage } from '../LoginPage/LoginPage'
import { TripDetailsPage } from '../TripDetailsPage/TripDetailsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='Admin' element={<AdminHomePage />} />
                <Route path='Login' element={<LoginPage />}/>
                <Route path='Trips' element={<ListTripsPage />}/>
                <Route path='Trips/Create' element={<CreateTripPage />}/>
                <Route path='Trips/TripDetails' element={<TripDetailsPage />}/>
                <Route path='Trips/Application' element={<ApplicationFormPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
