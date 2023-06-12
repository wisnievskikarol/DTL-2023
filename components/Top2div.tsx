import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

interface TopSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const TopSection: React.FC<TopSectionProps> = ({ leftContent, rightContent }) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "38%", marginRight: "2%", border: "5px solid #08fc9c", backgroundColor: "black", padding: "16px", borderRadius: "8px" }}>
        <div className="text-center text-gray-500 md:text-xl">
          {leftContent}
        </div>
      </div>

      <div className="text-center text-gray-500 md:text-xl" style={{ width: "60%", border: "5px solid #08fc9c", backgroundColor: "black", padding: "16px", borderRadius: "8px" }}>
        {rightContent}
      </div>
    </div>
  );
};

export default TopSection;