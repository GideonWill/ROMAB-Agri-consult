import { CheckCircle2, Award, Users, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import aboutImage from '../assets/IMG-20251202-WA0019.jpg'

const AboutPreview = () => {
    return (
        <section className="py-24 bg-[#F9FAFB] overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative z-10 rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src={aboutImage}
                                alt="Meticulously managed farm rows, demonstrating ROMAB's commitment to precision and sustainability"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Stats Overlay */}
                        <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl z-20 border border-gray-100 max-w-[160px] sm:max-w-[240px]">
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <div className="flex items-center gap-2 sm:gap-4">
                                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Users size={16} className="sm:size-6" />
                                    </div>
                                    <div>
                                        <p className="text-xl sm:text-3xl font-extrabold text-primary leading-none">150+</p>
                                        <p className="text-[10px] sm:text-sm font-bold text-gray-400 uppercase tracking-widest leading-none mt-1">Clients</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-4">
                                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                                        <Award size={16} className="sm:size-6" />
                                    </div>
                                    <div>
                                        <p className="text-xl sm:text-3xl font-extrabold text-primary leading-none">3+</p>
                                        <p className="text-[10px] sm:text-sm font-bold text-gray-400 uppercase tracking-widest leading-none mt-1">Years</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Grid */}
                        <div className="hidden sm:block absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#2D5A27_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-accent font-bold tracking-widest uppercase text-sm">About Romab Agriconsult</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">
                                We Guide You to <br />
                                <span className="text-primary-light italic">Farm Success</span>
                            </h2>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                            ROMAB Agriconsult is a dedicated agricultural consultancy firm that provides expert guidance and solutions to farmers and individuals facing farm-related challenges. Specializing in crop management, soil health, pest control, and sustainable farming practices.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: 'Personalized Advice', icon: <Target className="text-accent" /> },
                                { title: 'Innovative Strategies', icon: <Target className="text-accent" /> },
                                { title: 'Sustainable Practices', icon: <Target className="text-accent" /> },
                                { title: 'Resource Optimization', icon: <Target className="text-accent" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    {item.icon}
                                    <span className="font-bold text-primary">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <p className="text-primary font-bold text-xl">Our Expertise Includes:</p>
                            <div className="space-y-3">
                                {['Crop Management & Yield Growth', 'Soil Testing & Nutrient Optimization', 'Integrated Pest Management', 'Modern Farm Tech Adoption'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 size={20} className="text-accent shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link to="/about" className="bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-primary/20 inline-block">
                            Discover More About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPreview
