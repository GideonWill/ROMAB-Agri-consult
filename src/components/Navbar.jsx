import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/IMG-20251202-WA0014.jpg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [location])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ]

    const handleNavClick = (e, href) => {
        // Only use smooth scroll if we are navigating to Home and we are already on Home
        if (href === '/' && location.pathname === '/') {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-12 h-12 overflow-hidden rounded-full flex items-center justify-center border-2 border-accent/20">
                        <img src={logo} alt="ROMAB Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className={`font-bold text-base sm:text-xl tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
                        ROMAB <span className="text-accent">Agriconsult</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`relative font-semibold transition-all duration-300 py-2 group ${isScrolled ? 'text-primary' : 'text-white'
                                } ${location.pathname === link.href ? 'text-accent' : 'hover:text-accent'}`}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform transition-transform duration-300 origin-left ${location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`}></span>
                        </Link>
                    ))}
                    <a
                        href="tel:0549978969"
                        className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105"
                    >
                        <Phone size={18} />
                        0549978969
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-primary' : 'text-white'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 z-[60] transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop with Blur */}
                <div className="absolute inset-0 bg-primary/95 backdrop-blur-xl" onClick={() => setIsOpen(false)}></div>

                {/* Close Button */}
                <button
                    className="absolute top-8 right-8 text-white p-2 z-[70] transition-transform hover:rotate-90"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={32} />
                </button>

                {/* Menu Content */}
                <div className={`relative z-[65] h-full flex flex-col justify-between p-12 transition-transform duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-10'}`}>
                    <div className="flex flex-col gap-8 mt-20 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`text-3xl font-extrabold tracking-tight transition-all ${location.pathname === link.href ? 'text-accent' : 'text-white hover:text-accent'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-8 animate-fade-in-up">
                        <div className="h-px bg-white/10 w-full"></div>
                        <div className="grid grid-cols-1 gap-6">
                            <a href="tel:0549978969" className="flex items-center justify-center gap-4 text-white">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                    <Phone size={20} />
                                </div>
                                <span className="font-bold text-lg">0549978969</span>
                            </a>
                        </div>
                        <Link
                            to="/contact"
                            className="bg-accent text-white py-4 rounded-2xl font-bold text-xl text-center shadow-xl shadow-accent/20"
                        >
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
