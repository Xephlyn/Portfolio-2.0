// src/components/sections/design/Business.jsx
import { useState, useEffect } from "react";

const BusinessDesign = () => {
  // State for tab interface
  const [activeTab, setActiveTab] = useState("overview");
  const [activeSize, setActiveSize] = useState("medium");
  const [activeMaterial, setActiveMaterial] = useState("standard");
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  // Product data
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
      sizes: [
        {
          id: "small",
          name: "Small",
          dimensions: '24" x 18" x 7"',
          weight: "4.2 lbs",
          price: "$99.99",
        },
        {
          id: "medium",
          name: "Medium",
          dimensions: '30" x 20" x 8"',
          weight: "5.6 lbs",
          price: "$129.99",
        },
        {
          id: "large",
          name: "Large",
          dimensions: '36" x 28" x 9"',
          weight: "7.8 lbs",
          price: "$159.99",
        },
      ],
      materials: [
        {
          id: "standard",
          name: "Standard Canvas",
          durability: "Medium",
          price: "Included",
        },
        {
          id: "premium",
          name: "Premium Microfiber",
          durability: "High",
          price: "+$30",
        },
        {
          id: "waterproof",
          name: "Waterproof Nylon",
          durability: "Very High",
          price: "+$45",
        },
      ],
      colors: ["#2B6CB0", "#805AD5", "#DD6B20", "#2F855A"],
      care: [
        "Remove cover and machine wash cold on gentle cycle",
        "Tumble dry on low heat",
        "Do not bleach or iron",
        "Spot clean foam insert with mild soap and water",
        "Allow to air dry completely before reassembling",
      ],
      price: "$129.99",
      rating: 4.7,
      reviewCount: 124,
      image: "/Business-Dog-Bed.jpg",
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
        "Built-in storage",
      ],
      sizes: [
        {
          id: "standard",
          name: "Standard",
          dimensions: '30" x 20" x 28"',
          weight: "24.5 lbs",
          price: "$249.99",
        },
        {
          id: "large",
          name: "Large",
          dimensions: '36" x 24" x 30"',
          weight: "32.8 lbs",
          price: "$299.99",
        },
      ],
      materials: [
        {
          id: "standard",
          name: "Engineered Wood",
          durability: "Medium",
          price: "Included",
        },
        {
          id: "premium",
          name: "Solid Wood",
          durability: "High",
          price: "+$75",
        },
        {
          id: "deluxe",
          name: "Deluxe Composite",
          durability: "Very High",
          price: "+$120",
        },
      ],
      colors: ["#2D3748", "#FFFFFF", "#B7791F", "#744210"],
      care: [
        "Wipe clean with a damp cloth",
        "Clean litter tray daily",
        "Replace carbon filter every 3 months",
        "Avoid placing in areas with high humidity",
        "Use furniture polish for wood finishes",
      ],
      price: "$249.99",
      rating: 4.5,
      reviewCount: 86,
      image: "/Business-Cat-Litter.jpg",
    },
  ];

  // Tabs configuration
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "materials", label: "Materials" },
    { id: "dimensions", label: "Dimensions" },
    { id: "care", label: "Care Instructions" },
    { id: "reviews", label: "Reviews" },
  ];

  // Accessories for both products
  const accessories = [
    {
      id: 1,
      name: "Dog Bone Pillows",
      price: "$49.99",
      image: "/Business-Dog-Pillow.jpg",
    },
    {
      id: 2,
      name: "Carbon Filters (8-pack)",
      price: "$19.99",
      image: "/Business-Cat-Filters(8Pk).jpg",
    },
    {
      id: 3,
      name: "Cooling Dog Blanket",
      price: "$29.99",
      image: "/Business-Dog-Blanket.jpg",
    },
    {
      id: 4,
      name: "Storage Bags",
      price: "$15.99",
      image: "/Dog-Bags.jpg",
    },
  ];

  // Show success message when adding to cart
  const handleAddToCart = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  // Increment/decrement quantity
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Get active product details based on selected options
  const getActiveProductDetails = () => {
    const product = products[0]; // Using first product for demo
    const size = product.sizes.find((s) => s.id === activeSize);
    const material = product.materials.find((m) => m.id === activeMaterial);

    return { product, size, material };
  };

  // Generate content based on active tab
  const renderTabContent = () => {
    const { product, size, material } = getActiveProductDetails();

    switch (activeTab) {
      case "overview":
        return (
          <div>
            <div className="mb-6 pb-6 border-b border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-medium text-gray-900">
                  Premium Pet Furniture
                </h3>
                <div className="flex items-center">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mr-2">
                    Bestsellers
                  </span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600">
                Our premium pet furniture combines modern design with
                exceptional comfort. Each piece is thoughtfully designed to
                enhance your home while providing your pets with the comfort
                they deserve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((item) => (
                <div key={item.id} className="flex">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded mr-4"
                  />
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-gray-900">
                        {item.name}
                      </h4>
                      <span className="text-blue-500 font-bold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm my-2">
                      {item.description}
                    </p>
                    <div className="mt-2">
                      <button className="text-blue-500 text-sm font-medium hover:text-blue-700 transition flex items-center">
                        View Details
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <h4 className="text-sm font-medium uppercase text-gray-500 mb-4">
                Compatible accessories
              </h4>
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {accessories.map((item) => (
                  <div key={item.id} className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gray-100 rounded-md mb-2 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-600">{item.name}</p>
                    <p className="text-xs font-medium text-blue-500">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "materials":
        return (
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Material Options
            </h3>
            <p className="text-gray-600 mb-6">
              We offer a variety of high-quality materials to suit your needs
              and preferences. Each material is carefully selected for
              durability, comfort, and aesthetics.
            </p>

            <div className="space-y-6">
              {product.materials.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 border rounded-md transition cursor-pointer ${
                    activeMaterial === item.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => setActiveMaterial(item.id)}
                >
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <span
                      className={
                        activeMaterial === item.id
                          ? "text-blue-500"
                          : "text-gray-500"
                      }
                    >
                      {item.price}
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span className="text-sm text-gray-500">
                      Durability: {item.durability}
                    </span>
                    {activeMaterial === item.id && (
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    Pet-Friendly Guarantee
                  </h4>
                  <p className="text-sm text-gray-600">
                    All our materials are non-toxic and safe for pets of all
                    sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "dimensions":
        return (
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Size Options
            </h3>
            <p className="text-gray-600 mb-6">
              Select the perfect size for your pet and your space. Measurements
              are listed as Length × Width × Height.
            </p>

            <div className="space-y-4">
              {product.sizes.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 border rounded-md transition cursor-pointer ${
                    activeSize === item.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => setActiveSize(item.id)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <span
                      className={
                        activeSize === item.id
                          ? "text-blue-500 font-medium"
                          : "text-gray-500"
                      }
                    >
                      {item.price}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500">
                    <div>
                      <span className="font-medium text-xs text-gray-400 block">
                        DIMENSIONS
                      </span>
                      {item.dimensions}
                    </div>
                    <div>
                      <span className="font-medium text-xs text-gray-400 block">
                        WEIGHT
                      </span>
                      {item.weight}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    Pet-Friendly Guarantee
                  </h4>
                  <p className="text-sm text-gray-600">
                    All our materials are non-toxic and safe for pets of all
                    sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "care":
        return (
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Care Instructions
            </h3>
            <p className="text-gray-600 mb-6">
              Proper care will extend the life of your pet furniture and keep it
              looking its best. Follow these guidelines for optimal results.
            </p>

            <div className="space-y-6">
              <div className="p-5 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Cleaning Tips
                </h4>
                <ul className="space-y-2">
                  {product.care.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">
                  Maintenance Schedule
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Wash removable cover</span>
                    <span className="text-gray-900 font-medium">
                      Every 2-4 weeks
                    </span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Replace air filter</span>
                    <span className="text-gray-900 font-medium">
                      Every 3 months
                    </span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-100">
                    <span className="text-gray-600">
                      Deep clean foam/padding
                    </span>
                    <span className="text-gray-900 font-medium">
                      Every 6 months
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Inspect for damage</span>
                    <span className="text-gray-900 font-medium">Monthly</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-yellow-50 p-4 rounded-md">
                <svg
                  className="w-6 h-6 text-yellow-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-gray-700">
                  For tough stains or extensive cleaning needs, we recommend our
                  professional cleaning service.
                </p>
              </div>
            </div>
          </div>
        );

      case "reviews":
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-medium text-gray-900">
                Customer Reviews
              </h3>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-700">4.7 out of 5</span>
                <span className="ml-2 text-gray-500 text-sm">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-5">
              {/* Sample reviews */}
              {[
                {
                  name: "Sarah Johnson",
                  date: "August 15, 2024",
                  rating: 5,
                  text: "My dog absolutely loves this bed! The memory foam provides excellent support for his joints, and the cover is super easy to remove and wash. It also looks great in our living room.",
                  avatar: "/api/placeholder/40/40",
                },
                {
                  name: "Michael Rodriguez",
                  date: "July 29, 2024",
                  rating: 4,
                  text: "Great quality construction and very stylish. My only complaint is that it took a while for the memory foam to fully expand after unpacking. Otherwise, perfect!",
                  avatar: "/api/placeholder/40/40",
                },
                {
                  name: "Emily Chen",
                  date: "July 14, 2024",
                  rating: 5,
                  text: "We've tried many dog beds before, but this one is by far the best. My senior dog has much less stiffness in the morning after sleeping on this bed. Worth every penny!",
                  avatar: "/api/placeholder/40/40",
                },
              ].map((review, index) => (
                <div key={index} className="border-b border-gray-200 pb-5">
                  <div className="flex items-center mb-2">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        {review.name}
                      </div>
                      <div className="text-gray-500 text-sm">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition">
                View All Reviews
              </button>
            </div>
          </div>
        );

      default:
        return <div>Tab content not found</div>;
    }
  };

  return (
    <section
      className="py-16 px-6 bg-gray-100"
      style={{
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
            PET COMFORT REIMAGINED
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Smart Pet Furniture Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Functional designs that prioritize both aesthetics and your
            pet&apos;s comfort
          </p>
        </div>

        {/* Product Customization Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            {/* Product Image and Summary */}
            <div className="p-6 bg-gray-50">
              <div className="sticky top-6">
                <img
                  src="/Business-Dog-Bed.jpg"
                  alt="Dog bed"
                  className="w-full h-auto rounded-md mb-6"
                />

                <div className="bg-white rounded-md p-5 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-medium text-gray-900">
                      Modern Minimalist Dog Bed
                    </h3>
                    <div className="text-blue-500 font-bold">$129.99</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Size:</span>
                      <span className="text-gray-900 font-medium">
                        {
                          products[0].sizes.find((s) => s.id === activeSize)
                            ?.name
                        }
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Material:</span>
                      <span className="text-gray-900 font-medium">
                        {
                          products[0].materials.find(
                            (m) => m.id === activeMaterial
                          )?.name
                        }
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Color:</span>
                      <div className="flex space-x-1">
                        {products[0].colors.map((color, index) => (
                          <div
                            key={index}
                            className={`w-4 h-4 rounded-full ${
                              index === 0
                                ? "ring-2 ring-blue-400 ring-offset-1"
                                : ""
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center border rounded-md">
                      <button
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                        onClick={decrementQuantity}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        className="w-10 h-8 text-center border-x text-gray-900"
                        value={quantity}
                        readOnly
                      />
                      <button
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                        onClick={incrementQuantity}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    <button
                      className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition font-medium"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
                  </div>

                  {/* Success message */}
                  {showMessage && (
                    <div className="mt-4 bg-green-50 border border-green-200 rounded-md p-3 flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="text-sm text-green-800">
                        Item added to your cart!{" "}
                        <a href="#" className="underline">
                          View cart
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tabbed Interface */}
            <div className="border-l border-gray-100">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200">
                <div className="flex overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`py-4 px-6 whitespace-nowrap transition ${
                        activeTab === tab.id
                          ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">{renderTabContent()}</div>
            </div>
          </div>
        </div>

        {/* Product Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              Crafted from the highest quality materials for maximum durability
              and comfort for your pets.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Designer Aesthetic
            </h3>
            <p className="text-gray-600">
              Stylish designs that complement your home décor while providing
              comfort for your pet.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              30-Day Guarantee
            </h3>
            <p className="text-gray-600">
              If your pet doesn&apos;t love it, return within 30 days for a full
              refund, no questions asked.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {[
              {
                question: "How do I choose the right size for my pet?",
                answer:
                  "Measure your pet while they're lying down from nose to tail for length, and from shoulder to shoulder for width. Add 6-8 inches to these measurements to ensure your pet has enough room to stretch out comfortably.",
              },
              {
                question: "Are the covers machine washable?",
                answer:
                  "Yes, all our covers are removable and machine washable. We recommend washing on a gentle cycle with cold water and air drying or tumble drying on low heat.",
              },
              {
                question: "How long does shipping take?",
                answer:
                  "Standard shipping takes 3-5 business days. Expedited shipping options are available at checkout for delivery within 1-2 business days.",
              },
              {
                question: "Can I customize the color or material?",
                answer:
                  "Yes, we offer customization options for most of our products. Contact our customer service team for more information on custom orders.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md overflow-hidden"
              >
                <div className="p-4 bg-gray-50 font-medium text-gray-900">
                  {faq.question}
                </div>
                <div className="p-4 text-gray-600">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Showcase */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Customer Showcases
            </h3>
            <p className="text-gray-600">
              See how our products look in real homes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg">
                <img
                  src={`/Dog-Gold.jpg`}
                  alt={`Customer showcase ${item}`}
                  className="w-full h-auto transition-transform hover:scale-105 duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white border border-blue-500 font-medium px-6 py-3 rounded transition">
            Explore All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessDesign;
