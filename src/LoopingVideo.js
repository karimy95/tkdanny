import React from 'react';

function LoopingVideo() {
    return (
        <div>
            <video class='.farm-trailer' controls loop>
             <source src="trailer.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}
export default LoopingVideo;