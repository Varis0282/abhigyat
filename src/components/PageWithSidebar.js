import React from 'react'
import Sidebar from './Sidebar'

const PageWithDashboard = ({ children }) => {
    return (
        <>
            <Sidebar children={children} />
        </>
    )
}

export default PageWithDashboard
