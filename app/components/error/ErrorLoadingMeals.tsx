import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Head from "next/head";

export default function ErrorLoadingMeals() {
  return (
    <>
      <Head>
        <title>Error Loading Meals - 404 Not Found</title>
        <meta
          name="description"
          content="Oops! There was an error loading the meals. Please try again later."
        />
      </Head>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">Error loading meals.</p>

          <Link href="/">
            <Button className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring">
              Go Back Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
