"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "Why only one habit?",
        answer: "Research shows that focusing on one change at a time significantly increases the success rate of habit formation. HabitLoop is designed to help you succeed, not to help you track failures across many habits.",
    },
    {
        question: "Is there a premium version?",
        answer: "HabitLoop is free to use for your primary habit. We focus on providing the cleanest, most effective tool without annoying ads or complex subscriptions.",
    },
    {
        question: "Where is my data stored?",
        answer: "Your data is stored locally on your device. We do not have servers that store your habit data, ensuring 100% privacy and offline availability.",
    },
    {
        question: "What happens if I miss a day?",
        answer: "Your streak resets to 0, but you'll see a motivational banner to help you start your loop again. Don't beat yourself up—the goal is to restart the loop as quickly as possible.",
    },
    {
        question: "Does it have reminders?",
        answer: "Reminders are coming in a future update. For now, we encourage users to pick a 'trigger' time in their daily routine to open the app and mark their habit.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-white dark:bg-black">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wide">FAQ</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Common Questions
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-all"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
                            >
                                <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-zinc-500" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-zinc-500" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="p-6 pt-0 text-base leading-7 text-zinc-500 dark:text-zinc-400 animate-slide-down">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
