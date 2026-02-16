import React from 'react'
import videoSrc from '../assets/WhatsApp Video 2025-12-02 at 19.37.43_4ea997f7.mp4'

const VideoHero = () => {
    return (
        <section className="relative h-[60vh] w-full overflow-hidden bg-primary">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-3xl">
                    Witness Our <span className="text-accent">Agricultural Innovation</span> in Action
                </h2>
                <p className="text-lg sm:text-xl text-primary-sage font-medium max-w-2xl">
                    Developing sustainable solutions for a greener, more productive future.
                </p>
            </div>

            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/40 pointer-events-none"></div>
        </section>
    )
}

export default VideoHero
