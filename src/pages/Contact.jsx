import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import contactHeader from '../assets/IMG-20251202-WA0013.jpg'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, subject, message } = formData
        const text = `Hello ROMAB Agriconsult,%0A%0AMy name is ${name}.%0AEmail: ${email}%0ASubject: ${subject}%0A%0AMessage: ${message}`
        window.open(`https://wa.me/233549978969?text=${text}`, '_blank')
    }

    return (
        <main className="overflow-x-hidden">
            <Navbar />

            {/* Page Header */}
            <section className="bg-[#1B3618] pt-32 pb-20 text-white relative overflow-hidden">
                {/* Background Pattern Overlay for better contrast */}
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">Contact <span className="text-accent">Us</span></h1>
                        <p className="text-lg sm:text-xl text-primary-sage max-w-2xl font-medium">
                            We are here to help you solve your farm-related challenges. Reach out to us anytime.
                        </p>
                    </div>
                    <div className="md:w-1/2 relative h-[300px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
                        <img src={contactHeader} alt="Lush seedlings being prepared for a successful farming season" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Contact Cards */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                        <Phone size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary">Call Us</h3>
                                </div>
                                <div className="space-y-2">
                                    <a href="https://wa.me/233549978969" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-gray-700 hover:text-accent transition-colors block">0549978969</a>
                                    <a href="tel:0506195302" className="text-lg font-bold text-gray-700 hover:text-accent transition-colors block">0506195302</a>
                                </div>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-accent/5 border border-accent/10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white">
                                        <MapPin size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary">Visit Us</h3>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-lg font-bold text-gray-700">Accra, Ghana</p>
                                    <p className="text-gray-600 font-medium">Ablekuma Agape</p>
                                </div>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                        <Clock size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary">Availability</h3>
                                </div>
                                <p className="text-lg font-bold text-gray-700">24/7 Hours Online</p>
                                <p className="text-gray-600 font-medium mt-2">Always ready to assist.</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-[#F9FAFB] p-10 md:p-16 rounded-[3rem] border border-gray-100">
                            <div className="flex items-center gap-4 mb-10">
                                <MessageSquare size={32} className="text-accent" />
                                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Send a Message</h2>
                            </div>

                            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider ml-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Full Name"
                                        className="w-full px-8 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:border-accent transition-all font-medium"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider ml-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        className="w-full px-8 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:border-accent transition-all font-medium"
                                        required
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider ml-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help?"
                                        className="w-full px-8 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:border-accent transition-all font-medium"
                                        required
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider ml-2">Message</label>
                                    <textarea
                                        rows="6"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message details..."
                                        className="w-full px-8 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:border-accent transition-all font-medium resize-none"
                                        required
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-5 rounded-2xl transition-all hover:scale-[1.01] shadow-xl shadow-accent/20 flex items-center justify-center gap-3 text-lg">
                                        Send Message
                                        <Send size={20} />
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Contact
