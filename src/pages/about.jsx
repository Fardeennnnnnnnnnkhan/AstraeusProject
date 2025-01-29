import React from "react";
import { Target, Eye, Building, Linkedin } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-#071630">
      <div className="pt-16 container mx-auto px-4">
        <div className="py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-cyan-400 mb-6">
                About Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to revolutionize the digital landscape
                through innovative solutions and exceptional service.
              </p>
            </div>
          </div>
        </div>

        {/* Company Info Section */}
        <div className="mb-32 animate-fade-up animation-delay-200">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center mb-8">
              <Building className="w-12 h-12 text-cyan-400 mr-4" />
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-cyan-400">
                Our Company
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We believe that the quality of decision-making hinges
              on the precision and timeliness of information, rather than moral
              judgments. Our fundamental principle is simple yet profound:
              "Well-informed bad decisions do less harm than ill-informed good
              decisions." We do not aim to provide a moral compass or impose
              ethical frameworks. Instead, we focus on delivering the data and
              insights necessary for individuals and organizations to make
              informed decisions. As we like to say: "Data is the new moral
              compass." Our mission is to empower decision-makers with accurate,
              real-time information that helps them navigate the complex and
              ever-changing global landscape. Whether it's a business,
              government, or individual seeking clarity, we are dedicated to
              ensuring that every decision is based on facts, enabling
              responsible choices in an unpredictable world. At Astraeus
              NextGen, we prioritize the future, with a focus on leveraging
              cutting-edge technology and data analytics to shape informed,
              pragmatic decisions that drive progress{" "}
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* Mission Box */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group animate-fade-left animation-delay-400">
            <div className="flex items-center mb-6 transform group-hover:translate-x-2 transition-transform duration-300">
              <Target className="w-12 h-12 text-cyan-400 mr-4" />
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-cyan-400">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Astraeus NextGen, our core philosophy transcends traditional
              moral boundaries. We believe that well-informed decisions matter
              more than moral judgments. Our fundamental principle is that
              "well-informed bad decisions do less harm than ill-informed good
              decisions"{" "}
            </p>
          </div>

          {/* Vision Box */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group animate-fade-right animation-delay-400">
            <div className="flex items-center mb-6 transform group-hover:translate-x-2 transition-transform duration-300">
              <Eye className="w-12 h-12 text-cyan-400 mr-4" />
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-cyan-400">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              We do not aim to provide a moral framework, but instead focus on
              delivering precise data to enable effective decision-making. As
              we state, "data is the new moral compass" - our mission is to
              provide decision-makers with accurate, timely information that
              allows them to navigate complex global landscapes.{" "}
            </p>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mb-32 animate-fade-up animation-delay-600">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-cyan-400">
            Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Founder 1 */}
            <div className="text-center group animate-fade-left animation-delay-800">
              <div className="relative mb-8 mx-auto w-72 h-80 rounded-2xl overflow-hidden">
                <img
                  src="\Shreejit-Sen.jpg"
                  alt="Shreejit Sen"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                    <a
                      href="https://www.linkedin.com/in/shreejit-sen-7a7b75255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors duration-300"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                Shreejit Sen
              </h3>
              <p className="text-purple-400 text-xl mb-4">Co-Founder & CEO</p>
            </div>

            {/* Founder 2 */}
            <div className="text-center group animate-fade-right animation-delay-800">
              <div className="relative mb-8 mx-auto w-72 h-80 rounded-2xl overflow-hidden">
                <img
                  src="/Anush-Dhavale.jpg"
                  alt="Anush-Dhavale"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                    <a
                      href="https://www.linkedin.com/in/anush-dhavale-693488251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors duration-300"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                Anush-Dhavale
              </h3>
              <p className="text-purple-400 text-xl mb-4">Founder & CEO</p>
            </div>
          </div>
        </div>

        {/* Advisors Section */}
        <div className="mb-0 px-5 py-5 animate-fade-up animation-delay-800">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-300">
            Our Advisors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Advisor 1 */}
            <div className="text-center group animate-fade-left animation-delay-800">
              <div className="relative mb-8 mx-auto w-72 h-80 rounded-2xl overflow-hidden">
                <img
                  src="/DHRUV_Sharma.png"
                  alt="Dhruv Sharma"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-3xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                Dhruv Sharma
              </h3>
              <p className="text-cyan-400 text-xl mb-4">
                Fmr. Additional Private Secretary to Hon'ble Union Minister,
                Government of India | Founding Member I-PAC | Public Policy
                Expert | Political Advisor | Election Campaign Manager
              </p>
            </div>

            {/* Advisor 2 */}
            <div className="text-center group animate-fade-right animation-delay-800">
              <div className="relative mb-8 mx-auto w-72 h-80  overflow-hidden">
                <img
                  src="/SUBHO_PATI.png"
                  alt="Subho Patil"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-3xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                David Patel
              </h3>
              <p className="text-cyan-400 text-xl mb-4">
                Sahaja Yogi | LinkedIn Top Voice | Quantum Consulting Strategist
                | Top Global BPO Expert | Start-up Mentor | Elevating Growth
                Through Innovative Solutions | Co-founder & COO of The Nistula
                Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;