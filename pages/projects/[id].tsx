import { GetStaticPaths, GetStaticProps } from 'next';
import { YourProjectComponent } from '@/components/YourProjectComponent';

export const getStaticPaths: GetStaticPaths = async () => {
  // Pobierz dostępne ID projektów z Airtable i zwróć je jako możliwe ścieżki
  const paths = await getProjectIdsFromAirtable(); // Funkcję trzeba stworzyć

  return {
    paths,
    fallback: 'blocking', // lub 'blocking' lub 'true', w zależności od potrzeb
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projectId = context.params?.id as string;

  // Pobierz dane projektu z Airtable na podstawie ID
  const projectData = await getProjectDataFromAirtable(projectId); // Funkcję trzeba stworzyć

  return {
    props: {
      projectData,
    },
  };
};

const ProjectPage: React.FC<{ projectData: YourDataType }> = ({ projectData }) => {
  // Renderuj komponent z danymi projektu
  return <YourProjectComponent data={projectData} />;
};

export default ProjectPage;
