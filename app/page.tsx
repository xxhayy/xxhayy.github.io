'use client';

import Image from 'next/image';
import { 
  Heart, 
  ShieldCheck, 
  Stethoscope, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight,
  Menu,
  X,
  Activity,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          <div className="flex items-center shrink-0 gap-3">
            <Image 
              src="/assets/aistudio/image_440e9c1d.png" 
              alt="Clínica Vida Icon" 
              width={60} 
              height={60} 
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tight text-slate-900">Clínica Vida</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-emerald-600 transition-colors whitespace-nowrap">Services</a>
            <a href="#insurance" className="hover:text-emerald-600 transition-colors whitespace-nowrap">Family Plans</a>
            <a href="#about" className="hover:text-emerald-600 transition-colors whitespace-nowrap">About Us</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors whitespace-nowrap">Contact</a>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <button className="hidden sm:block px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap">
              Book Appointment
            </button>
            <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-16 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-[11px] font-bold tracking-wider text-emerald-700 uppercase">Now Accepting New Patients</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] text-wrap-balance">
                Human-Centric Healthcare for your <span className="text-emerald-600">Whole Family</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Experience a new standard of medical excellence where technology meets empathy. At Clínica Vida, we prioritize your long-term well-being with personalized care plans and comprehensive health insurance for your loved ones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-emerald-200">
                  Join our Health Plan
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  View Our Services
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-200" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-bold text-slate-900">5,000+</span> Families trust us
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] bg-gradient-to-tr from-emerald-100 via-emerald-50 to-white border border-emerald-100 overflow-hidden relative shadow-2xl">
                {/* Fallback pattern as image generation failed */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-6 text-emerald-600">
                    <Heart className="w-12 h-12 fill-current" />
                  </div>
                  <h3 className="text-3xl font-bold text-emerald-900 mb-4">Life Begins with Care</h3>
                  <p className="text-emerald-800/60 max-w-xs">Our mission is to provide compassionate, high-quality medical services that enrich the lives of our community.</p>
                </div>
                
                {/* Decorative floating elements */}
                <div className="absolute top-12 -right-8 w-48 h-48 bg-white/40 backdrop-blur-xl rounded-full border border-white/50" />
                <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-emerald-200/30 backdrop-blur-xl rounded-full border border-emerald-200/50" />
                
                <div className="absolute bottom-12 right-12 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white max-w-[240px]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Expert Care</p>
                      <p className="text-sm font-medium text-slate-600">24/7 Specialist Support</p>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-emerald-50 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-emerald-500 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase mb-4">Our Specialities</h2>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <h3 className="text-4xl font-bold text-slate-900 max-w-xl">Comprehensive medical services tailored for modern families.</h3>
                <p className="text-slate-500 max-w-md pb-1">From routine checkups to specialized diagnostics, we offer a full spectrum of healthcare under one roof.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Primary Care */}
              <div className="md:col-span-2 group relative bg-emerald-50/30 border border-emerald-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-emerald-100/50 transition-all cursor-default overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Family Medicine</h4>
                  <p className="text-slate-600 max-w-md mb-8">Personalized healthcare for all ages. Our family practitioners build long-term relationships to manage your family&apos;s health journey from childhood to senior years.</p>
                  <ul className="grid grid-cols-2 gap-3 text-sm text-slate-500 mb-8">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Annual Checkups
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Vaccinations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Chronic Management
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Pediatrics
                    </li>
                  </ul>
                  <button className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/20 rounded-full -mr-20 -mt-20 blur-3xl" />
              </div>

              {/* Specialized Diagnostics */}
              <div className="group bg-white border border-slate-200 p-8 rounded-[2rem] hover:shadow-xl transition-all cursor-default">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Activity className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Diagnostics</h4>
                <p className="text-slate-600 mb-8">State-of-the-art imaging and laboratory services for precise and fast results.</p>
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">MRI & X-Ray</span>
                    <span className="font-bold text-emerald-600">Available</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Blood Tests</span>
                    <span className="font-bold text-emerald-600">Same-Day</span>
                  </div>
                </div>
              </div>

              {/* Cardiology */}
              <div className="group bg-white border border-slate-200 p-8 rounded-[2rem] hover:shadow-xl transition-all cursor-default">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Heart className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Cardiology</h4>
                <p className="text-slate-600">Heart health screening, ECG, and specialist consultations for cardiovascular well-being.</p>
              </div>

              {/* Emergency */}
              <div className="md:col-span-2 group relative bg-slate-900 p-10 rounded-[2rem] text-white overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6">
                      <Clock className="w-7 h-7" />
                    </div>
                    <h4 className="text-3xl font-bold mb-4">Urgent Care Center</h4>
                    <p className="text-slate-400 mb-8 leading-relaxed">Immediate attention for non-life-threatening emergencies. Open 7 days a week with minimal wait times compared to traditional ERs.</p>
                    <div className="flex gap-8">
                      <div>
                        <p className="text-2xl font-bold">15 min</p>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Avg. Wait Time</p>
                      </div>
                      <div className="w-px h-12 bg-white/10" />
                      <div>
                        <p className="text-2xl font-bold">24 / 7</p>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Online Support</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all shadow-lg shadow-black/20 active:scale-95">
                      Check Live Wait Times
                    </button>
                  </div>
                </div>
                {/* Decorative mesh */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Plans */}
        <section id="insurance" className="py-24 bg-emerald-600 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-200 uppercase mb-4">Insurance & Plans</h2>
                <h3 className="text-5xl font-bold mb-8 leading-tight">Secure your family&apos;s future with Vida Health Plans.</h3>
                <p className="text-xl text-emerald-50/80 mb-10 leading-relaxed">
                  We believe quality healthcare should be accessible. Our family insurance plans are designed to provide maximum coverage with minimum stress.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Vida Family Essential", desc: "Covers all routine checkups and common diagnostics for up to 4 family members." },
                    { title: "Vida Family Premium", desc: "Comprehensive coverage including specialist visits, maternity, and urgent care." },
                    { title: "Vida Senior Plus", desc: "Specialized geriatric care and long-term medication support." }
                  ].map((plan, idx) => (
                    <div key={idx} className="flex gap-6 p-6 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-sm">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-300">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">{plan.title}</h4>
                        <p className="text-emerald-100/60 text-sm leading-relaxed">{plan.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[3rem] p-10 text-slate-900 shadow-2xl">
                <h4 className="text-2xl font-bold mb-2">Request a Quote</h4>
                <p className="text-slate-500 mb-8">Get a personalized plan for your family in under 2 minutes.</p>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-400 uppercase">First Name</label>
                      <input type="text" placeholder="Jane" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-400 uppercase">Last Name</label>
                      <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase">Email Address</label>
                    <input type="email" placeholder="jane@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase">Family Size</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white">
                      <option>1-2 Members</option>
                      <option>3-4 Members</option>
                      <option>5+ Members</option>
                    </select>
                  </div>
                  <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-95 mt-4">
                    Calculate My Rate
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-4">
                    By clicking, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-1/2 -left-32 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 border border-slate-200 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-emerald-200/50 mix-blend-overlay" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-32 h-32 text-emerald-600 opacity-20 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-2xl font-bold italic">&quot;At Clínica Vida, we don&apos;t just treat symptoms; we treat people with stories, families with futures.&quot;</p>
                    <p className="text-emerald-300 font-bold mt-4">— Dr. Elena Rossi, Medical Director</p>
                  </div>
                </div>
                {/* Years of experience badge */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-emerald-50">
                  <span className="text-3xl font-bold text-emerald-600 leading-none">25+</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years</span>
                </div>
              </div>
              
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase mb-4">Our Story</h2>
                <h3 className="text-4xl font-bold text-slate-900 mb-8">A legacy of care built on trust and innovation.</h3>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Founded in 1998, Clínica Vida started with a simple vision: to create a healthcare environment where patients feel heard, valued, and respected. We believe the best medical outcomes happen when patients are partners in their own health.
                  </p>
                  <p>
                    Today, we are a leading multidisciplinary health center, serving thousands of families. We combine the latest medical technology with a deeply human approach, ensuring that every patient receives the best of both worlds.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div>
                    <p className="text-4xl font-bold text-slate-900">45+</p>
                    <p className="text-sm text-slate-500 uppercase tracking-widest mt-2">Board Specialists</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-slate-900">98%</p>
                    <p className="text-sm text-slate-500 uppercase tracking-widest mt-2">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Footer Info */}
        <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Our Location</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">123 Health Way, Medical District<br />Lisbon, Portugal 1200-001</p>
                  <button className="text-emerald-600 font-bold text-xs mt-3 hover:underline">Get Directions</button>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Contact Us</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Main Line: +351 21 000 0000<br />Emergency: +351 21 999 9999</p>
                  <button className="text-emerald-600 font-bold text-xs mt-3 hover:underline">Call Now</button>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Working Hours</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Mon - Fri: 08:00 - 22:00<br />Sat - Sun: 09:00 - 18:00</p>
                  <button className="text-emerald-600 font-bold text-xs mt-3 hover:underline">Schedule Visit</button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-slate-200">
              <div className="flex items-center gap-4">
                <Image 
                  src="/assets/aistudio/image_440e9c1d.png" 
                  alt="Clínica Vida Icon" 
                  width={40} 
                  height={40} 
                  className="h-8 w-auto grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
                <p className="text-xs text-slate-400">© 2026 Clínica Vida - Centro de Saúde. All rights reserved.</p>
              </div>
              
              <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
                <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
                <a href="#" className="hover:text-slate-600 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
