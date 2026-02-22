export default function TermsOfService() {
    return (
        <div className="bg-white dark:bg-black min-h-screen pt-32 pb-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-8">Terms of Service</h1>
                <p className="text-sm text-zinc-500 mb-12">Last Updated: February 22, 2026</p>

                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                            By accessing or using the HabitLoop mobile application or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                            HabitLoop provides a minimalist habit-tracking tool designed for personal development. The service is provided "as is" and "as available." We reserve the right to modify or discontinue the service at any time without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                            You are responsible for maintaining the security of your device and the data stored within the HabitLoop application. Since we do not store your data on our servers, we cannot recover any lost data for you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. Prohibited Uses</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                            You agree not to use the service for any illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                            HabitLoop and its creators shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Info</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                            Questions about the Terms of Service should be sent to <span className="font-semibold text-primary">support@habitloop.app</span>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
