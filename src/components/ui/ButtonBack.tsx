"use client";

import { Button } from "@/components/ui/button";

export default function ButtonBack() {
  const handleGoBack = () => {
    // Utilise l'API `window.history.back()` pour revenir à la page précédente
    window.history.back();
  };

  return <Button onClick={handleGoBack}>Go Back</Button>;
}
