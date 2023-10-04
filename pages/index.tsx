import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import GridList from "@/components/grid-list/grid-list";
import Footer from "@/components/footer";
import YouTubeVideo from "@/components/YouTubeVideo";
import AssistWindow from "@/components/AssistWindow";
import OneDivNoBorder from "@/components/OneDivNoBorder";
import Link from "next/link";
import ImageComponent from '@/components/ImageComponent';
import AirtableData from '@/components/AirtableData';
import ToLaunch from "@/components/ToLaunch";


export default function Home() {
  return (
    <div>
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

        <div className="py-8 flex flex-col">
          <YouTubeVideo />
          <motion.p
            className="mt-6 text-center text-gray-500 md:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Technologia napędzająca Twoją przyszłość.
          </motion.p>
          <OneDivNoBorder content="deeptechlabs to laboratorium zaawansaowanych technologii, gdzie za cel stawiamy sobie zapewnienie, by polskie przedsiębiorstwa miały dostęp do najbardziej zaawansowanych technologii. Nasza misja to wsparcie firm w adaptacji innowacji, takich jak sztuczna inteligencja, robotyka czy blockchain. Oferujemy nie tylko doradztwo, ale również praktyczne wdrożenia technologii, które mają potencjał zrewolucjonizować rynek." />
          
          <p className="text-center text-base font-normal leading-6 text-gray-500">
          <Link href="/onas">
            <button className="cursor-pointer rounded-md py-2 text-lg font-medium text-grey-500 hover:text-green-400 ">
              ... więcej
            </button>
          </Link>
          </p>
        </div>

        <ImageComponent src="/oferta.mp4" alt="Oferta deeptechlabs, sztuczna inteligencja dla firm, czym jest sztuczna inteligencja" />
        <p className="text-center text-base font-normal leading-6 text-gray-500">
          <Link href="/oferta">
            <button className="cursor-pointer rounded-md px-3 py-2 text-lg font-medium text-grey-500 hover:text-green-400 ">
              ... zapoznaj się z ofertą
            </button>
          </Link>
        </p>


         <motion.p
            className="mt-6 text-center text-gray-500 md:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Buduj z nami technologię lub wesprzyj jej budowanie
          </motion.p>

        <AirtableData
          buttonLabels={['Skontaktujemy się z Tobą', 'Napisz do nas', 'Zadzwoń do nas']} 
          displayTexts={['Skontaktujemy się z Tobą', 'Napisz do nas', 'Zadzwoń do nas']} 
        />

      
        <OneDivNoBorder content= "Odkryj moc innowacji z nami i daj skrzydeł młodym talentom! Wybierając naszą usługę, nie tylko korzystasz z najnowszych rozwiązań technologicznych, ale również inwestujesz w przyszłość. Aż 40% naszych zysków przeznaczamy na realizację ambitnych projektów start-upowych prowadzonych przez młodych naukowców." />
        {/* <AssistWindow /> */}
        {/* <div className="text-gray-500" style={{ marginTop: "4px", fontSize: "12px", textAlign: "center", width: "100%" }}> */}
          {/* <p> */}
            {/* TODO zrób connect wallet i powiedz że tego wymagamy, aby korzystać ze wszystkich możliwości. Zapisz do bazy adres portfela, i dane które podał -- Pewnie będzie trzeba politykę pod to
            {/* Pamiętaj o .env */}
            {/* Pracujemy nad Twoim personalnym asystentem! Dzięki wiedzy na Twój temat będzie pomagał Ci z nawigacją po stronie, co skróci czas oraz pokaże czego szukasz. */}
         {/* </p> */}
         {/* <p> */}
           {/* A nie jakieś SEO ;) */}
         {/* </p> */}
       {/* </div> */}

        <ToLaunch />
        <GridList />
        <Footer />
      </motion.div>
    </div>
  );
}
