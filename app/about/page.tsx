import ContentSection from "./ContentSection";
import HeaderSection from "./HeaderSection";
import MediaSection from "./MediaSection";

export default function About() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <HeaderSection />
        <ContentSection />
        <MediaSection />
      </div>
    </div>
  );
}
