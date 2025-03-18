// src/components/sections/design/Energetic.jsx
import { useState, useEffect } from "react";

const EnergenticDesign = () => {
  const [bounceEffect, setBounceEffect] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animateTitle, setAnimateTitle] = useState(true);

  // Dog bed products with expanded details for this section
  const products = [
    {
      id: 1,
      category: "dog-bed",
      name: "Modern Minimalist Dog Bed",
      description:
        "Clean lines and premium materials blend seamlessly with your home decor.",
      features: [
        "Memory foam cushion",
        "Washable cover",
        "Non-slip bottom",
        "Available in 3 sizes",
      ],
      colors: ["#FF6B6B", "#FFD166", "#06D6A0", "#118AB2"],
      price: "$129.99",
      rating: 4.7,
      image: "/Dog-Bed.jpg",
    },
    {
      id: 2,
      category: "litter-box",
      name: "Cabinet Litter Box",
      description:
        "Elegant furniture piece that discreetly houses your cat's litter box.",
      features: [
        "Matches home decor",
        "Easy cleaning access",
        "Odor control system",
        "Ventilation holes",
      ],
      colors: ["#FF6B6B", "#FFD166", "#06D6A0"],
      price: "$249.99",
      rating: 4.9,
      image: "/Business-Cat-Litter.jpg",
    },
    {
      id: 3,
      category: "dog-bed",
      name: "Doggy Bone Pillow",
      description:
        "Durable, chew resistant, great for at home, camping and even travel.",
      features: [
        "Weather-resistant",
        "Portable design",
        "Machine Washable",
        "Reinforced stitching",
      ],
      colors: ["#FF6B6B", "#FFD166"],
      price: "$99.99",
      rating: 4.5,
      image: "/Business-Dog-Pillow.jpg",
    },
  ];

  // For bouncing animation effect on CTA button
  useEffect(() => {
    const interval = setInterval(() => {
      setBounceEffect(true);
      setTimeout(() => setBounceEffect(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // For color swapping animation in title
  useEffect(() => {
    if (!animateTitle) return;

    const interval = setInterval(() => {
      // This would shuffle colors in a real implementation
      setAnimateTitle((prev) => !prev);
      setTimeout(() => setAnimateTitle((prev) => !prev), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [animateTitle]);

  // Function to handle color selection
  const handleColorSelect = (productId, color) => {
    console.log(`Selected ${color} for product ${productId}`);
    // Would update product image/selection in a real implementation
  };

  return (
    <section
      className="py-16 px-6"
      style={{
        background: "linear-gradient(135deg, #FFC3E9 0%, #A9E9FF 100%)",
        fontFamily: "'Baloo 2', cursive",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-5xl font-bold mb-4 ${
              animateTitle ? "animate-pulse" : ""
            }`}
          >
            {/* Color-Swapping Title */}
            <span style={{ color: "#FF6B6B" }}>P</span>
            <span style={{ color: "#FFD166" }}>a</span>
            <span style={{ color: "#06D6A0" }}>w</span>
            <span style={{ color: "#118AB2" }}>s</span>
            <span style={{ color: "#073B4C" }}>o</span>
            <span style={{ color: "#FF6B6B" }}>m</span>
            <span style={{ color: "#FFD166" }}>e</span>
            <span> </span>
            <span style={{ color: "#06D6A0" }}>P</span>
            <span style={{ color: "#118AB2" }}>e</span>
            <span style={{ color: "#073B4C" }}>t</span>
            <span> </span>
            <span style={{ color: "#FF6B6B" }}>F</span>
            <span style={{ color: "#FFD166" }}>u</span>
            <span style={{ color: "#06D6A0" }}>r</span>
            <span style={{ color: "#118AB2" }}>n</span>
            <span style={{ color: "#073B4C" }}>i</span>
            <span style={{ color: "#FF6B6B" }}>t</span>
            <span style={{ color: "#FFD166" }}>u</span>
            <span style={{ color: "#06D6A0" }}>r</span>
            <span style={{ color: "#118AB2" }}>e</span>
            <span style={{ color: "#073B4C" }}>!</span>
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-yellow-400 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
              <span className="text-xl">🐾</span>
            </div>
            <p className="text-xl" style={{ color: "#5E17EB" }}>
              Fun designs that you and your furry friends will absolutely love!
            </p>
            <div className="w-10 h-10 bg-yellow-400 rounded-full ml-3 flex-shrink-0 flex items-center justify-center">
              <span className="text-xl">🐾</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span
              className="inline-block px-3 py-1 rounded-full text-white font-medium text-sm"
              style={{ backgroundColor: "#FF6B6B" }}
            >
              Super Comfy!
            </span>
            <span
              className="inline-block px-3 py-1 rounded-full text-white font-medium text-sm"
              style={{ backgroundColor: "#FFD166" }}
            >
              Stylish Design!
            </span>
            <span
              className="inline-block px-3 py-1 rounded-full text-white font-medium text-sm"
              style={{ backgroundColor: "#06D6A0" }}
            >
              Easy to Clean!
            </span>
            <span
              className="inline-block px-3 py-1 rounded-full text-white font-medium text-sm"
              style={{ backgroundColor: "#118AB2" }}
            >
              Pet Approved!
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`rounded-3xl overflow-hidden shadow-lg transition duration-300 ${
                hoveredCard === product.id ? "transform scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "white",
                border: "4px dashed #FFD166",
              }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-white rounded-full px-4 py-2 transform rotate-12 font-bold">
                  {product.price}
                </div>

                {/* Rating stars */}
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-xs font-medium text-gray-600">
                    {product.rating}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#06D6A0" }}
                >
                  {product.name}
                </h3>
                <p className="mb-4" style={{ color: "#073B4C" }}>
                  {product.description}
                </p>

                <div className="mb-4">
                  <p className="font-bold mb-2" style={{ color: "#FF6B6B" }}>
                    Choose a Color:
                  </p>
                  <div className="flex space-x-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => handleColorSelect(product.id, color)}
                        className="w-8 h-8 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-transform hover:scale-110"
                        style={{ backgroundColor: color }}
                        aria-label={`Select ${color} color`}
                      />
                    ))}
                  </div>
                </div>

                <ul className="mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <span className="mr-2 text-yellow-500">✩</span>
                      <span style={{ color: "#118AB2" }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-2">
                  <button
                    className="flex-1 py-3 rounded-full font-bold text-white transition-transform"
                    style={{
                      background: "linear-gradient(to right, #FF9E7D, #FF0069)",
                      boxShadow: "0 4px 10px rgba(255, 0, 105, 0.3)",
                      transform:
                        hoveredCard === product.id ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-transform"
                    style={{
                      background: "linear-gradient(to right, #FFD166, #FF9E7D)",
                      boxShadow: "0 4px 10px rgba(255, 209, 102, 0.3)",
                      transform:
                        hoveredCard === product.id ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Playful CTA Section */}
        <div className="text-center mt-16 relative">
          <div
            className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 -z-10 transform ${
              bounceEffect ? "scale-105 opacity-70" : "scale-100 opacity-50"
            } transition-all duration-500`}
            style={{ filter: "blur(25px)" }}
          />
          <div
            className="bg-white rounded-3xl p-8 shadow-xl border-4 border-dashed"
            style={{ borderColor: "#FFD166" }}
          >
            <h3
              className="text-3xl font-bold mb-4"
              style={{ color: "#FF6B6B" }}
            >
              Want to see more pawsome designs?
            </h3>
            <p className="mb-6 text-lg" style={{ color: "#118AB2" }}>
              Join our VIP Pet Club for exclusive designs, special discounts,
              and furry friend surprises!
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-l-full border-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  style={{ borderColor: "#06D6A0" }}
                />
                <button
                  className={`px-6 py-3 rounded-r-full font-bold text-white transition-transform ${
                    bounceEffect ? "animate-bounce" : ""
                  }`}
                  style={{
                    background: "linear-gradient(to right, #8A2BE2, #FF6B6B)",
                    boxShadow: "0 4px 15px rgba(138, 43, 226, 0.4)",
                  }}
                >
                  Join Now!
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pet Characters */}
        <div className="flex justify-between items-end mt-16">
          <div
            className="w-20 h-24 relative"
            style={{ transform: "scaleX(-1)" }}
          >
            <div
              className="absolute bottom-0 w-full h-20 rounded-t-full"
              style={{ backgroundColor: "#FFD166" }}
            />
            <div
              className="absolute bottom-14 left-3 w-14 h-10 rounded-t-full"
              style={{ backgroundColor: "#FFD166" }}
            />
            <div className="absolute bottom-16 left-5 w-4 h-4 rounded-full bg-black" />
            <div className="absolute bottom-16 right-5 w-4 h-4 rounded-full bg-black" />
            <div className="absolute bottom-12 left-8 w-4 h-2 rounded-full bg-black" />
          </div>

          <button
            className="px-8 py-4 rounded-full text-white text-xl font-bold"
            style={{
              background: "linear-gradient(to right, #8A2BE2, #FF6B6B)",
              boxShadow: "0 4px 15px rgba(138, 43, 226, 0.4)",
            }}
          >
            See More Designs!
          </button>

          <div className="w-20 h-24 relative">
            <div
              className="absolute bottom-0 w-full h-20 rounded-t-full"
              style={{ backgroundColor: "#FF9E7D" }}
            />
            <div
              className="absolute bottom-14 right-3 w-14 h-10 rounded-t-full"
              style={{ backgroundColor: "#FF9E7D" }}
            />
            <div className="absolute bottom-16 left-5 w-4 h-4 rounded-full bg-black" />
            <div className="absolute bottom-16 right-5 w-4 h-4 rounded-full bg-black" />
            <div className="absolute bottom-12 right-8 w-4 h-2 rounded-full bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergenticDesign;
