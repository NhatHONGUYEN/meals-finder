import Image from "next/image";

export default function ContactImage() {
  return (
    <div className="mx-auto flex max-w-screen-md flex-col gap-6">
      <Image
        src="/photo-profil.jpg"
        alt="photo-profil"
        width={350}
        height={300}
        className="rounded-lg"
      />
    </div>
  );
}
