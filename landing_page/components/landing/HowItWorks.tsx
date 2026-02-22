import { PlusCircle, CheckCircle, TrendingUp } from "lucide-react";

const steps = [
    {
        name: "Set Your Action",
        description: "Choose one simple, daily action you want to turn into a habit. Something achievable in less than 10 minutes.",
        icon: PlusCircle,
    },
    {
        name: "Mark as Completed",
        description: "Open the app once a day, tap the big button, and confirm you've done it. One tap, one win.",
        icon: CheckCircle,
    },
    {
        name: "Build the Loop",
        description: "Watch your streak grow day after day. Consistency becomes your new identity as the loop reinforces itself.",
        icon: TrendingUp,
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wide">Process</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Simple as it should be.
                    </p>
                </div>

                <div className="relative">
                    {/* Connection line for desktop */}
                    <div className="absolute top-1/2 left-0 hidden w-full -translate-y-1/2 border-t-2 border-dashed border-zinc-200 dark:border-zinc-800 lg:block"></div>

                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {steps.map((step, index) => (
                            <div key={step.name} className="relative flex flex-col items-center text-center bg-white dark:bg-black p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm z-10 transition-all hover:shadow-md lg:p-10">
                                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-white shadow-lg shadow-primary/30">
                                    <step.icon className="h-10 w-10" />
                                </div>
                                <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-black">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">{step.name}</h3>
                                <p className="text-base leading-7 text-zinc-500 dark:text-zinc-400">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
