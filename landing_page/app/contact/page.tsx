import { Mail, MessageSquare, Twitter, Github } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-white dark:bg-black min-h-screen pt-32 pb-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-8">Contact Us</h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
                    Have questions, feedback, or just want to say hi? We'd love to hear from you.
                </p>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <a
                        href="mailto:support@habitloop.app"
                        className="flex flex-col items-center justify-center p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 transition-all hover:border-primary hover:bg-primary/[0.02] group"
                    >
                        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-1">Email Support</h3>
                        <p className="text-sm text-zinc-500">support@habitloop.app</p>
                    </a>

                    <a
                        href="https://twitter.com/habitloop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 transition-all hover:border-primary hover:bg-primary/[0.02] group"
                    >
                        <div className="h-12 w-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 mb-4 group-hover:scale-110 transition-transform">
                            <Twitter className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-1">Follow Us</h3>
                        <p className="text-sm text-zinc-500">@habitloop</p>
                    </a>
                </div>

                <div className="mt-12 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        Feedback
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                        We are constantly improving HabitLoop based on user feedback. If you have a feature request or found a bug, please reach out. We read every single email.
                    </p>
                </div>
            </div>
        </div>
    );
}
