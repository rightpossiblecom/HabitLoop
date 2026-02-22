import Link from "next/link";
import { Book, LifeBuoy, Zap } from "lucide-react";

export default function HelpCenter() {
    return (
        <div className="bg-white dark:bg-black min-h-screen pt-32 pb-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-8">Help Center</h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
                    Everything you need to know about using HabitLoop to build lasting consistency.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-16">
                    <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-800">
                        <div className="mb-4 text-primary">
                            <Zap className="h-8 w-8" />
                        </div>
                        <h2 className="text-xl font-bold text-foreground mb-3">Getting Started</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7 mb-4">
                            Learn how to choose your first habit, set a daily action, and mark your first day as completed.
                        </p>
                        <Link href="/help" className="text-primary font-semibold hover:underline">
                            Read Guide &rarr;
                        </Link>
                    </div>

                    <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-800">
                        <div className="mb-4 text-emerald-500">
                            <Book className="h-8 w-8" />
                        </div>
                        <h2 className="text-xl font-bold text-foreground mb-3">Understanding Streaks</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7 mb-4">
                            How the streak logic works, what happens if you miss a day, and how to view your history.
                        </p>
                        <Link href="/help" className="text-emerald-500 font-semibold hover:underline">
                            Read Guide &rarr;
                        </Link>
                    </div>
                </div>

                <div className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Can I track multiple habits?</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                                No, HabitLoop is intentionally designed to focus on one habit at a time. Research suggests that focusing your willpower on a single daily action yields the highest chance of long-term success.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">My streak reset to zero!</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                                Streaks require daily completion. If you miss a 24-hour cycle, the streak resets. Don't worry about perfection; focus on starting the loop again today.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Is there an Android version?</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                                Yes, HabitLoop is available for both iOS and Android platforms via their respective app stores.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center">
                    <LifeBuoy className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-foreground mb-2">Still need help?</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                        Our support team is always ready to answer your questions.
                    </p>
                    <Link href="/contact" className="inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200">
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
}
