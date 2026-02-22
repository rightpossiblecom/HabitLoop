import { Check, Flame, Calendar, Settings, History } from "lucide-react";

export default function AppScreen() {
    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                            Experience Radical Simplicity.
                        </h2>
                        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-8">
                            We've designed HabitLoop to be the quietest app on your phone. No notifications, no social pressure, no complexity. Just the satisfaction of another day completed.
                        </p>
                        <ul className="space-y-4 text-left inline-block lg:block">
                            {[
                                "Clean, identity-focused interface",
                                "Prominent streak visualization",
                                "Simple history view",
                                "One-tap completion"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative flex-1">
                        {/* Phone Frame */}
                        <div className="relative mx-auto w-[300px] h-[600px] border-[8px] border-zinc-900 rounded-[3rem] bg-zinc-900 shadow-2xl overflow-hidden sm:w-[320px] sm:h-[640px]">
                            {/* Dynamic Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-zinc-900 rounded-b-2xl z-20"></div>

                            {/* App Content */}
                            <div className="absolute inset-0 bg-background flex flex-col pt-12">
                                <header className="px-6 py-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] text-zinc-500 font-medium">FEBRUARY 22</p>
                                        <h4 className="text-lg font-bold">Today</h4>
                                    </div>
                                    <div className="flex items-center gap-1 bg-gradient-to-br from-amber-400 to-orange-500 px-2.5 py-1 rounded-full text-white">
                                        <Flame className="h-3.5 w-3.5 fill-white" />
                                        <span className="text-xs font-bold">12</span>
                                    </div>
                                </header>

                                <main className="flex-1 flex flex-col items-center justify-center px-8 text-center">
                                    <div className="mb-8">
                                        <p className="text-xs text-zinc-500 mb-2 uppercase tracking-widest">Today's Action</p>
                                        <h3 className="text-2xl font-bold leading-tight">Read for<br />10 minutes</h3>
                                    </div>

                                    <button className="w-full aspect-square max-w-[180px] rounded-full bg-primary/5 border-2 border-primary/20 flex flex-col items-center justify-center transition-transform active:scale-95 group">
                                        <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform">
                                            <Check className="h-8 w-8 stroke-[3]" />
                                        </div>
                                        <span className="text-sm font-bold text-foreground">Mark Completed</span>
                                    </button>
                                </main>

                                <footer className="px-8 py-6 flex items-center justify-around border-t border-zinc-100 dark:border-zinc-800/50">
                                    <div className="flex flex-col items-center gap-1 text-primary">
                                        <Calendar className="h-5 w-5" />
                                        <span className="text-[10px] font-bold">Today</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-zinc-400">
                                        <History className="h-5 w-5" />
                                        <span className="text-[10px]">History</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-zinc-400">
                                        <Settings className="h-5 w-5" />
                                        <span className="text-[10px]">Settings</span>
                                    </div>
                                </footer>
                            </div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
