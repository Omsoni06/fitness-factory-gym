"use client";
import { FadeInUp, ScaleIn } from "./Animations";

export default function Pricing() {
  const regularPlans = [
    {
      name: "1 Month",
      price: "₹700",
      period: "/month",
      description: "Perfect for getting started",
      popular: false,
      savings: null,
      features: [
        "✅ Full gym access",
        "✅ All equipment included",
        "✅ Morning & Evening slots",
        "✅ Clean facilities",
        "✅ Basic guidance",
      ],
    },
    {
      name: "3 Months",
      price: "₹1,800",
      period: "/3 months",
      originalPrice: "₹2,100",
      description: "Most popular choice",
      popular: true,
      savings: "Save ₹300",
      features: [
        "✅ Everything in 1 Month",
        "💰 Save ₹300 total",
        "⭐ Priority booking",
        "📊 Workout guidance",
        "📈 Progress tracking",
      ],
    },
    {
      name: "6 Months",
      price: "₹3,200",
      period: "/6 months",
      originalPrice: "₹4,200",
      description: "Great value package",
      popular: false,
      savings: "Save ₹1,000",
      features: [
        "✅ Everything in 3 Months",
        "💰 Save ₹1,000 total",
        "👨‍⚕️ Personal consultation",
        "🥗 Diet recommendations",
        "🏆 Premium support",
      ],
    },
    {
      name: "12 Months",
      price: "₹5,500",
      period: "/year",
      originalPrice: "₹8,400",
      description: "Best value for money",
      popular: false,
      savings: "Save ₹2,900",
      features: [
        "✅ Everything included",
        "💰 Save ₹2,900 total",
        "🎯 Free PT sessions",
        "📋 Complete diet plan",
        "📞 24/7 support",
      ],
    },
  ];

  const personalTrainingPlans = [
    {
      name: "1 Month PT",
      price: "₹1,500",
      period: "/month",
      description: "One-on-one training",
      savings: null,
      features: [
        "👨‍🏫 Personal trainer sessions",
        "📋 Customized workout plan",
        "🥗 Diet consultation",
        "📊 Progress monitoring",
        "⏰ Flexible timing",
      ],
    },
    {
      name: "3 Months PT",
      price: "₹4,000",
      period: "/3 months",
      originalPrice: "₹4,500",
      description: "Intensive transformation",
      popular: true,
      savings: "Save ₹500",
      features: [
        "✅ Everything in 1 Month PT",
        "💰 Save ₹500 total",
        "🔬 Body composition analysis",
        "🥙 Nutritional guidance",
        "🎯 Result guarantee",
      ],
    },
    {
      name: "6 Months PT",
      price: "₹7,000",
      period: "/6 months",
      originalPrice: "₹9,000",
      description: "Complete transformation",
      savings: "Save ₹2,000",
      features: [
        "✅ Everything in 3 Months PT",
        "💰 Save ₹2,000 total",
        "🏋️‍♂️ Advanced training techniques",
        "💊 Supplement guidance",
        "🌟 Lifestyle coaching",
      ],
    },
    {
      name: "12 Months PT",
      price: "₹12,000",
      period: "/year",
      originalPrice: "₹18,000",
      description: "Ultimate fitness journey",
      savings: "Save ₹6,000",
      features: [
        "✅ Everything included",
        "💰 Save ₹6,000 total",
        "🏆 Competition preparation",
        "📊 Advanced nutrition plan",
        "♾️ Lifetime support",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="section-padding-lg bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile Optimized */}
        <FadeInUp>
          <div className="text-center mb-12 sm:mb-20">
            <span className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full font-bold text-sm sm:text-base shadow-xl mb-6 sm:mb-8">
              💰 Professional Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight">
              Choose Your <span className="text-blue-600">Fitness Plan</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              Transparent pricing for both men and women - professional fitness
              made affordable
            </p>
          </div>
        </FadeInUp>

        {/* Regular Workout Plans - Mobile Grid */}
        <div className="mb-20 sm:mb-32">
          <FadeInUp delay={0.2}>
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                🏋️ Regular Workout Plans
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-2">
                For Men & Women - Same Professional Rates
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
          </FadeInUp>

          {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {regularPlans.map((plan, index) => (
              <ScaleIn key={index} delay={index * 0.15}>
                <div
                  className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col ${
                    plan.popular
                      ? "border-blue-500 bg-gradient-to-br from-blue-50 via-white to-blue-50 shadow-blue-200"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 sm:-top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                      🔥 Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6 sm:mb-8">
                    <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
                      💪
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {plan.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 sm:mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="mb-4 sm:mb-6">
                      {plan.originalPrice && (
                        <div className="text-base sm:text-lg text-gray-400 line-through mb-1">
                          {plan.originalPrice}
                        </div>
                      )}
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">
                        {plan.price}
                      </div>
                      <div className="text-gray-600 text-sm font-medium">
                        {plan.period}
                      </div>
                      {plan.savings && (
                        <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mt-2">
                          {plan.savings}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-sm leading-relaxed"
                        >
                          <span className="mr-3 mt-0.5 flex-shrink-0">
                            {feature.substring(0, 2)}
                          </span>
                          <span className="text-gray-700">
                            {feature.substring(3)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-blue-300"
                        : "bg-gray-800 hover:bg-gray-900 text-white"
                    }`}
                  >
                    Join Now
                  </button>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>

        {/* Personal Training Plans - Mobile Optimized */}
        <div className="mb-12 sm:mb-20">
          <FadeInUp delay={0.4}>
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                👨‍🏫 Personal Training Plans
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-2">
                One-on-One Professional Coaching
              </p>
              <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {personalTrainingPlans.map((plan, index) => (
              <ScaleIn key={index} delay={index * 0.15 + 0.3}>
                <div
                  className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col ${
                    plan.popular
                      ? "border-green-500 bg-gradient-to-br from-green-50 via-white to-green-50 shadow-green-200"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 sm:-top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                      ⭐ Recommended
                    </div>
                  )}

                  <div className="text-center mb-6 sm:mb-8">
                    <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
                      🎯
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {plan.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 sm:mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="mb-4 sm:mb-6">
                      {plan.originalPrice && (
                        <div className="text-base sm:text-lg text-gray-400 line-through mb-1">
                          {plan.originalPrice}
                        </div>
                      )}
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-600 mb-1 sm:mb-2">
                        {plan.price}
                      </div>
                      <div className="text-gray-600 text-sm font-medium">
                        {plan.period}
                      </div>
                      {plan.savings && (
                        <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mt-2">
                          {plan.savings}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-sm leading-relaxed"
                        >
                          <span className="mr-3 mt-0.5 flex-shrink-0">
                            {feature.substring(0, 2)}
                          </span>
                          <span className="text-gray-700">
                            {feature.substring(3)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      plan.popular
                        ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-green-300"
                        : "bg-gray-800 hover:bg-gray-900 text-white"
                    }`}
                  >
                    Book Training
                  </button>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>

        {/* Special Offer Section - Mobile Optimized */}
        <FadeInUp delay={0.8}>
          <div className="text-center">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8">
                  🎉
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  Special Launch Offer!
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-95 leading-relaxed max-w-3xl mx-auto">
                  Get your first month at just{" "}
                  <span className="font-bold text-yellow-300 text-xl sm:text-2xl lg:text-3xl">
                    ₹500
                  </span>{" "}
                  for regular workout plans!
                </p>
                <div className="inline-block bg-yellow-400 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg mb-6 sm:mb-8">
                  🔥 Limited Time - Save ₹200
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
                  <a
                    href="tel:+919098300823"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    📞 Call Now - Book Today!
                  </a>
                  <a
                    href="https://wa.me/919098300823"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
