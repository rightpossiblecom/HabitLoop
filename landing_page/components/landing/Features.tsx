import { Target, Zap, Shield, Sparkles } from "lucide-react";

const features = [
    {
        name: "Single Habit Focus",
        description: "Multi-tasking is the enemy of consistency. We limit you to one habit at a time so you can give it your full attention.",
        icon: Target,
        color: "bg-blue-500/10 text-blue-600",
    },
    {
        name: "Visible Streaks",
        description: "Watch your consistency grow. Our prominent streak counter provides the emotional reward you need to keep going.",
        icon: Zap,
        color: "bg-amber-500/10 text-amber-600",
    },
    {
        name: "Privacy First",
        description: "Your data stays on your device. No accounts, no syncing, no tracking. Just you and your goal.",
        icon: Shield,
        color: "bg-emerald-500/10 text-emerald-600",
    },
    {
        name: "Loop Reinforcement",
        description: "If you miss a day, we help you restart without shame. It's about the long-term loop, not perfection.",
        icon: Sparkles,
        color: "bg-indigo-500/10 text-indigo-600",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white dark:bg-black/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wide">Features</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Everything you need, nothing you don't.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        HabitLoop is built on the philosophy of intentional minimalism. We stripped away the noise so you can focus on building the habit that changes your identity.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative group">
                            <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${feature.color} transition-transform group-hover:scale-110`}>
                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <h3 className="text-lg font-semibold leading-8 text-foreground group-hover:text-primary transition-colors">
                                {feature.name}
                            </h3>
                            <p className="mt-4 text-base leading-7 text-zinc-500 dark:text-zinc-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
