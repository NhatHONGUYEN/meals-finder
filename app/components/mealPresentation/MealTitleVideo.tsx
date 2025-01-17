import ButtonBack from "@/components/ui/ButtonBack";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { VideoDialog } from "../../../animations/VideoDialog";

interface Meal {
  [key: string]: string;
}

export default function MealTitleVideo({ meal }: { meal: Meal }) {
  return (
    <>
      {" "}
      <aside className="top-10 mx-auto h-fit w-full max-w-[65ch] lg:sticky lg:max-w-96">
        <ButtonBack />
        <h1 className=" text-4xl font-semibold tracking-tight text-pretty text-gray-900 ">
          The best way to cook {meal.strMeal}
        </h1>
        <div className="flex pt-5 gap-3">
          <Avatar className="size-7 rounded-full">
            <AvatarImage
              src="https://shadcnblocks.com/images/block/avatar-2.webp"
              alt="placeholder"
            />
          </Avatar>
          <div>
            <h2 className="font-semibold">Tony Lao</h2>
            <p className="text-xs text-muted-foreground">2 days ago</p>
          </div>
        </div>
        <div className="pt-20">
          <VideoDialog videoMeal={meal.strYoutube} />
        </div>
      </aside>
    </>
  );
}
