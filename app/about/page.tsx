import Head from "next/head"; // Importation du composant Head
import ContentSection from "./ContentSection";
import HeaderSection from "./HeaderSection";
import MediaSection from "./MediaSection";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Our Recipe Website</title> {/* Titre de la page */}
        <meta
          name="description"
          content="Learn more about our recipe website, our mission, and how we bring delicious recipes to the world."
        />
        <meta name="keywords" content="recipes, about us, cooking, food blog" />
        <meta property="og:title" content="About Us - Our Recipe Website" />
        <meta
          property="og:description"
          content="Discover more about our recipe website and our journey to inspire home cooks."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />{" "}
        {/* Image pour les partages sur les réseaux sociaux */}
        <meta property="og:url" content="https://your-website.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Our Recipe Website" />
        <meta
          name="twitter:description"
          content="Get to know us and our mission to bring you the best recipes!"
        />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
        <meta name="robots" content="index, follow" />{" "}
        {/* Instructions pour les moteurs de recherche */}
      </Head>

      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
          <HeaderSection />
          <ContentSection />
          <MediaSection />
        </div>
      </div>
    </>
  );
}
