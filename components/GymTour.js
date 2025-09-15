"use client";
import { useState, useEffect } from "react";
import { FadeInUp, ScaleIn } from "./Animations";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

export default function GymTour() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Prevent browser back button issues with lightbox
  useEffect(() => {
    const handlePopState = (event) => {
      if (lightboxOpen) {
        event.preventDefault();
        setLightboxOpen(false);
        window.history.pushState(null, "", window.location.href);
      }
    };

    if (lightboxOpen) {
      window.history.pushState({ lightbox: true }, "", window.location.href);
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [lightboxOpen]);

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && lightboxOpen) {
        closeLightbox();
      }
    };

    if (lightboxOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  const gymMedia = [
    // Gym Equipment Photos - Using Picsum for reliable images
    {
      id: 1,
      type: "image",
      category: "equipment",
      title: "Modern Cardio Equipment",
      description: "Latest treadmills, ellipticals and stationary bikes",
      image: "https://picsum.photos/800/600?random=1",
      thumbnail: "https://picsum.photos/400/300?random=1",
    },
    {
      id: 2,
      type: "image",
      category: "equipment",
      title: "Strength Training Zone",
      description: "Complete free weights and machine section",
      image: "https://picsum.photos/800/600?random=2",
      thumbnail: "https://picsum.photos/400/300?random=2",
    },
    {
      id: 3,
      type: "image",
      category: "equipment",
      title: "Cable Machine Area",
      description: "Multi-station cable machines for all muscle groups",
      image: "https://picsum.photos/800/600?random=3",
      thumbnail: "https://picsum.photos/400/300?random=3",
    },

    // Gym Interior Photos
    {
      id: 4,
      type: "image",
      category: "interior",
      title: "Spacious Workout Floor",
      description: "Clean, well-lit and ventilated workout space",
      image: "https://picsum.photos/800/600?random=4",
      thumbnail: "https://picsum.photos/400/300?random=4",
    },
    {
      id: 5,
      type: "image",
      category: "interior",
      title: "Reception & Lounge Area",
      description: "Welcome area with comfortable seating",
      image: "https://picsum.photos/800/600?random=5",
      thumbnail: "https://picsum.photos/400/300?random=5",
    },
    {
      id: 6,
      type: "image",
      category: "interior",
      title: "Changing Rooms",
      description: "Clean and hygienic changing facilities",
      image: "https://picsum.photos/800/600?random=6",
      thumbnail: "https://picsum.photos/400/300?random=6",
    },

    // Trainer Photos
    {
      id: 7,
      type: "image",
      category: "trainers",
      title: "Head Trainer - Rohit Sharma",
      description: "8+ years experience, Certified Personal Trainer",
      image: "https://picsum.photos/800/600?random=7",
      thumbnail: "https://picsum.photos/400/300?random=7",
    },
    {
      id: 8,
      type: "image",
      category: "trainers",
      title: "Fitness Coach - Priya Singh",
      description: "Specializes in women's fitness and yoga",
      image: "https://picsum.photos/800/600?random=8",
      thumbnail: "https://picsum.photos/400/300?random=8",
    },

    // Video Content
    {
      id: 9,
      type: "video",
      category: "tour",
      title: "Complete Gym Tour",
      description: "360° walkthrough of our facilities",
      videoId: "ScMzIvxBSi4", // YouTube video ID
      thumbnail: "https://picsum.photos/400/300?random=9",
    },
    {
      id: 10,
      type: "video",
      category: "workouts",
      title: "Morning Workout Session",
      description: "See our members in action during peak hours",
      videoId: "ScMzIvxBSi4", // YouTube video ID
      thumbnail: "https://picsum.photos/400/300?random=10",
    },
  ];

  const categories = [
    { id: "all", name: "All", icon: "🏠" },
    { id: "equipment", name: "Equipment", icon: "🏋️‍♂️" },
    { id: "interior", name: "Interior", icon: "🏢" },
    { id: "trainers", name: "Trainers", icon: "👨‍🏫" },
    { id: "tour", name: "Virtual Tour", icon: "🎥" },
    { id: "workouts", name: "Live Workouts", icon: "💪" },
  ];

  const filteredMedia =
    selectedCategory === "all"
      ? gymMedia
      : gymMedia.filter((item) => item.category === selectedCategory);

  const openLightbox = (index) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    if (window.history.state?.lightbox) {
      window.history.back();
    }
  };

  const openVideoModal = (videoId) => {
    setIsModalOpen(true);
  };

  const navigateImage = (direction) => {
    if (direction === "prev" && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    } else if (
      direction === "next" &&
      selectedImage < filteredMedia.length - 1
    ) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <section className="section-padding-lg bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <FadeInUp>
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-bold text-base shadow-xl mb-8">
              📸 Professional Gym Tour
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              Explore Our{" "}
              <span className="text-blue-600">Premium Facilities</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Take a virtual tour of Fitness Factory and see our professional
              equipment, clean facilities, and certified trainers
            </p>
          </div>
        </FadeInUp>

        {/* Category Filter */}
        <FadeInUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMedia.map((item, index) => (
            <ScaleIn key={item.id} delay={index * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  {item.type === "image" ? (
                    <div className="relative">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          // Fallback to a solid color background if image fails to load
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 hidden items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🏋️‍♂️</div>
                          <p className="text-gray-600 font-medium">Gym Image</p>
                        </div>
                      </div>
                      <button
                        onClick={() => openLightbox(index)}
                        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center group"
                      >
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white rounded-full p-3">
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM12 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM12 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback for videos */}
                      <div className="w-full h-64 bg-gradient-to-br from-red-100 to-red-200 hidden items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🎥</div>
                          <p className="text-gray-600 font-medium">
                            Video Content
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => openVideoModal(item.videoId)}
                        className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center group"
                      >
                        <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                          <svg
                            className="w-8 h-8 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </button>
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        VIDEO
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {item.category === "trainers" && (
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 font-medium">
                        Expert Trainer
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>

        {/* If no images are showing, display this message */}
        {filteredMedia.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏋️‍♂️</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Coming Soon!
            </h3>
            <p className="text-gray-600">
              Gym tour images will be added soon. Call us for a live tour!
            </p>
            <a
              href="tel:+919876543210"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
            >
              📞 Call for Live Tour
            </a>
          </div>
        )}

        {/* CTA Section */}
        <FadeInUp delay={0.6}>
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-2xl border border-gray-200">
              <div className="text-5xl mb-6">🏃‍♂️</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Experience It Yourself?
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Book a free trial session and see why Fitness Factory is
                Barapathher's most trusted fitness center
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <a
                  href="tel:+919876543210"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  📞 Book Free Trial Now
                </a>
                <a
                  href="https://wa.me/919876543210"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Video Modal */}
        <ModalVideo
          channel="youtube"
          isOpen={isModalOpen}
          videoId="ScMzIvxBSi4"
          onClose={() => setIsModalOpen(false)}
        />

        {/* Fixed Image Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="Close"
              >
                ✕
              </button>

              {/* Main Image */}
              <img
                src={filteredMedia[selectedImage]?.image}
                alt={filteredMedia[selectedImage]?.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00MDAgMjgwQzQwOCAyODAgNDE1LjE2MyAyODMuMjYxIDQyMC4yNDQgMjg4LjMzNUM0MjUuMzI1IDI5My40MSA0MjguNTcxIDMwMC41NzEgNDI4LjU3MSAzMDhDNDI4LjU3MSAzMTUuNDI5IDQyNS4zMjUgMzIyLjU5IDQyMC4yNDQgMzI3LjY2NUM0MTUuMTYzIDMzMi43MzkgNDA4IDMzNiA0MDAgMzM2QzM5MiAzMzYgMzg0LjgzNyAzMzIuNzM5IDM3OS43NTYgMzI3LjY2NUMzNzQuNjc1IDMyMi41OSAzNzEuNDI5IDMxNS40MjkgMzcxLjQyOSAzMDhDMzcxLjQyOSAzMDAuNTcxIDM3NC42NzUgMjkzLjQxIDM3OS43NTYgMjg4LjMzNUMzODQuODM3IDI4My4yNjEgMzkyIDI4MCA0MDAgMjgwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";
                }}
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white p-6 rounded-b-lg">
                <h3 className="text-xl font-bold mb-2">
                  {filteredMedia[selectedImage]?.title}
                </h3>
                <p className="text-gray-300">
                  {filteredMedia[selectedImage]?.description}
                </p>
                <div className="mt-3 text-sm text-gray-400">
                  Image {selectedImage + 1} of {filteredMedia.length}
                </div>
              </div>

              {/* Navigation Arrows */}
              {selectedImage > 0 && (
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:bg-opacity-70"
                  aria-label="Previous image"
                >
                  ←
                </button>
              )}
              {selectedImage < filteredMedia.length - 1 && (
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:bg-opacity-70"
                  aria-label="Next image"
                >
                  →
                </button>
              )}

              {/* Keyboard Hint */}
              <div className="absolute top-4 left-4 text-white text-sm bg-black bg-opacity-50 rounded-lg px-3 py-2">
                Press{" "}
                <kbd className="bg-white text-black px-1 rounded">ESC</kbd> to
                close
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
