import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQ from "@/components/landing/FAQ";
import AppScreen from "@/components/mockup/AppScreen";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AppScreen />
        <Features />
        <HowItWorks />
        <FAQ />

        {/* Final CTA Section */}
        <section id="download" className="py-24 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to start your loop?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-primary-dark/20 mb-10 opacity-90 text-indigo-100">
              Download HabitLoop today and experience the power of focusing on one thing.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-full bg-white px-8 py-4 text-lg font-bold text-primary transition-all hover:scale-105 active:scale-95 shadow-xl">
                Download for iOS
              </button>
              <button className="rounded-full bg-zinc-950 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl">
                Download for Android
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
