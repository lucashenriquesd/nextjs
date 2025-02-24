import React from "react";
import { Button } from "@/components/ui/button";

export default function TopMenu() {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-silver py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">Your Hero Title</h1>
      <p className="max-w-2xl text-center text-gray-600 mb-8">
        Brief description or tagline goes here.
      </p>
      <div>
        <Button variant="default" size="lg">
          Call to Action
        </Button>
      </div>
    </section>
  );
}
