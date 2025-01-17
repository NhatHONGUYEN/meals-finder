import { suggestionError } from "../../data/data";
import Head from "next/head";

export default function Error() {
  return (
    <>
      <Head>
        <title>No Meals Found - Suggestions</title>
        <meta
          name="description"
          content="No meals found. Here are some suggestions to help you find what you're looking for."
        />
      </Head>
      <div className="grid place-content-center bg-white mt-20 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
            No meals found.
          </h1>
          <p className="mt-6 text-xl text-gray-500">But you can try:</p>
          <ul className="grid mt-20 grid-cols-5 gap-5 text-gray-500">
            {suggestionError.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
