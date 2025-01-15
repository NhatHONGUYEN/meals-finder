import Image from "next/image";

const Contact = () => {
  return (
    <section className="py-32 max-w-6xl mx-auto">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                Contact Me
              </h1>
              <p className="text-muted-foreground">
                I am available for questions, feedback, or collaboration
                opportunities. Let me know how I can help!
              </p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Phone: </span>
                  (123) 34567890
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href="" className="underline">
                    your-email@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 ">
            <Image
              src="/photo-profil.jpg"
              alt="photo-profil"
              width={300}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
