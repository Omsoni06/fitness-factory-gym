"use client";
import { FadeInUp, ScaleIn } from "./Animations";

export default function Contact() {
  return (
    <section id="contact" className="section-padding-lg bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile Optimized */}
        <FadeInUp>
          <div className="text-center mb-12 sm:mb-20">
            <span className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full font-bold text-sm sm:text-base shadow-xl mb-6 sm:mb-8">
              📞 Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Ready to <span className="text-green-400">Transform</span> Your
              Life?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
              Join Fitness Factory today and start your fitness journey with
              Barapathher's most professional gym
            </p>
          </div>
        </FadeInUp>

        {/* Contact Grid - Mobile Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 mb-12 sm:mb-20">
          {/* Contact Information */}
          <ScaleIn delay={0.2}>
            <div className="bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-700 h-full">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-10 text-blue-400 flex items-center">
                📍 Visit Our Gym
              </h3>

              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="text-3xl sm:text-4xl lg:text-5xl flex-shrink-0">
                    📍
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                      Prime Location
                    </h4>
                    <p className="text-gray-300 text-base sm:text-lg mb-1 sm:mb-2">
                      Barapathher
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Exact address shared after booking.
                      <br />
                      Easy access from main road.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="text-3xl sm:text-4xl lg:text-5xl flex-shrink-0">
                    ⏰
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                      Flexible Timing
                    </h4>
                    <div className="text-gray-300 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                        <span className="font-semibold text-sm sm:text-base">
                          Morning:
                        </span>
                        <span className="text-sm sm:text-base">
                          8:00 AM - 11:00 AM
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                        <span className="font-semibold text-sm sm:text-base">
                          Evening:
                        </span>
                        <span className="text-sm sm:text-base">
                          6:00 PM - 9:00 PM
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-3">
                      Open 7 days a week
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="text-3xl sm:text-4xl lg:text-5xl flex-shrink-0">
                    📞
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                      Contact Us
                    </h4>
                    <a
                      href="tel:+919098300823"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-base sm:text-lg shadow-lg"
                    >
                      📞 +91 98765 43210
                    </a>
                    <p className="text-sm text-gray-400 mt-3">
                      Call for free consultation & trial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>

          {/* Call-to-Action Section */}
          <ScaleIn delay={0.4}>
            <div className="bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-700 h-full">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-10 text-green-400 flex items-center">
                🚀 Get Started Today
              </h3>

              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <a
                  href="tel:+919098300823"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 sm:py-6 rounded-xl sm:rounded-2xl text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 text-center shadow-2xl"
                >
                  📞 Call Now for Free Trial
                </a>

                <a
                  href="https://wa.me/919098300823"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 sm:py-6 rounded-xl sm:rounded-2xl text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 text-center shadow-lg"
                >
                  💬 WhatsApp Us Directly
                </a>
              </div>

              {/* Free Consultation Highlight */}
              <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-500/30 mb-8 sm:mb-10">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-4">🎯</div>
                  <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-blue-400">
                    Free Consultation Worth ₹2000!
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Get personalized workout plan, diet chart, and body
                    assessment
                    <span className="text-green-400 font-bold block mt-2 text-base sm:text-lg">
                      Absolutely FREE with every membership!
                    </span>
                  </p>
                </div>
              </div>

              {/* Features Grid - Mobile Optimized */}
              <div>
                <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-orange-400 text-center">
                  Why Choose Fitness Factory?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center bg-gray-700 rounded-lg p-2 sm:p-3">
                    <span className="text-green-400 mr-2 sm:mr-3 text-lg sm:text-xl">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm font-medium">
                      Modern Equipment
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-700 rounded-lg p-2 sm:p-3">
                    <span className="text-green-400 mr-2 sm:mr-3 text-lg sm:text-xl">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm font-medium">
                      Expert Trainers
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-700 rounded-lg p-2 sm:p-3">
                    <span className="text-green-400 mr-2 sm:mr-3 text-lg sm:text-xl">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm font-medium">
                      Clean Environment
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-700 rounded-lg p-2 sm:p-3">
                    <span className="text-green-400 mr-2 sm:mr-3 text-lg sm:text-xl">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm font-medium">
                      Affordable Rates
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-700 rounded-lg p-2 sm:p-3">
                    <span className="text-green-400 mr-2 sm:mr-3 text-lg sm:text-xl">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm font-medium">
                      Both Boys & Girls
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-700 rounded-lg p-2 sm:p-3">
                    <span className="text-green-400 mr-2 sm:mr-3 text-lg sm:text-xl">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm font-medium">
                      Personal Training
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>

        {/* Success Stories & Social Proof - Mobile Optimized */}
        <FadeInUp delay={0.6}>
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12 text-blue-400">
              🏆 Join Our Success Stories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
                  💪
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-2 sm:mb-3">
                  50+
                </div>
                <p className="text-gray-300 font-medium text-sm sm:text-base">
                  Happy Members
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
                  And growing every month
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
                  🏋️
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-2 sm:mb-3">
                  100%
                </div>
                <p className="text-gray-300 font-medium text-sm sm:text-base">
                  Success Rate
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
                  Guaranteed results
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
                  ⭐
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-2 sm:mb-3">
                  5.0
                </div>
                <p className="text-gray-300 font-medium text-sm sm:text-base">
                  Rating
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
                  From all members
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
