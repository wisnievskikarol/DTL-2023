import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import AboutUs from "@/components/about-us";
import GridList from "@/components/grid-list/grid-list";
import Contact from "@/components/contact";
import Recruitment from "@/components/recruitment";
import Footer from "@/components/footer";
import YouTubeVideo from "@/components/yt";

export default function Home() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className={"py-8"}>
       
          <YouTubeVideo />
      
          <motion.p
            className="mt-6 text-center text-gray-500 md:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>Nasze technologie. Twoja przewaga.</Balancer>
          </motion.p>
          <motion.div
            className="mx-auto mt-6 flex items-center justify-center space-x-5"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
          </motion.div>
        </div>
        <AboutUs />
        <GridList />
        <Recruitment />
        <Footer />
      </motion.div>
    </>
  );
}
