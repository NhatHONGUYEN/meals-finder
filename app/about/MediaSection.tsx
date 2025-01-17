import { Info } from "lucide-react";

// Importation du chemin de la vidéo depuis une constante ou fichier de configuration
const videoPath = "/aboutVideo.mp4"; // Il serait possible de gérer ce chemin dans un fichier de config ou avec un hook dynamique.

export default function MediaSection() {
  return (
    <div className="mt-16">
      <figure>
        <video
          src={videoPath}
          className="w-full max-w-2xl h-auto rounded-lg object-cover"
          autoPlay
          loop
          muted
          controls={false}
          title="A selection of recipes for every taste"
          aria-label="Watch a selection of recipes for every taste"
        >
          <track
            kind="subtitles"
            src="/path/to/your/subtitles_en.vtt" // Inclure des sous-titres pour améliorer l'accessibilité et le SEO
            srcLang="en"
            label="English Subtitles"
          />
          Sorry, your browser does not support the video tag.
        </video>
        <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
          <Info
            aria-hidden="true"
            className="mt-0.5 size-5 flex-none text-gray-300"
          />
          A selection of recipes for every taste.
        </figcaption>
      </figure>
      <div className="mt-16 max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900">
          Everything You Need to Cook Like a Pro
        </h2>
        <p className="mt-6">
          Our recipes come with practical tips and tricks to help you succeed at
          every step. Whether you&apos;re a beginner or an experienced cook,
          you&apos;ll find valuable resources here to improve your culinary
          skills.
        </p>
        <p className="mt-8">
          Discover our guides and tutorials to master basic techniques and chef
          secrets. With our recipes and advice, you&apos;ll be ready to impress
          your guests and enjoy delicious meals with your family.
        </p>
      </div>
    </div>
  );
}
