export default function PrivacyPolicy() {
    return (
        <div className="bg-white dark:bg-black min-h-screen pt-32 pb-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-8">Privacy Policy</h1>
                <p className="text-sm text-zinc-500 mb-12">Last Updated: February 22, 2026</p>

                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                            At HabitLoop, we believe that your data is yours and yours alone. This Privacy Policy explains how we handle your information when you use our mobile application and website. Our core philosophy is "Privacy by Design," meaning we build our features to minimize data collection from the start.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Data Collection</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7 font-semibold mb-2">
                            We do not collect any personal data.
                        </p>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                            HabitLoop does not require you to create an account. We do not collect your name, email address, phone number, or any other personally identifiable information. Your habit names and completion history are stored exclusively on your device.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Storage</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                            All data related to your habits and streaks is stored locally on your device using industry-standard local storage mechanisms. We do not have servers that store this data, and we do not have access to it. If you delete the app, your data will be permanently removed from your device.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Services</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                            HabitLoop does not use third-party analytics or tracking services. We do not share any information with advertisers or any other third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                            If you have any questions about this Privacy Policy, please contact us at <span className="font-semibold text-primary">support@habitloop.app</span>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
