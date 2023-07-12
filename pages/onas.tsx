import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import Rekrutacja from "@/components/Recruitment";
import MarginDiv from "@/components/Vert1Div";

export default function Home() {
  return (
    <>

 
      <MarginDiv>
         <p> Pracujemy jeszcze nad tą stroną, zapraszamy wkótce.</p>
            <br />
            <br />
          <p> Chcesz się z nami skontaktować pisz śmiało kontakt(@)deeptechlabs.pl </p>
            <br />
            <br />
          <p> Jeśli chiałbyś/chciałabyś pracować nad stworzeniem tej strony napisz rekrutacja(@)deeptechlabs.pl </p>
          <p> Wyślij nam swoje portfolio, napisz kim jesteś czym się interesujesz, jak widzisz siebie za rok, 5 lat i 10 lat</p>
      </MarginDiv>


      <p className="pt-2 text-center text-base font-normal leading-6 text-gray-500">
        pozwalającej na automatyzację czy optymalizację procesów w przedsiębiorstwach. Opracowujemy również cykle badawcze oraz projekt badań w takich dziedzinach jak:

        Narzędzia, protokoły, frameworki czy naukowców których udostępniamy naszym klientom, pozwalają nie tylko na szybkie tworzenie nowych produktów i usług, ale również dają projektom skrojone ustandaryzowane wytyczne co do optymalnego prowadzenia organizacji, zespołów czy projektów. Ponadto dzięki wykorzystaniu nowych technologii klienci otrzymują stabilne narzędzia i standardy prawne oraz finansowe. Fraza DeepTech odnosi się do wykorzystania zaawansowanych i powstających technologii, takich jak sztuczna inteligencja, blockchain, robotyka, czy biotechnologia do rozwiązywania złożonych problemów oraz tworzenia nowych produktów i usług, które mają znaczący wpływ na różne branże. Technologie te umożliwiają na rozprzestrzenianie się innowacji i rozwój nowych rozwiązań, które mają potencjał do zakłócania istniejących rynków i tworzenia nowych. Skontaktuj się z nami!
      </p>
     
      <Footer />
    </>
  );
}

