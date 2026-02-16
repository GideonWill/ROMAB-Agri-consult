import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Leaf, Droplets, ShieldCheck, Microscope, LineChart, Globe, Sprout, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'
import servicesHeader from '../assets/IMG-20251202-WA0020.jpg'
import servicesCTA from '../assets/IMG-20251202-WA0015.jpg'
import servicesFeatured from '../assets/IMG-20251202-WA0017.jpg'
import video1 from '../assets/WhatsApp Video 2025-12-02 at 19.37.43_4ea997f7.mp4'
import video2 from '../assets/WhatsApp Video 2025-12-02 at 19.37.56_78578c20.mp4'
import video3 from '../assets/WhatsApp Video 2025-12-02 at 19.37.58_b6543ea2.mp4'

const Services = () => {
    const services = [
        {
            title: 'Crop Management',
            desc: 'Expert guidance on crop selection, planting schedules, and yield optimization focused on modern techniques.',
            icon: <Leaf />,
            details: ['Planting Schedules', 'Yield Optimization', 'Crop Selection', 'Harvesting Techniques']
        },
        {
            title: 'Soil Health',
            desc: 'Comprehensive soil testing and nutrient management for better productivity and long-term viability.',
            icon: <Droplets />,
            details: ['PH Analysis', 'Nutrient Management', 'Erosion Control', 'Organic Enrichment']
        },
        {
            title: 'Pest Control',
            desc: 'Sustainable and integrated pest management (IPM) strategies to protect your harvest from threats.',
            icon: <ShieldCheck />,
            details: ['IPM Strategies', 'Biological Controls', 'Disease Prevention', 'Safe Pesticide Use']
        },
        {
            title: 'Research & Innovation',
            desc: 'Innovative agricultural research and laboratory services exploring new farming frontiers.',
            icon: <Microscope />,
            details: ['Lab Analysis', 'Field Trials', 'New Seed Testing', 'Agtech Adoption']
        },
        {
            title: 'Precision Farming',
            desc: 'Using data-driven strategies to optimize every inch of your farm for maximum efficiency.',
            icon: <LineChart />,
            details: ['Data Analysis', 'Resource Mapping', 'Tech Integration', 'Efficiency Audits']
        },
        {
            title: 'Sustainable Practices',
            desc: 'Focusing on environmentally friendly farming that preserves resources for future generations.',
            icon: <Globe />,
            details: ['Water Conservation', 'Eco-friendly Inputs', 'Climate Resilience', 'Carbon Sequestration']
        }
    ]

    return (
        <main className="overflow-x-hidden">
            <Navbar />

            {/* Page Header */}
            <section className="bg-[#1B3618] pt-24 sm:pt-32 pb-16 sm:pb-20 text-white relative overflow-hidden">
                {/* Background Pattern Overlay for better contrast */}
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6">Our <span className="text-accent">Services</span></h1>
                        <p className="text-base sm:text-xl text-primary-sage max-w-2xl font-medium">
                            Personalized advice and innovative strategies to enhance productivity and promote farm success.
                        </p>
                    </div>
                    <div className="md:w-1/2 relative h-[250px] sm:h-[300px] w-full rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
                        <img src={servicesHeader} alt="Lush cabbage field" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-[#F9FAFB] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-accent group-hover:text-white transition-colors">
                                    {React.cloneElement(service.icon, { size: 32 })}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed mb-8">
                                    {service.desc}
                                </p>
                                <div className="space-y-3">
                                    {service.details.map((detail, j) => (
                                        <div key={j} className="flex items-center gap-2">
                                            <Sprout size={16} className="text-accent" />
                                            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Work Image */}
            <section className="py-16 sm:py-24 bg-[#F9FAFB]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="relative h-[300px] sm:h-[500px] rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
                        <img src={servicesFeatured} alt="Farmer tending to young crops" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Video Showcase Section */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">Experience Our Work</span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-primary mt-2">Agribusiness in <span className="text-accent">Motion</span></h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { video: video1, text: "Observing the growth progress of our high-yield crop varieties in the field." },
                            { video: video2, text: "Applying precision irrigation techniques to ensure optimal soil moisture levels." },
                            { video: video3, text: "Collaborating with local farmers to implement sustainable planting strategies." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-4">
                                <div className="rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-primary/5 bg-primary/5">
                                    <video
                                        controls
                                        className="w-full h-full object-cover aspect-[9/16] sm:aspect-video"
                                    >
                                        <source src={item.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <p className="text-gray-600 font-bold text-sm sm:text-base px-2 leading-relaxed text-center italic">
                                    "{item.text}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 sm:py-24 bg-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 text-center lg:text-left">
                            <div className="inline-flex p-4 bg-white/10 rounded-2xl text-accent mb-6 sm:mb-8">
                                <Briefcase size={32} className="sm:size-10" />
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 sm:mb-8">Ready for a Farm Consultation?</h2>
                            <p className="text-primary-sage text-lg sm:text-xl max-w-2xl mb-10 sm:mb-12 font-medium">
                                Contact us today to schedule a site visit or a virtual consultation with our experts.
                            </p>
                            <Link to="/contact" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-transform hover:scale-105 shadow-xl shadow-accent/20 inline-block text-center">
                                Get Started Now
                            </Link>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[250px] sm:h-[400px] rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10">
                            <img src={servicesCTA} alt="Close-up of healthy seedlings" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Services
