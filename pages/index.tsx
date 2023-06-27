import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import AboutUs from "@/components/about-us";
import GridList from "@/components/grid-list/grid-list";
import Recruitment from "@/components/recruitment";
import Footer from "@/components/footer";
import YouTubeVideo from "@/components/YouTubeVideo";
import AssistWindow from "@/components/AssistWindow";

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
        <div className="py-8">
        <YouTubeVideo />

          <motion.p
            className="mt-6 text-center text-gray-500 md:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Nasze technologie. Twoja przewaga.
          </motion.p>
        </div>
        <AboutUs />
        <AssistWindow />
       <div className="text-gray-500" style={{ marginTop: "4px", fontSize: "12px", textAlign: "center", width: "100%" }}>
         <p>
           Pracujemy nad Twoim personalnym asystentem! Dzięki wiedzy na Twój temat będzie pomagał Ci z nawigacją po stronie, co zaoszczędzi Ci czas i pokaże czego szukasz czego szukasz.
         </p>
         <p>
          A nie jakieś SEO ;)
         </p>
       </div>
        <GridList />
        <Footer />
      </motion.div>
    </>
  );
}
