import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Shield, Award } from "lucide-react";
import { MdDocumentScanner } from "react-icons/md";
import { HiMiniChartBar } from "react-icons/hi2";
import { TbShieldCheckFilled } from "react-icons/tb";
import { HiLockClosed } from "react-icons/hi";
import { MdCloudUpload } from "react-icons/md";

const TimelineFeatures = () => {
  const features = [
    {
      title: "Reproducible Steps",
      description: "Provide detailed steps to replicate vulnerabilities accurately.",
      icon: <AlertTriangle className="h-10 w-10 text-purple-400" />,
    },
    {
      title: "Proof of Concept",
      description: "Include screenshots or PoC to validate your findings.",
      icon: <MdDocumentScanner className="h-10 w-10 text-blue-400" />,
    },
    {
      title: "Impact Documentation",
      description: "Document the potential impact and severity of the issue discovered.",
      icon: <HiMiniChartBar className="h-10 w-10 text-green-400" />,
    },
    {
      title: "Responsible Disclosure",
      description: "Follow ethical practices to ensure secure communication.",
      icon: <TbShieldCheckFilled className="h-10 w-10 text-yellow-400" />,
    },
    {
      title: "Safe Testing Environment",
      description: "Avoid any testing that could harm systems or compromise data.",
      icon: <HiLockClosed className="h-10 w-10 text-red-400" />,
    },
    {
      title: "Secure Submission",
      description: "Submit findings through our secure and trusted platform.",
      icon: <MdCloudUpload className="h-10 w-10 text-indigo-400" />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#1B1339] to-[#2C2748] text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Bug Bounty Features Timeline
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

          {/* Features */}
          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? "-100%" : "100%",
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`flex items-center bg-[#252040] border border-gray-700 rounded-lg p-6 shadow-lg max-w-md w-full ${
                    index % 2 === 0
                      ? "ml-12 text-left"
                      : "mr-12 text-right"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 ${
                      index % 2 === 0 ? "mr-4" : "ml-4"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineFeatures;
