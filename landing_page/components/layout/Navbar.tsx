"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? "border-b border-zinc-200/50 bg-white/70 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-black/70"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-secondary p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white dark:bg-zinc-950">
                            <Image
                                src="/logo.png"
                                alt="HabitLoop Logo"
                                width={28}
                                height={28}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Habit<span className="text-primary">Loop</span>
                    </span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="#features"
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-primary dark:text-zinc-400"
                    >
                        Features
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-primary dark:text-zinc-400"
                    >
                        How it Works
                    </Link>
                    <Link
                        href="#faq"
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-primary dark:text-zinc-400"
                    >
                        FAQ
                    </Link>
                </div>

                <div>
                    <Link
                        href="#download"
                        className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:scale-105 active:scale-95"
                    >
                        Get the App
                    </Link>
                </div>
            </div>
        </nav>
    );
}
