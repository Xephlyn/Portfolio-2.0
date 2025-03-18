"use client";

import ParticleSystem from "../../../components/sections/technical/ParticleSystem";
import DataVisualizer from "../../../components/sections/technical/InteractiveDataVisualizer";
import { useRouter } from "next/navigation";

export default function TechnicalPage() {
  const router = useRouter();

  const goToContact = () => {
    // Set a flag in sessionStorage to indicate we want to scroll to contact
    if (typeof window !== "undefined") {
      sessionStorage.setItem("scrollToContact", "true");
      // Navigate to home page
      router.push("/contact");
    }
  };
  return (
    <div className="mt-20 min-h-screen bg-gradient-to-b from-gray-400 to-black dark:from-gray-900 dark:to-black text-gray-200 dark:text-gray-200">
      <header className="max-w-6xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6 dark:bg-gradient-to-r dark:from-blue-700 dark:to-purple-200 ">
            Technical Excellence
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 dark:text-gray-300">
            Elevating your digital presence through advanced web development
            techniques, try clicking the moon icon at the top right of your
            screen to see night mode!
          </p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-12">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-700 dark:to-purple-200 bg-gradient-to-r from-blue-400 to-purple-600">
              Interactive Experiences
            </h2>
            <p className="text-lg mb-4">
              Modern websites need to engage users beyond static content.
              Interactive elements create memorable experiences that capture
              attention and increase time spent on your site.
            </p>
            <p className="text-lg mb-4">
              Incorporating dynamic, responsive components like this particle
              system demonstrates technical proficiency while providing users
              with a unique interactive experience that sets your brand apart
              from competitors.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                Canvas API
              </span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                Physics Simulation
              </span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                User Interaction
              </span>
            </div>
          </div>

          <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.005] transition-transform duration-300 p-10">
            <ParticleSystem />
          </div>
        </div>
      </section>

      <section className="bg-gray-800/30 dark:bg-gray-800/30 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400 dark:text-purple-400">
              Data-Driven Decision Making
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300 dark:text-gray-300">
              Transform complex information into actionable insights
            </p>
          </div>

          <div className="bg-gray-900/70 dark:bg-gray-900/70 rounded-xl shadow-2xl overflow-hidden mb-12 p-10">
            <DataVisualizer />
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Data visualization tools like this empower businesses to make
              informed decisions quickly. By presenting complex datasets in
              intuitive, interactive formats, your team can identify trends,
              spot opportunities, and address challenges before they become
              problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-300 dark:text-purple-300">
                  Enhanced Communication
                </h3>
                <p>
                  Visual data presentations communicate complex information more
                  effectively than raw numbers, making insights accessible to
                  stakeholders across your organization.
                </p>
              </div>
              <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-300 dark:text-purple-300">
                  Dynamic Reporting
                </h3>
                <p>
                  Interactive charts and graphs allow users to explore data from
                  multiple angles, uncovering insights that might be missed in
                  static reports.
                </p>
              </div>
              <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-300 dark:text-purple-300">
                  Real-time Updates
                </h3>
                <p>
                  Modern visualization tools can connect to live data sources,
                  ensuring your team always has the latest information when
                  making critical business decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Elevate Your Digital Presence
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 dark:text-gray-300 mb-10">
            Implementing advanced technical solutions creates a competitive
            advantage in today&apos;s digital landscape
          </p>
          <button
            onClick={goToContact}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-xl font-medium text-white hover:from-blue-600 hover:to-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Let&apos;s Build Something Amazing
          </button>
        </div>
      </section>
    </div>
  );
}
