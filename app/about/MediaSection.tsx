import { Info } from "lucide-react";

export default function MediaSection() {
  return (
    <div className="mt-16">
      <figure>
        <video
          src="/aboutVideo.mp4"
          className="w-1/2 h-1/2 rounded-lg object-cover"
          autoPlay
          loop
          muted
        ></video>
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
