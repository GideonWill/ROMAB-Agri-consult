import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Target, Eye, Heart, BarChart3, ShieldCheck, Image as ImageIcon } from 'lucide-react'
import aboutMain from '../assets/IMG-20251202-WA0018.jpg'
import aboutSecondary from '../assets/IMG-20251202-WA0016.jpg'
import aboutFeatured from '../assets/IMG-20251202-WA0021.jpg'
import gallery1 from '../assets/IMG-20251202-WA0023.jpg'

const About = () => {
    return (
        <main className="overflow-x-hidden">
            <Navbar />

            {/* Page Header */}
            <section className="bg-[#1B3618] pt-32 pb-20 text-white relative overflow-hidden">
                {/* Background Pattern Overlay for better contrast */}
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">About <span className="text-accent">Us</span></h1>
                        <p className="text-lg sm:text-xl text-primary-sage max-w-2xl font-medium">
                            Dedicated to providing expert guidance and innovative solutions for sustainable farm success.
                        </p>
                    </div>
                    <div className="md:w-1/2 relative h-[300px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
                        <img src={aboutMain} alt="Aerial view of a vibrant carrot field, showing healthy crop growth and meticulous management" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-[-12deg] translate-x-20 -z-0"></div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-primary/5">
                            <img src={aboutFeatured} alt="A row of healthy dragon fruit seedlings in a nursery, showcasing our cultivation expertise" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-4xl font-extrabold text-primary">Committed to <span className="text-accent">Growth</span></h2>
                            <p className="text-gray-600 text-lg font-medium leading-relaxed">
                                Our team is deeply rooted in the agricultural landscape, bringing first-hand experience and passion to every project. We work side-by-side with farmers to ensure sustainable success.
                            </p>
                            <div className="grid gap-6">
                                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
                                        <Target size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary">Our Mission</h3>
                                        <p className="text-gray-600 text-sm">Enhancing productivity through personalized advice.</p>
                                    </div>
                                </div>
                                <div className="bg-accent/5 p-6 rounded-2xl border border-accent/10 flex items-start gap-4">
                                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white shrink-0">
                                        <Eye size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary">Our Vision</h3>
                                        <p className="text-gray-600 text-sm">To be the leading agricultural consultancy in Ghana.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 space-y-6">
                            <h2 className="text-3xl font-bold text-primary">Sustainable Impact</h2>
                            <p className="text-gray-600 font-medium">
                                We believe in empowering farmers with the tools and knowledge they need to thrive in a changing environment, focusing on long-term viability and ecological health.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 relative h-[350px] rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img src={aboutSecondary} alt="Close-up of healthy green plants, demonstrating the effectiveness of our sustainable farming techniques" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition Section (from PDF analysis) */}
            <section className="py-24 bg-[#F9FAFB]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">The ROMAB Advantage</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'ROI Growth',
                                desc: 'Optimize your farm operations to ensure the highest return on investment.',
                                icon: <BarChart3 className="text-accent" />
                            },
                            {
                                title: 'Sustainable Practices',
                                desc: 'Implementing eco-friendly methods that preserve soil health and the environment.',
                                icon: <Heart className="text-accent" />
                            },
                            {
                                title: 'Expert Expertise',
                                desc: 'Access to years of experience in crop management and pest control.',
                                icon: <ShieldCheck className="text-accent" />
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                                    {React.cloneElement(item.icon, { size: 28 })}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex items-center gap-4 mb-12">
                        <ImageIcon size={32} className="text-accent" />
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Farm Excellence in Action</h2>
                    </div>
                    <div className="flex justify-center">
                        <div className="h-[400px] w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-xl border-4 border-[#F9FAFB]">
                            <img src={gallery1} alt="A high-quality harvest of fresh vegetables, representing the ROMAB standard of excellence" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default About
