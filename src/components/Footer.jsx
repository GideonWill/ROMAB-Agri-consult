import React from 'react'
import { MapPin, Phone, Clock, Facebook } from 'lucide-react'

const Footer = () => {
    return (
        <footer id="contact" className="bg-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand Col */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xl">R</span>
                            </div>
                            <span className="font-bold text-2xl tracking-tight">
                                ROMAB <span className="text-accent">Agriconsult</span>
                            </span>
                        </div>
                        <p className="text-primary-sage text-lg leading-relaxed">
                            Enhancing productivity, optimizing resource use, and promoting farm success through expert guidance.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.facebook.com/share/17Sv2GpL9W/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@rako_foods_gh?_r=1&_t=ZS-93y14i6WItR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                                aria-label="TikTok"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Our Services', 'Case Studies', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-primary-sage hover:text-accent transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Get in Touch
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone className="text-accent" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold opacity-60 uppercase mb-1">Call Us</p>
                                    <p className="text-lg">
                                        <a href="https://wa.me/233549978969" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">0549978969</a> / <a href="tel:0506195302" className="hover:text-accent transition-colors">0506195302</a>
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="text-accent" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold opacity-60 uppercase mb-1">Location</p>
                                    <p className="text-lg">Accra, Ablekuma Agape</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                    <Clock className="text-accent" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold opacity-60 uppercase mb-1">Opening Hours</p>
                                    <p className="text-lg">24 Hours Online</p>
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>

                <div className="pt-8 border-t border-white/10 text-center text-primary-sage">
                    <p>© {new Date().getFullYear()} ROMAB Agriconsult. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
