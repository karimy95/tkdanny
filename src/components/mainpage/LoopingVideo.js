import React from 'react';

function LoopingVideo() {
    return (
        <div>
            <video class='farm-trailer' autoPlay muted loop>
                <source src="trailer.mp4" type="video/mp4" />
            </video>
            <div class="video-overlay">
                <p>From Our Farms To Your Doorstep</p>
                <button type="submit" id='trailer-button'>GET STARTED</button>
            </div>
        </div>
    )
}
export default LoopingVideo;