import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2.5 mb-6">
                            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-gradient-to-br from-primary to-secondary p-0.5">
                                <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-white dark:bg-zinc-950">
                                    <Image
                                        src="/logo.png"
                                        alt="HabitLoop Logo"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <span className="text-lg font-bold tracking-tight text-foreground">
                                Habit<span className="text-primary">Loop</span>
                            </span>
                        </Link>
                        <p className="max-w-xs text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                            One habit. Every day. The minimal streak tracker designed to help you stay consistent with what matters most.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#features" className="text-sm text-zinc-600 hover:text-primary dark:text-zinc-400">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="text-sm text-zinc-600 hover:text-primary dark:text-zinc-400">
                                    How it Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className="text-sm text-zinc-600 hover:text-primary dark:text-zinc-400">
                                    Help Center
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy-policy" className="text-sm text-zinc-600 hover:text-primary dark:text-zinc-400">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-zinc-600 hover:text-primary dark:text-zinc-400">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-zinc-600 hover:text-primary dark:text-zinc-400">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
                    <p className="text-center text-xs leading-5 text-zinc-500">
                        &copy; {currentYear} HabitLoop. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
