import { Button } from "@/components/ui/kit";

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center bg-night px-4 text-center text-ivory">
      <div>
        <p className="font-display text-[clamp(7rem,25vw,16rem)] font-medium leading-none text-saffron">404</p>
        <p className="mt-2 font-deva text-2xl text-ivory/70">तमसो मा ज्योतिर्गमय</p>
        <p className="mx-auto mt-4 max-w-md text-ivory/60">This page wandered off. Let&apos;s lead you back to the light.</p>
        <div className="mt-10 flex justify-center">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
