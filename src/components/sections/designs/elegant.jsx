import { useState, useEffect, useRef } from "react";

const ElegantDesign = () => {
  // States for interactive elements
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselItems, setCarouselItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("medium");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const carouselRef = useRef(null);

  // Product data for this section
  const products = [
    {
      id: 1,
      category: "dog-bed",
      name: "ROYAL CANINE LOUNGER",
      description:
        "Exquisite handcrafted dog bed with premium memory foam and designer upholstery.",
      features: [
        "Orthopedic support",
        "Removable velvet cover",
        "Solid wood accents",
        "Non-slip base",
      ],
      sizes: ["small", "medium", "large"],
      materials: ["Velvet", "Leather", "Linen"],
      price: "$349",
      image: "/Business-Dog-Bed.jpg",
    },
    {
      id: 2,
      category: "litter-box",
      name: "FELINE SANCTUM CABINET",
      description:
        "Sophisticated furniture piece that elegantly conceals your cat's litter box.",
      features: [
        "Seamless integration",
        "Activated carbon filter",
        "Silent-close door",
        "Interior lighting",
      ],
      sizes: ["standard", "deluxe"],
      materials: ["Oak", "Walnut", "Mahogany"],
      price: "$529",
      image: "/Business-Cat-Litter.jpg",
    },
  ];

  // Featured collection items
  useEffect(() => {
    // In a real app, this might come from an API
    setCarouselItems([
      {
        id: 1,
        name: "Artisan Pet Bed Collection",
        image: "/Elegant-Cat-Bed.jpg",
      },
      {
        id: 2,
        name: "Midnight Noir Series",
        image: "/Elegant-Dog-Bed.jpg",
      },
      {
        id: 3,
        name: "Gatsby Gold Collection",
        image: "/Dog-Gold.jpg",
      },
      {
        id: 4,
        name: "Modern Classic Edition",
        image: "/Cat-Castle.jpg",
      },
      { id: 5, name: "Royal Heritage Line", image: "/api/placeholder/600/400" },
    ]);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(
        (prev) => (prev + 1) % Math.ceil(carouselItems.length / 2)
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  // Helper functions
  const handlePrevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? Math.ceil(carouselItems.length / 2) - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % Math.ceil(carouselItems.length / 2));
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const getVisibleItems = () => {
    const items = [];
    const startIdx = activeSlide * 2;

    for (let i = 0; i < 2; i++) {
      const itemIdx = (startIdx + i) % carouselItems.length;
      items.push(carouselItems[itemIdx]);
    }

    return items;
  };

  return (
    <section
      className="py-20 px-6"
      style={{
        background: "black",
        fontFamily: "'Playfair Display', serif",
        color: "white",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div
            className="absolute w-40 h-40 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, rgba(0,0,0,0) 70%)",
              top: "-60px",
              left: "calc(50% - 120px)",
              filter: "blur(20px)",
            }}
          ></div>

          <h2 className="text-4xl font-bold mb-4" style={{ color: "white" }}>
            <span style={{ color: "#D4AF37" }}>LUXURY</span> PET FURNISHINGS
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{ background: "#D4AF37" }}
          ></div>
          <p
            className="text-lg mt-4 opacity-80"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Exquisite designs crafted for the discerning pet owner
          </p>
        </div>

        {/* Product Showcase with Interactive Elements */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => handleProductSelect(product)}
              style={{
                border:
                  selectedProduct?.id === product.id
                    ? "1px solid rgba(212, 175, 55, 0.8)"
                    : "1px solid rgba(212, 175, 55, 0.3)",
                background: "rgba(0, 0, 0, 0.6)",
                transition: "all 0.5s ease",
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition duration-700 group-hover:opacity-80"
                />

                {/* Product category label */}
                <div
                  className="absolute top-4 left-4 px-4 py-1"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.7)",
                    borderLeft: "2px solid #D4AF37",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "2px",
                      fontSize: "0.7rem",
                      color: "#D4AF37",
                    }}
                  >
                    {product.category === "dog-bed"
                      ? "CANINE COLLECTION"
                      : "FELINE COLLECTION"}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <button
                    className="px-6 py-2 bg-black bg-opacity-70 border border-gold"
                    style={{ color: "#D4AF37" }}
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold" style={{ color: "white" }}>
                    {product.name}
                  </h3>
                  <span
                    style={{
                      color: "#D4AF37",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {product.price}
                  </span>
                </div>

                <p
                  className="mb-6 opacity-80"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {product.description}
                </p>

                {/* Size Selection */}
                {product.sizes && (
                  <div className="mb-6">
                    <h4
                      className="text-sm mb-3"
                      style={{
                        color: "#D4AF37",
                        fontFamily: "'Montserrat', sans-serif",
                        letterSpacing: "2px",
                      }}
                    >
                      SIZE
                    </h4>
                    <div className="flex space-x-3">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          className={`px-4 py-2 text-xs uppercase transition duration-300 ${
                            selectedSize === size
                              ? "bg-gray-800"
                              : "bg-transparent"
                          }`}
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            border: `1px solid ${
                              selectedSize === size
                                ? "#D4AF37"
                                : "rgba(255,255,255,0.2)"
                            }`,
                            color: selectedSize === size ? "#D4AF37" : "white",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSize(size);
                          }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div
                  className="mb-8"
                  style={{
                    borderTop: "1px solid rgba(212, 175, 55, 0.3)",
                    paddingTop: "1rem",
                  }}
                >
                  <h4
                    className="text-sm mb-3"
                    style={{
                      color: "#D4AF37",
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "2px",
                    }}
                  >
                    FEATURES
                  </h4>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="mb-2 flex items-center"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 300,
                        }}
                      >
                        <span
                          className="mr-2 text-xs"
                          style={{ color: "#D4AF37" }}
                        >
                          ■
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <button
                    className="flex-1 py-3 text-black transition duration-300 hover:bg-black hover:text-gold hover:border-gold"
                    style={{
                      background: "#D4AF37",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    ADD TO COLLECTION
                  </button>
                  <button
                    className="w-12 aspect-square flex items-center justify-center border transition duration-300 hover:bg-gray-900"
                    style={{ borderColor: "rgba(212, 175, 55, 0.5)" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="#D4AF37"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Section */}
        <div className="mt-16 mb-10">
          <h3
            className="text-2xl mb-6 text-center"
            style={{ color: "#D4AF37" }}
          >
            FEATURED COLLECTIONS
          </h3>

          <div className="relative" ref={carouselRef}>
            {/* Carousel Container */}
            <div className="overflow-hidden">
              {/* Auto-rotating carousel */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 50}%)` }}
              >
                {/* All carousel slides */}
                {carouselItems.map((item) => (
                  <div key={item.id} className="w-1/2 px-3 flex-shrink-0">
                    <div className="aspect-video relative overflow-hidden group">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span
                          style={{
                            color: "#D4AF37",
                            fontFamily: "'Montserrat', sans-serif",
                            letterSpacing: "2px",
                          }}
                        >
                          VIEW COLLECTION
                        </span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h4
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          color: "#D4AF37",
                          letterSpacing: "1px",
                          fontSize: "0.9rem",
                        }}
                      >
                        {item.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="absolute top-1/2 left-3 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#D4AF37" }}
              aria-label="Previous slide"
              onClick={handlePrevSlide}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute top-1/2 right-3 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#D4AF37" }}
              aria-label="Next slide"
              onClick={handleNextSlide}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Carousel Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {[...Array(Math.ceil(carouselItems.length / 2))].map(
                (_, index) => (
                  <button
                    key={index}
                    className="w-3 h-3 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor:
                        index === activeSlide
                          ? "#D4AF37"
                          : "rgba(212, 175, 55, 0.3)",
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Promotional Video Section */}
        <div className="mt-24 mb-12 relative">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.2) 0%, rgba(0,0,0,0) 70%)",
              filter: "blur(40px)",
              zIndex: -1,
            }}
          ></div>

          <div className="text-center mb-10">
            <h3 className="text-2xl" style={{ color: "#D4AF37" }}>
              THE CRAFTMANSHIP
            </h3>
            <div
              className="w-16 h-0.5 mx-auto mt-2"
              style={{ background: "#D4AF37" }}
            ></div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="aspect-video bg-gray-900 relative overflow-hidden flex items-center justify-center">
              <img
                src="/api/placeholder/1200/675"
                alt="Craftsmanship video thumbnail"
                className="w-full h-full object-cover"
                style={{
                  opacity: isVideoPlaying ? 0 : 1,
                  transition: "opacity 0.5s ease",
                }}
              />

              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.7)",
                      border: "2px solid #D4AF37",
                    }}
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <svg
                      className="w-10 h-10"
                      fill="#D4AF37"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              )}

              {isVideoPlaying && (
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  <p
                    style={{
                      color: "#D4AF37",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    [Video would play here in a real implementation]
                  </p>
                </div>
              )}
            </div>

            <div
              className="mt-8 text-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p className="opacity-80 max-w-2xl mx-auto">
                Each piece in our collection is meticulously crafted by master
                artisans using only the finest materials. Experience the perfect
                blend of timeless elegance and modern pet comfort.
              </p>
            </div>
          </div>
        </div>

        {/* Designer Testimonial */}
        <div className="mt-20 mb-16 grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <img
              src="/api/placeholder/500/600"
              alt="Designer portrait"
              className="w-full h-auto"
              style={{ border: "1px solid rgba(212, 175, 55, 0.3)" }}
            />
          </div>
          <div
            className="md:col-span-3 pl-4"
            style={{ borderLeft: "1px solid rgba(212, 175, 55, 0.5)" }}
          >
            <svg
              className="w-12 h-12 mb-4 opacity-30"
              fill="#D4AF37"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p
              className="text-2xl italic mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our mission is to create pet furniture that honors both the
              architectural integrity of your home and the cherished
              relationship with your pet. Each piece tells a story of
              craftsmanship and care.
            </p>
            <div className="flex items-center">
              <div
                className="w-12 h-0.5 mr-4"
                style={{ background: "#D4AF37" }}
              ></div>
              <span
                style={{
                  color: "#D4AF37",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "2px",
                  fontSize: "0.8rem",
                }}
              >
                ALEXANDRA BLACKWOOD, CREATIVE DIRECTOR
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 pb-8">
          <button
            className="px-12 py-4 border-2 transition duration-300 hover:bg-white hover:text-black"
            style={{
              borderColor: "#D4AF37",
              color: "#D4AF37",
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "3px",
              fontWeight: "bold",
            }}
          >
            VIEW FULL CATALOG
          </button>

          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="#"
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <svg className="w-6 h-6" fill="#D4AF37" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <svg className="w-6 h-6" fill="#D4AF37" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a
              href="#"
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <svg className="w-6 h-6" fill="#D4AF37" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <svg className="w-6 h-6" fill="#D4AF37" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElegantDesign;
