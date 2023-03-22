import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import './Home.css'
import Twittes from '../Twittes'
import Trends from '../Trends'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


const Home = () => {
    return (
        <div className="twitter">
            <Sidebar />
            <Twittes />
            <Trends />
        </div>
    )
}

export default Home