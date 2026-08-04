import BottomlessBrunch from "@/components/BottomlessBrunch";

import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Bottomless Prosecco Brunch | The Ivy Tree Romford",
  description:
    "Join us every Saturday from 1:00 PM - 5:00 PM for our Bottomless Prosecco Brunch. Unlimited Prosecco or selected cocktails, live music by Martin Bell and a delicious brunch menu.",
  alternates: { canonical: "https://www.ivytreeessex.co.uk/bottomless-prosecco-brunch" }
};

export default function BottomlessBrunchPage() {
  return (
    <main className="pt-[90px] bg-brand-dark min-h-screen">
      <div className="py-sp-48 text-center border-b border-white/5">
        <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-wider text-white">
          Bottomless Prosecco Brunch
        </h1>
        <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-sp-16" />
      </div>
      <BottomlessBrunch />
    </main>
  );
}
