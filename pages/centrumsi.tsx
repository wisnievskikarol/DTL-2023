import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import CardCSI from "@/components/cardCSI";
import OscillatingLine from "@/components/sepLine";

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
        <div className="py-8 md-64 main-div" style={{ maxWidth: "94%", margin: "0 auto" }}>
          <motion.h1
            className=" bg-gradient-to-br from-black to-green-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>Centrum Sztucznej Inteligencji</Balancer>
          </motion.h1>

          <div className="text-center text-gray-500 mt-16 md:text-xl">
            Centum SI to społeczność stawiająca sobie za cel aktywizację studentów i młodzieży lubelskich uczelni oraz szkół w celu badań i pogłębiania wiedzy z dziedziny sztucznej inteligencji. Jego realizacja obejmuje badania naukowe (tak zwany research) branży i dziedziny szeroko rozumianej sztucznej inteligencji, organizowanie warsztatów, tworzenie i publikowanie artykułów naukowych, prowadzenie kanałów naukowych oraz prezentowanie się na konferencjach, a w przyszłości także badania nad technicznymi aspektami SI. Chcemy zainspirować młodzież do aktywnego rozwoju w tej dziedzinie, pokazać im jednocześnie w jaki sposób prowadzone są działania biznesowe i cykle technologiczne, chcemy promować naukę i technologię oraz popularyzować sztuczną inteligencję wśród społeczności lokalnej, budować świadomość i kapitał intelektualny.
          </div>

          <OscillatingLine />
           <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-100 lg:text-4xl" style={{ marginTop: "16px", marginLeft: "16px", marginBottom: "0" }}>
            Nasze działania
          </h1>
         
          <CardCSI />
        </div>
      </motion.div>

      <Footer />
    </>
  );
}
