import Head from "next/head";
import ContactDetails from "./ContactDetails";
import ContactHeader from "./ContactHeader";
import ContactImage from "./ContactImage";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me | HO NGUYEN Nhat-Quan</title>
        <meta
          name="description"
          content="Get in touch with me for questions, feedback, or collaboration opportunities. I am here to help you with your projects!"
        />
      </Head>
      <section className="py-32 max-w-6xl overflow-clip rounded-lg bg-accent/50 mx-auto">
        <div className="container">
          <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
            <div className="mx-auto flex max-w-sm flex-col lg:py-14 justify-between gap-10">
              <ContactHeader />
              <ContactDetails />
            </div>
            <ContactImage />
          </div>
        </div>
      </section>
    </>
  );
}
