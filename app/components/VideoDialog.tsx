import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

function VideoDialog({ videoMeal }: { videoMeal: string }) {
  // Fonction pour extraire l'ID de la vidéo YouTube
  const extractVideoId = (url: string) => {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : null;
  };

  // Extraire l'ID de la vidéo de la chaîne "videoMeal" (qui est l'URL)
  const videoId = extractVideoId(videoMeal);

  if (!videoId) {
    return <div>Vidéo non trouvée ou ID invalide.</div>;
  }

  const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative">
      {/* Version light du modal */}
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc={videoEmbedUrl} // Utilisation de l'URL d'embed dynamique
        thumbnailSrc={thumbnailUrl} // Utilisation de l'URL de la miniature dynamique
        thumbnailAlt="Hero Video"
      />

      {/* Version dark du modal */}
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc={videoEmbedUrl} // Utilisation de l'URL d'embed dynamique
        thumbnailSrc={thumbnailUrl} // Utilisation de l'URL de la miniature dynamique
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}

export { VideoDialog };
