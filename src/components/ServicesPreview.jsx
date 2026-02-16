import React from 'react'
import { Leaf, Droplets, ShieldCheck, Microscope, TrendingUp, Sprout } from 'lucide-react'
import { Link } from 'react-router-dom'
import previewImage from '../assets/IMG-20251202-WA0022.jpg'

const ServicesPreview = () => {
    const services = [
        {
            title: 'Crop Management',
            desc: 'Expert guidance on crop selection, planting schedules, and yield optimization.',
            icon: <Leaf className="text-accent" size={32} />,
            color: 'bg-accent/10'
        },
        {
            title: 'Soil Health',
            desc: 'Comprehensive soil testing and nutrient management for better productivity.',
            icon: <Droplets className="text-primary" size={32} />,
            color: 'bg-primary/10'
        },
        {
            title: 'Pest Control',
            desc: 'Sustainable and integrated pest management strategies to protect your harvest.',
            icon: <ShieldCheck className="text-accent" size={32} />,
            color: 'bg-accent/10'
        },
        {
            title: 'Research & Labs',
            desc: 'Innovative agricultural research and laboratory services for farm excellence.',
            icon: <Microscope className="text-primary" size={32} />,
            color: 'bg-primary/10'
        }
    ]

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">What We Offer</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">
                            Our Specialized <br />
                            <span className="text-primary-light">Agriculture Services</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 max-w-sm text-lg font-medium">
                        We provide personalized advice and innovative strategies to enhance productivity and optimize resource use.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-6 sm:p-8 rounded-3xl border border-gray-100 bg-[#F9FAFB] hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {React.cloneElement(service.icon, { size: 28, className: service.icon.props.className })}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium text-sm sm:text-base">
                                {service.desc}
                            </p>
                            <Link to="/services" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                                Learn More
                                <TrendingUp size={18} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom Feature Bar */}
                <div className="mt-12 sm:mt-20 p-6 sm:p-12 rounded-3xl sm:rounded-[2rem] bg-primary text-white overflow-hidden relative">
                    <div className="absolute inset-0 -z-0 opacity-20">
                        <img src={previewImage} alt="Large-scale commercial farming operation" className="w-full h-full object-cover blur-sm" />
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start md:items-center justify-between gap-8 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                <Sprout size={32} className="text-accent" />
                            </div>
                            <div>
                                <h4 className="text-xl md:text-2xl font-bold">Ready to optimize your farm?</h4>
                                <p className="text-primary-sage opacity-80">Our experts are available 24/7 for you.</p>
                            </div>
                        </div>
                        <Link to="/contact" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full font-bold text-lg whitespace-nowrap transition-transform hover:scale-105 text-center">
                            Contact Us Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesPreview
