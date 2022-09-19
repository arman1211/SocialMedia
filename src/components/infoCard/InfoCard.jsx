import React, { useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../profileModal/ProfileModal'

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false)
    return (
        <div className="infoCard">
            <div className="infoHeader">
                <h4>Your info</h4>
                <UilPen onClick={() => setModalOpened(true)} />
                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />

            </div>
            <div className="info">
                <span><b>Status: </b></span>
                <span>Pure Single</span>
            </div>
            <div className="info">
                <span><b>Lives: </b></span>
                <span>Chittagong</span>
            </div>
            <div className="info">
                <span><b>Email: </b></span>
                <span>halululu@halu.com</span>
            </div>
            <div className="button i-button">
                Logout
            </div>
        </div>
    )
}

export default InfoCard