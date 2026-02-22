import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8 animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        Simplify your consistency
                    </div>

                    <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl lg:text-8xl mb-8">
                        One habit.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Every single day.
                        </span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-10">
                        Stop juggling dozens of goals. HabitLoop helps you focus on the one action that matters most, building a streak that speaks for itself.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="#download"
                            className="group flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-lg font-bold text-background transition-all hover:scale-105 active:scale-95"
                        >
                            Start Your Loop
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="rounded-full border border-zinc-200 bg-white/50 px-8 py-4 text-lg font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-black/50 dark:hover:bg-zinc-900"
                        >
                            Learn More
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-zinc-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary" />
                            Minimalist Design
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary" />
                            Privacy Focused
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary" />
                            One Habit Limit
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
