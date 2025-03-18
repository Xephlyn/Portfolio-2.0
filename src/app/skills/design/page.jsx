"use client";
import Head from "next/head";
import { useState } from "react";
import EnergenticDesign from "../../../components/sections/designs/energetic";
import ElegantDesign from "../../../components/sections/designs/elegant";
import BusinessDesign from "../../../components/sections/designs/business";

export default function page() {
  const [activeDesign, setActiveDesign] = useState("all");

  return (
    <div className="mt-20">
      <Head>
        <title>PetStyle Design Concepts</title>
        <meta
          name="description"
          content="Custom pet furniture with different design styles"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Fonts imports for different typography styles */}
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;800&family=Playfair+Display:wght@400;700;900&family=Montserrat:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        {/* Introduction Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900 dark:text-white">
          <div className="container mx-auto max-w-5xl">
            {/* Header with geometric accent */}
            <div className="relative mb-16">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 rotate-45 bg-purple-200 dark:bg-purple-800 rounded-lg opacity-70"></div>
              <div className="absolute -top-6 left-1/4 transform -translate-x-1/2 w-16 h-16 rotate-12 bg-blue-200 dark:bg-blue-800 rounded-full opacity-50"></div>
              <div className="absolute -top-10 right-1/4 transform translate-x-1/2 w-20 h-20 -rotate-12 bg-pink-200 dark:bg-pink-900 rounded-lg opacity-40"></div>

              <h1 className="text-5xl font-bold text-center relative z-10 mb-2 dark:text-white text-black">
                Why Design{" "}
                <span className="italic text-purple-600 dark:text-purple-400">
                  Matters
                </span>
              </h1>
              <h2 className="text-3xl text-center font-light relative z-10 dark:text-gray-300 text-gray-700">
                for Your Business
              </h2>
              <div className="w-32 h-1 bg-purple-500 dark:bg-purple-400 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Main content with stylized layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="col-span-2 transform -rotate-1">
                <div className="border-l-4 border-pink-400 dark:border-pink-500 pl-6 py-2">
                  <p className="text-xl leading-relaxed mb-6 dark:text-gray-200 text-gray-800">
                    In today&apos;s digital world, your website is often the
                    first impression potential customers have of your business.
                    Even if you sell high-quality products, a poorly designed or
                    outdated site can turn customers away before they ever see
                    what you offer.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform rotate-1 flex items-center justify-center">
                <p className="text-2xl font-bold text-center text-purple-600 dark:text-purple-400 italic">
                  "Design is not just what it looks like. Design is how it
                  works."
                </p>
              </div>

              <div className="col-span-3">
                <div className="relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-yellow-300 dark:bg-yellow-600 rounded-full opacity-70"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-pink-300 dark:bg-pink-700 rounded-full opacity-70"></div>
                  <p className="text-xl leading-relaxed px-16 text-center italic font-medium mb-12 dark:text-white text-gray-800">
                    A strong design isn&apos;t just about looks—it sets the tone
                    for your brand, builds trust, and influences purchasing
                    decisions.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-tr-3xl rounded-bl-3xl col-span-3 transform -rotate-1 shadow-inner">
                <p className="text-xl leading-relaxed dark:text-gray-200 text-gray-700">
                  For a business like custom homemade pet furniture, design can
                  reflect craftsmanship, warmth, and personality. A sleek,
                  modern layout might appeal to high-end buyers, while a cozy,
                  rustic theme could resonate with pet lovers looking for
                  handmade charm.
                </p>
                <p className="text-xl leading-relaxed mt-6 dark:text-gray-200 text-gray-700">
                  The right design speaks directly to your audience, shaping how
                  they perceive your brand and ultimately impacting sales.
                </p>
              </div>

              <div className="col-span-3 my-10 relative">
                <div className="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rotate-45 border-4 border-purple-300 dark:border-purple-700 rounded-lg"></div>
                <div className="absolute top-0 right-2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rotate-45 border-4 border-purple-300 dark:border-purple-700 rounded-lg"></div>
                <h2 className="text-3xl font-bold text-center mb-6 dark:text-white text-black">
                  Three{" "}
                  <span className="underline decoration-wavy decoration-green-400 dark:decoration-green-500">
                    Distinct
                  </span>{" "}
                  Concepts
                </h2>
                <p className="text-xl leading-relaxed text-center max-w-3xl mx-auto dark:text-gray-300 text-gray-700">
                  Below, you&apos;ll find three distinct website concepts for
                  the same business and products, each showcasing a different
                  brand identity. This demonstrates how design can shift the
                  entire feel of a business, proving that thoughtful web design
                  is a powerful tool for branding and success.
                </p>
              </div>
            </div>

            {/* Theme showcase with dynamic layout */}
            <div className="mb-16">
              <div className="grid grid-cols-1 gap-6">
                <div className="w-full h-2 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 rounded-full"></div>
                <div className="py-6">
                  <h2 className="text-3xl font-bold text-center dark:text-white text-black">
                    Themes showcased include:
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Energetic theme card */}
                  <div className="relative overflow-hidden group h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative h-full bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg p-6 transform transition duration-300 group-hover:-translate-y-1">
                      <div className="h-3 bg-pink-400 dark:bg-pink-500 absolute -top-1 left-0 right-0 rounded-t-lg"></div>
                      <h3 className="font-bold text-xl mb-3 text-pink-600 dark:text-pink-400 mt-3">
                        Energetic
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Fun, playful, and colorful design with interactive
                        elements.
                      </p>
                      <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-pink-200 dark:bg-pink-900 rounded-tl-2xl z-0 opacity-50"></div>
                    </div>
                  </div>

                  {/* Elegant theme card */}
                  <div className="relative overflow-hidden group h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative h-full bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg p-6 transform transition duration-300 group-hover:-translate-y-1">
                      <div className="h-3 bg-yellow-500 absolute -top-1 left-0 right-0 rounded-t-lg"></div>
                      <h3 className="font-bold text-xl mb-3 text-yellow-600 dark:text-yellow-400 mt-3">
                        Elegant
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Sophisticated, luxury-focused design with premium
                        aesthetics.
                      </p>
                      <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-yellow-200 dark:bg-yellow-900 rounded-tl-2xl z-0 opacity-50"></div>
                    </div>
                  </div>

                  {/* Business theme card */}
                  <div className="relative overflow-hidden group h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative h-full bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg p-6 transform transition duration-300 group-hover:-translate-y-1">
                      <div className="h-3 bg-blue-500 absolute -top-1 left-0 right-0 rounded-t-lg"></div>
                      <h3 className="font-bold text-xl mb-3 text-blue-600 dark:text-blue-400 mt-3">
                        Business
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Professional, information-rich design with functional
                        focus.
                      </p>
                      <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-blue-200 dark:bg-blue-900 rounded-tl-2xl z-0 opacity-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA section */}
            <div className="relative mt-20">
              <div className="absolute inset-0 bg-purple-100 dark:bg-purple-900/30 rounded-2xl transform -rotate-1"></div>
              <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-2xl transform rotate-1 scale-95"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-10 shadow-xl">
                <div className="flex justify-center mb-8">
                  <div className="h-1 w-16 bg-pink-400 dark:bg-pink-500 rounded-full mx-1"></div>
                  <div className="h-1 w-16 bg-yellow-400 dark:bg-yellow-500 rounded-full mx-1"></div>
                  <div className="h-1 w-16 bg-blue-400 dark:bg-blue-500 rounded-full mx-1"></div>
                </div>

                <h2 className="text-4xl font-bold text-center mb-6 dark:text-white text-black">
                  How I can Help{" "}
                  <span className="text-purple-600 dark:text-purple-400">
                    bring your brand
                  </span>{" "}
                  to the digital space?
                </h2>

                <p className="text-xl text-center leading-relaxed max-w-3xl mx-auto dark:text-gray-300 text-gray-700">
                  A strong online presence starts with thoughtful, intentional
                  design. I specialize in creating websites that don&apos;t just
                  look good — they tell your brand&apos;s story, connect with
                  your audience, and drive results. By blending creativity with
                  strategy, I help bring your business to life in the digital
                  space, building a site that reflects your vision and sets you
                  apart from the competition.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-200">
          <div className="container mx-auto px-6 py-4 ">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center">
                <div className="text-xl font-bold text-black">
                  Choose your Design
                </div>
              </div>

              <nav className="flex mt-4 lg:mt-0">
                <div className="flex items-center space-x-4 text-black">
                  <button
                    className={`px-4 py-2 rounded-md transition ${
                      activeDesign === "all"
                        ? "bg-blue-600 text-black"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveDesign("all")}
                  >
                    All Designs
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md transition ${
                      activeDesign === "energetic"
                        ? "bg-pink-500 text-black"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveDesign("energetic")}
                  >
                    Energetic
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md transition ${
                      activeDesign === "elegant"
                        ? "bg-black text-gold"
                        : "hover:bg-gray-100"
                    }`}
                    style={{
                      color: activeDesign === "elegant" ? "#D4AF37" : "inherit",
                    }}
                    onClick={() => setActiveDesign("elegant")}
                  >
                    Elegant
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md transition ${
                      activeDesign === "business"
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveDesign("business")}
                  >
                    Business
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </section>

        {/* Design Sections */}
        {(activeDesign === "all" || activeDesign === "energetic") && (
          <EnergenticDesign />
        )}

        {(activeDesign === "all" || activeDesign === "elegant") && (
          <ElegantDesign />
        )}

        {(activeDesign === "all" || activeDesign === "business") && (
          <BusinessDesign />
        )}

        {/* Comparison Section - Only visible when all designs are shown */}
        {activeDesign === "all" && (
          <section className="py-16 px-6 bg-white dark:bg-gray-900">
            <div className="container mx-auto text-black dark:text-white">
              {/* Header with gradient bar similar to previous section */}
              <div className="grid grid-cols-1 gap-6 mb-10">
                {/* Gradient bar as a full row */}
                <div className="w-full h-2 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 rounded-full"></div>

                {/* Title in its own row */}
                <div className="py-6 relative">
                  <div className="absolute -top-6 left-1/4 transform -translate-x-1/2 w-16 h-16 rotate-12 bg-blue-200 dark:bg-blue-800 rounded-full opacity-30"></div>
                  <div className="absolute -top-10 right-1/4 transform translate-x-1/2 w-20 h-20 -rotate-12 bg-pink-200 dark:bg-pink-900 rounded-lg opacity-20"></div>

                  <h2 className="text-3xl font-bold text-center mb-2 relative z-10 dark:text-white text-black">
                    Design{" "}
                    <span className="italic text-purple-600 dark:text-purple-400">
                      Approach
                    </span>{" "}
                    Comparison
                  </h2>
                  <div className="w-32 h-1 bg-purple-500 dark:bg-purple-400 mx-auto mt-4 rounded-full"></div>
                </div>
              </div>

              {/* Table container with styling */}
              <div className="relative overflow-hidden rounded-xl">
                {/* Background design elements */}
                <div className="absolute -top-8 -left-8 w-24 h-24 rotate-45 bg-yellow-200 dark:bg-yellow-900 rounded-lg opacity-20"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 rotate-12 bg-blue-200 dark:bg-blue-900 rounded-lg opacity-20"></div>

                <div className="relative overflow-x-auto rounded-xl shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="py-4 px-6 text-left font-bold text-gray-800 dark:text-gray-200 border-b dark:border-gray-700">
                          Feature
                        </th>
                        <th className="py-4 px-6 text-center font-bold text-pink-600 dark:text-pink-400 border-b dark:border-gray-700">
                          <div className="flex flex-col items-center">
                            <span>Energetic</span>
                            <div className="h-1 w-12 bg-pink-400 rounded-full mt-1"></div>
                          </div>
                        </th>
                        <th className="py-4 px-6 text-center font-bold text-yellow-600 dark:text-yellow-400 border-b dark:border-gray-700">
                          <div className="flex flex-col items-center">
                            <span>Elegant</span>
                            <div className="h-1 w-12 bg-yellow-500 rounded-full mt-1"></div>
                          </div>
                        </th>
                        <th className="py-4 px-6 text-center font-bold text-blue-600 dark:text-blue-400 border-b dark:border-gray-700">
                          <div className="flex flex-col items-center">
                            <span>Business</span>
                            <div className="h-1 w-12 bg-blue-500 rounded-full mt-1"></div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                        <td className="py-4 px-6 font-medium text-gray-900 dark:text-gray-100">
                          Color Palette
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <span className="inline-flex items-center bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full">
                            Vibrant & Colorful
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <span className="inline-flex items-center bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full">
                            Black, White & Gold
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                            Professional Blues
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                        <td className="py-4 px-6 font-medium text-gray-900 dark:text-gray-100">
                          Typography
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <span
                            className="font-medium"
                            style={{
                              fontFamily:
                                "system-ui, -apple-system, sans-serif",
                            }}
                          >
                            Playful, Rounded
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <span className="font-medium italic">
                            Serif, Elegant
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <span
                            className="font-medium"
                            style={{ fontFamily: "Arial, sans-serif" }}
                          >
                            Clean, Sans-serif
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                        <td className="py-4 px-6 font-medium text-gray-900 dark:text-gray-100">
                          Layout Style
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <div className="flex justify-center space-x-1">
                            <div className="w-2 h-2 bg-pink-400 dark:bg-pink-500 rounded-full"></div>
                            <div className="w-2 h-4 bg-purple-400 dark:bg-purple-500 rounded-full"></div>
                            <div className="w-2 h-3 bg-pink-400 dark:bg-pink-500 rounded-full"></div>
                          </div>
                          <span>Dynamic, Organic</span>
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <div className="flex justify-center space-x-3">
                            <div className="w-2 h-3 bg-yellow-500 rounded-sm"></div>
                            <div className="w-2 h-3 bg-yellow-500 rounded-sm"></div>
                            <div className="w-2 h-3 bg-yellow-500 rounded-sm"></div>
                          </div>
                          <span>Spacious, Balanced</span>
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <div className="flex justify-center">
                            <div className="grid grid-cols-2 gap-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-none"></div>
                              <div className="w-2 h-2 bg-blue-500 rounded-none"></div>
                              <div className="w-2 h-2 bg-blue-500 rounded-none"></div>
                              <div className="w-2 h-2 bg-blue-500 rounded-none"></div>
                            </div>
                          </div>
                          <span>Structured, Tabbed</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                        <td className="py-4 px-6 font-medium text-gray-900 dark:text-gray-100">
                          Target Audience
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <span className="relative inline-block px-3 py-1">
                            <span className="relative z-10">
                              Young, Playful
                            </span>
                            <span className="absolute inset-0 transform -rotate-2 bg-pink-100 dark:bg-pink-900/30 rounded"></span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <span className="relative inline-block px-3 py-1">
                            <span className="relative z-10">
                              Luxury, Sophisticated
                            </span>
                            <span className="absolute inset-0 transform rotate-1 bg-yellow-100 dark:bg-yellow-900/30 rounded"></span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <span className="relative inline-block px-3 py-1">
                            <span className="relative z-10">
                              Practical, Information-driven
                            </span>
                            <span className="absolute inset-0 transform -rotate-1 bg-blue-100 dark:bg-blue-900/30 rounded"></span>
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                        <td className="py-4 px-6 font-medium text-gray-900 dark:text-gray-100">
                          Interactive Elements
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <div className="flex justify-center">
                            <span className="inline-flex items-center gap-1">
                              <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                              <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                              <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                              <span>High</span>
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <div className="flex justify-center">
                            <span className="inline-flex items-center gap-1">
                              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                              <span className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                              <span>Medium</span>
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <div className="flex justify-center">
                            <span className="inline-flex items-center gap-1">
                              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                              <span>High</span>
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom decorative element */}
              <div className="flex justify-center mt-8">
                <div className="h-1 w-12 bg-pink-400 dark:bg-pink-500 rounded-full mx-1"></div>
                <div className="h-1 w-12 bg-yellow-400 dark:bg-yellow-500 rounded-full mx-1"></div>
                <div className="h-1 w-12 bg-blue-400 dark:bg-blue-500 rounded-full mx-1"></div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-white dark:bg-gray-800 text-black dark:text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Design your brand</h3>
              <p className="text-black dark:text-gray-300">
                Lets explore different design approaches for your web presences
                and more.
              </p>
              <div />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-black dark:text-gray-300">
                Have questions about our design approaches?
                <br />
                <a
                  href="/contact"
                  className="text-blue-300 hover:text-blue-200"
                >
                  Contact me directly!
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-black dark:text-gray-400">
            <p>
              © 2025 PetStyle. All rights reserved. Design showcase for
              demonstration purposes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
