import TopMenu from "@/components/TopMenu";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopMenu />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <Button>Button</Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
