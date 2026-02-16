import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-primary pt-20">
            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-primary-light/20 rounded-full blur-3xl rotate-12 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-accent/10 rounded-full blur-3xl -rotate-12"></div>

                {/* Wavy Pattern (SVG) */}
                <svg className="absolute bottom-0 w-full h-auto text-primary-light/5" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="currentColor" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-white space-y-8 max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-accent font-semibold text-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Professional Agric Consultancy
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
                        SMART <br />
                        <span className="text-accent">AGRICULTURE</span>
                    </h1>

                    <p className="text-base md:text-xl text-primary-sage font-medium leading-relaxed">
                        ROMAB Agriconsult aims to enhance productivity, optimize resource use and promote overall farm success through personalized advice and innovative strategies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link to="/services" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-accent/20">
                            Our Services
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/about" className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                            Learn More
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-accent" size={18} />
                            <span className="font-semibold text-sm sm:text-base">Sustainable</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-accent" size={18} />
                            <span className="font-semibold text-sm sm:text-base">Precision</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-accent" size={18} />
                            <span className="font-semibold text-sm sm:text-base">Expert</span>
                        </div>
                    </div>
                </div>

                {/* Image Container */}
                <div className="relative">
                    <div className="relative z-10 aspect-square w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] mx-auto overflow-hidden rounded-full border-8 border-white/10 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Fresh green seedlings in a field, symbolizing growth and agricultural innovation at ROMAB Agriconsult"
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full -z-0 opacity-50 blur-2xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-sage rounded-full -z-0 opacity-30 blur-3xl"></div>

                    {/* Circular Stats or Callout */}
                    <div className="hidden sm:block absolute bottom-10 right-0 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce transition-all duration-1000">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Productivity</p>
                                <p className="text-primary font-bold text-xl">+45% Increase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
