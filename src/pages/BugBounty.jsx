import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bug, Shield, Award, AlertTriangle } from "lucide-react";
import { MdDocumentScanner } from "react-icons/md";
import { HiMiniChartBar } from "react-icons/hi2";
import { TbShieldCheckFilled } from "react-icons/tb";
import { HiLockClosed } from "react-icons/hi";
import { MdCloudUpload } from "react-icons/md";
const BugBounty = () => {
  // Create a ref for the Bug Bounty Program section
  const programSectionRef = useRef(null);

  // Scroll function to scroll to the Bug Bounty Program section
  const scrollToProgram = () => {
    programSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#1B1339] to-[#2C2748] text-white min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-left space-y-8 mt-32"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Join Our{" "}
              <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Bug Bounty
              </span>{" "}
              Program
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-lg">
              Help us secure our platform by identifying and reporting
              vulnerabilities. Contribute to building a safer digital environment
              and earn rewards for your efforts.
            </p>
            <button
              onClick={scrollToProgram}
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 px-8 py-4 rounded-lg text-xl font-bold text-white transition-transform hover:scale-105"
            >
              Learn More
            </button>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://www.shutterstock.com/image-vector/bounty-bugs-bug-hunters-look-600nw-2206541017.jpg"
              alt="Bug Bounty Illustration"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Bug Bounty Program Section */}
      <div
        ref={programSectionRef} // Attach the ref to this div
        className="bg-gradient-to-b from-[#1B1339] to-[#2C2748] text-white min-h-screen pt-16"
      >
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-12 py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-200">
              Bug {" "}
              <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Bounty
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
              Help secure our platform by reporting vulnerabilities and earning
              rewards for your contributions!
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 },
              },
            }}
          >
            {[
              {
                Icon: Bug,
                title: "Report Vulnerabilities",
                description:
                  "Share detailed reports of vulnerabilities you discover in our systems to help us improve.",
              },
              {
                Icon: Award,
                title: "Get Rewarded",
                description:
                  "Receive rewards based on the severity and impact of your findings.",
              },
              {
                Icon: Shield,
                title: "Improve Security",
                description:
                  "Help us enhance security measures and protect the platform and its users.",
              },
            ].map(({ Icon, title, description }, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center bg-[#18152D] border border-purple-600 rounded-xl p-8 hover:shadow-lg transition-transform hover:scale-105"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Icon className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-400">{description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
  className="bg-gradient-to-b from-[#1B1339] to-[#2A1F52] border border-gray-800 rounded-xl p-12 shadow-2xl"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  <div className="text-center mb-10">
    <h2 className="text-4xl font-extrabold text-white mb-4">Bug Bounty Features</h2>
    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
      Our Bug Bounty program is designed to prioritize security and empower ethical hackers with clear guidelines and robust rewards.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Feature Cards */}
    {[
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
    ].map((feature, index) => (
      <motion.div
        key={index}
        className="bg-[#252040] border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center mb-4">
          {feature.icon}
          <h3 className="text-2xl font-bold text-white ml-4">{feature.title}</h3>
        </div>
        <p className="text-gray-400">{feature.description}</p>
      </motion.div>
    ))}
  </div>
</motion.div>


{/* Call to Action */}
<motion.div
className="text-center mt-16"
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.7, duration: 0.8 }}
>
<Link
  to="/"
  className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 px-8 py-4 rounded-lg text-xl font-bold text-white transition-transform hover:scale-105"
>
  Submit a Request
</Link>
</motion.div>
        </motion.div>
        
      </div>
    </>
  );
};

export default BugBounty;




