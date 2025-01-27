import "./Vajra.css";
import { motion } from "framer-motion";
import { Network, Zap, Shield, Globe2, Wifi, Radar } from "lucide-react";

const Vajra = () => {
  const features = [
    {
      icon: Network,
      title: "IXP Optimization",
      description:
        "Dynamic BGP route server configuration and intelligent traffic management for Internet Exchange Points.",
    },
    {
      icon: Zap,
      title: "Low Latency",
      description:
        "Optimized signal processing and routing algorithms for minimal latency in satellite communications.",
    },
    {
      icon: Shield,
      title: "Industry Applications",
      description:
        "Suitable for military intelligence, defense, telecommunications, and various industrial applications.",
    },
  ];

  const specifications = [
    "Dynamic BGP route server configuration",
    "VLAN network isolation",
    "Automated peering session establishment",
    "Intelligent routing policy management",
    "Satellite signal processing and optimization",
    "Real-time traffic analysis and adjustment",
  ];

  return (
    <div className="pt-16">
      {/* Static Background */}
      <div className="bg-gradient-to-b from-[#1B1339] to-[#2C2748] py-12">
        {/* Static background only */}
      </div>

      {/* Animated Foreground Section */}
      <motion.div
        className="py-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-screen-2xl mx-auto px-12 sm:px-16 lg:px-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content with Animation */}
            <motion.div
              className="text-left space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400 mb-6">
                VAJRA
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl text-gray-400 max-w-full mx-auto mt-6 opacity-0 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
                id="vajra-text"
              >
                You can search for any IXP, ASN, Country, or City, and see the latest data from these networks instantly. With these APIs integrated, you can be confident that you are getting the most up-to-date information possible.
              </p>

              {/* Learn More Button */}
              <motion.button
                className="mt-6 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Animated Logo/Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Outer circle with pulse effect */}
                <div className="absolute w-full h-full rounded-full border-2 border-blue-500 animate-ping opacity-20"></div>

                {/* Main circular background */}
                <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-600"></div>

                {/* Network lines */}
                <Globe2 className="absolute w-12 h-12 text-blue-200 opacity-50 transform rotate-45" />
                <Wifi className="absolute w-10 h-10 text-purple-200 opacity-75" />
                <Radar
                  className="absolute w-8 h-8 text-cyan-200 animate-spin"
                  style={{ animationDuration: "3s" }}
                />

                {/* Center dot */}
                <div className="absolute w-4 h-4 bg-white rounded-full shadow-glow"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-[#1B1339] to-[#2C2748] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map(({ icon: Icon, title, description }, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-r from-[#2B224A] to-[#342C5C] p-8 rounded-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:border-purple-500 border border-gray-700 shadow-lg hover:shadow-2xl text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <Icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-200 mb-4">{title}</h3>
                <p className="text-gray-400">{description}</p>
              </motion.div>
            ))}
          </div>

          {/* Technical Specifications Section */}
          <motion.div
            className="bg-gradient-to-b from-[#18152D] to-[#1E1A34] p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-extrabold mb-6 text-white text-center">
              Technical Specifications
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              {specifications.map((spec, idx) => (
                <li
                  key={idx}
                  className="p-2 rounded-md bg-[#29264A] hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out"
                >
                  {spec}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vajra;
