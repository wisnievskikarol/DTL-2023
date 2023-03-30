import React from "react";

const AboutUs = () => {
  return (
    <div
      id={"Onas"}
      className=" pt-9 md:py-12 md:px-6 lg:py-16 lg:px-20 2xl:container 2xl:mx-auto"
    >
      <div className="flex flex-col justify-between  lg:flex-row">
        <div className="lg:w-12/12 flex w-full flex-col justify-center px-4 sm:px-0">
          <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-100 sm:pb-16 lg:text-4xl">
            Kim jesteśmy?
          </h1>
          <p className="text-justify text-base font-normal leading-6 text-gray-500 ">
            deeptechlabs laboratorium zaawansowanych technologii zajmuje się
            zarządzaniem projektami, tworzeniem innowacji, oraz wprowadzaniem i
            budowaniem technologii, pozwalającej na automatyzację czy
            optymalizację procesów w przedsiębiorstwach. Projekty, które
            prowadzimy dla naszych klientów na dzień dzisiejszy sięgają prawie,
            pół miliarda złotych. Opracowujemy również cykle badawcze oraz
            projekt badań w takich dziedzinach jak:
          </p>
          <ul className="my-4 ml-4 list-disc text-justify text-base font-normal leading-6 text-gray-500 ">
            <li>Genetyka</li>
            <li>Zootechnika i Rybactwo</li>
            <li>Agrotechnika</li>
            <li>Biologia Molekularna </li>
            <li>Biochemia </li>
            <li>Mykologia</li>
          </ul>
          <p className="pt-2 text-justify text-base font-normal leading-6 text-gray-500 ">
            Narzędzia, protokoły, frameworki czy naukowców których udostępniamy
            naszym klientom, pozwalają nie tylko na szybkie tworzenie nowych
            produktów i usług, ale również dają projektom skrojone
            ustandaryzowane wytyczne co do optymalnego prowadzenia organizacji,
            zespołów czy projektów. Ponadto dzięki wykorzystaniu nowych
            technologii klienci otrzymują stabilne narzędzia i standardy prawne
            oraz finansowe. Fraze DeepTech odnosi się do wykorzystania
            zaawansowanych i powstających technologii, takich jak sztuczna
            inteligencja, blockchain, robotyka czy biotechnologia do
            rozwiązywania złożonych problemów oraz tworzenia nowych produktów i
            usług, które mają znaczący wpływ na różne branże. Technologie te
            umożliwiają na rozprzestrzenianie się innowacji i rozwój nowych
            rozwiązań, które mają potencjał do zakłócania istniejących rynków i
            tworzenia nowych. Skontaktuj się z nami
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between   lg:flex-row">
        <div className="flex w-full flex-col justify-center px-4 sm:px-0 lg:w-full">
          {/*<h1 className="pb-4 text-3xl font-bold leading-9 text-gray-800 lg:text-4xl">*/}
          {/*  Our Story*/}
          {/*</h1>*/}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
