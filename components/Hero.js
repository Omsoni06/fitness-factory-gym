"use client";
import { FadeInUp } from "./Animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg flex items-center justify-center relative min-h-screen"
    >
      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center text-white">
        {/* Hero Badge */}
        <FadeInUp>
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-black/60 backdrop-blur-sm rounded-full text-xs sm:text-sm md:text-base font-semibold shadow-xl bounce border border-white/30">
              💪 Professional Fitness Center
            </span>
          </div>
        </FadeInUp>

        {/* Main Heading - Mobile Optimized */}
        <FadeInUp delay={0.2}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block mb-1 sm:mb-2 drop-shadow-2xl">FITNESS</span>
            <span className="block text-green-400 drop-shadow-2xl">
              FACTORY
            </span>
          </h1>
        </FadeInUp>

        {/* Subheading - Mobile Optimized */}
        <FadeInUp delay={0.4}>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-gray-100 leading-relaxed px-2 sm:px-4 drop-shadow-lg">
            Transform your body at Barapathher's most trusted gym with
            professional equipment, certified trainers, and proven workout
            programs for both men and women
          </p>
        </FadeInUp>

        {/* Info Cards - Mobile Responsive Grid */}
        <FadeInUp delay={0.6}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-5xl mx-auto">
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">📍</div>
              <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 drop-shadow-sm">
                Prime Location
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm drop-shadow-sm">
                Barapathher's Most Accessible
              </p>
            </div>
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">⏰</div>
              <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 drop-shadow-sm">
                Flexible Hours
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm drop-shadow-sm">
                Morning: 8-11 AM
                <br />
                Evening: 6-9 PM
              </p>
            </div>
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">🏋️</div>
              <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 drop-shadow-sm">
                Professional Grade
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm drop-shadow-sm">
                Commercial Equipment & Clean Environment
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* CTA Buttons - Mobile Stack */}
        <FadeInUp delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center max-w-4xl mx-auto">
            <button
              onClick={() =>
                document
                  .getElementById("pricing")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/30"
            >
              🚀 Start Your Journey - ₹700/month
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("gym-tour")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/30"
            >
              📸 Virtual Gym Tour
            </button>

            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-center"
            >
              📞 Call for Free Trial
            </a>
          </div>
        </FadeInUp>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs mt-2 font-medium drop-shadow-sm">Scroll Down</p>
      </div>
    </section>
  );
}
