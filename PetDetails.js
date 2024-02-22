// PetDetails.js
import React from 'react';
import dog from './dog.jpg';
import cat from './cat.jpg';
import './PetDetails.css'; // Import CSS file for styling

function PetDetails() {
    return (
        <div className="img-container">
            <div>
                <a href="/catform">
                    <img src={cat} className='img' alt="Cat"/>
                </a>
            </div>
            <div>
                <a href="/dogform">
                    <img src={dog} className='img' alt="Dog"/>
                </a>
            </div>
        </div>
    );
}

export default PetDetails;
