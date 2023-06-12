import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import LeftSection from "@/components/Top2div";
import RightSection from "@/components/Bot2div";

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
        <LeftSection
          leftContent={
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src="/image5.jpg" alt="Image Description" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </div>
          }
          rightContent={
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            </div>
          }
        />

        <RightSection />

      </motion.div>

      <Footer />
    </>
  );
}
