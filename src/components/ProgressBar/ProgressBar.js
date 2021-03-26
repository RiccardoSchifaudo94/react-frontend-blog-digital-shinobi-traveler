import React,{useEffect, useState} from 'react';
import './ProgressBar.css';

export default function ProgressBar() {
    
    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(scroll);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });

    return (
        <div className="dst_progress_bar_container">
            <div className="dst_progress_bar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
        </div>
    )

}
