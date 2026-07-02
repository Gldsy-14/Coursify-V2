export default function Home() {
  return (
    <>
      {/*TopNavBar (Shared Component)*/}
      <header className="bg-surface border-b border-outline-variant docked full-width top-0 z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto font-body-md text-body-md">
          {/*Brand*/}
          <div className="font-headline-md text-headline-md font-bold text-primary">
            Coursify
          </div>
          {/*Navigation Links (Desktop)*/}
          <nav className="hidden md:flex items-center gap-6">
            {/*Active Item*/}
            <a
              className="text-primary font-bold border-b-2 border-primary pb-1 cursor-pointer active:opacity-80"
              href="#"
            >
              Explore
            </a>
            {/*Inactive Items*/}
            <a
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80"
              href="#"
            >
              About
            </a>
          </nav>
          {/*Actions*/}
          <div className="flex items-center gap-4">
            <div className="hidden md:block relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                search
              </span>
              <input
                className="pl-9 pr-4 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest text-body-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Search..."
                type="text"
              />
            </div>
            <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-tint hover:text-white transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {/*Hero Section*/}
        <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 max-w-container-max mx-auto flex flex-col items-center text-center">
          <h1 className="font-headline-xl text-headline-xl text-on-background max-w-4xl mb-6">
            Elevate your career with world-class education
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
            Join thousands of students and professionals learning from top
            instructors. Master new skills in a clean, distraction-free
            environment designed for success.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-surface-tint hover:text-white transition-colors shadow-sm">
              Browse Courses
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">
              View Pricing
            </button>
          </div>
        </section>
        {/*Featured Courses Section (Bento Grid Style)*/}
        <section className="px-margin-mobile md:px-margin-desktop py-16 bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-background mb-2">
                  Featured Courses
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Top-rated programs to advance your knowledge.
                </p>
              </div>
              <a
                className="hidden md:flex items-center gap-1 text-primary hover:underline font-label-md text-label-md"
                href="#"
              >
                See all
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {/*Course Card 1*/}
              <div className="group bg-surface rounded-2xl border border-outline-variant overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="h-48 w-full bg-surface-container-high relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="A clean, minimalist 3D rendering of an abstract geometric scene in soft blue and white tones, representing data structures and modern programming concepts, well-lit studio lighting, corporate modern aesthetic."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq251ZhH9itppTo4mfc-66pWcaldbdPPDndBl_uzYtTX6CgYlcnvj1_tisasmhk0jemYi6TFV3Y5IJW3zPVofphlFYD6l_jsIA1hlZpcrNQZ-Bnx9N92mXFEwQr_SIeLtWXkqNxRxRQinQEJUeOrTmdrVaRYKMGfFmM4Yp1yAeuyIF9b2_TIE9di2OIoT13hMc4erQiE59i5lEYWXFZVfAiOsjyyxeKULYe8dv8B-Le_Do-usq3k_aLzEzrzl742DkR9ybdMakielK"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded-md font-label-sm text-label-sm uppercase tracking-wider">
                      Technology
                    </span>
                    <span className="font-headline-md text-headline-md text-primary">
                      $149
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-background mb-1">
                    Advanced Data Structures
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                    By Dr. Emily Chen
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-base">
                      schedule
                    </span>
                    12 Weeks
                    <span className="material-symbols-outlined text-base ml-4">
                      star
                    </span>
                    4.9 (2k+ reviews)
                  </div>
                </div>
              </div>
              {/*Course Card 2*/}
              <div className="group bg-surface rounded-2xl border border-outline-variant overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="h-48 w-full bg-surface-container-high relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="A sleek, top-down view of a modern designer's workspace with a pristine white desk, minimalist wireframe sketches on a tablet, and subtle blue lighting accents, professional and clean aesthetic."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxuUhWOlxZ8ekhERifI7Lx494GqohHf58KBOt3NyenBHJghcSl1DHt6ocgOj5SRq5lVCoBls-NVDXVm8iDQ6kUFBu8DvV14CofrXtYOgNqXQKkLrJnxAFHFcOsEIT5MnmaIVqQoBBzE82lUDwS7eZuuandtpKT_Zpchsa_CTJCOI5jd2ZYvS7jOBiW8AZmO0xui6JLA2uDnaPg2tcKtw8BfEqLFUKqCRtj1MfiuzzikoSF52R0lHNfnaZvinC93sCq_9lqJvzQeU4X"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 rounded-md font-label-sm text-label-sm uppercase tracking-wider">
                      Design
                    </span>
                    <span className="font-headline-md text-headline-md text-primary">
                      $99
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-background mb-1">
                    UI/UX Systems Engineering
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                    By Marcus Thorne
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-base">
                      schedule
                    </span>
                    8 Weeks
                    <span className="material-symbols-outlined text-base ml-4">
                      star
                    </span>
                    4.8 (1.5k+ reviews)
                  </div>
                </div>
              </div>
              {/*Course Card 3*/}
              <div className="group bg-surface rounded-2xl border border-outline-variant overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="h-48 w-full bg-surface-container-high relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="A sophisticated abstract composition featuring rising bar charts and ascending line graphs rendered in frosted glass material against a soft white background with deep blue gradients, conveying business growth and analytics."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbiY5IC-2tXwnDbzopUvhVmw0Xwwpol2n26Gi5sq2aeTo631EnM7QoXJo2VgD-Kx-uP67o0DxnSnKjGUuGtT36gIRfiUWbg20BNpyVoysXUQUje0NikJrm3xkRFuUDSI0mHb7ABUGgLqIh2MHVjitLXV1ai00tyT-zcKoIqbCLBXbqAUE5E-Ks3S6cRIndtKRLoPjz33eZsSntpAfdJ9o-6jx_6yNfpCYx2B_SuNPNzcwT4793BifdGyRmNu2gi_pLPXB5PvC3gHn"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded-md font-label-sm text-label-sm uppercase tracking-wider">
                      Business
                    </span>
                    <span className="font-headline-md text-headline-md text-primary">
                      $199
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-background mb-1">
                    Strategic Product Management
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                    By Sarah Jenkins
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-base">
                      schedule
                    </span>
                    10 Weeks
                    <span className="material-symbols-outlined text-base ml-4">
                      star
                    </span>
                    5.0 (800+ reviews)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*How It Works Section*/}
        <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 max-w-container-max mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
              How Coursify Works
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              A streamlined experience designed for both learners and educators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/*Students*/}
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant shadow-sm relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-fixed rounded-full opacity-20 blur-2xl"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background">
                  For Students
                </h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-primary font-bold">01</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-background mb-1">
                      Discover
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Browse hundreds of curated courses across various
                      disciplines.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold">02</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-background mb-1">
                      Enroll
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Secure your spot with transparent pricing and flexible
                      payment options.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold">03</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-background mb-1">
                      Learn &amp; Certify
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Engage with pristine content interfaces and earn
                      verifiable certificates.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/*Instructors*/}
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant shadow-sm relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-secondary-fixed rounded-full opacity-20 blur-2xl"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined">co_present</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background">
                  For Instructors
                </h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">01</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-background mb-1">
                      Create
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Use our minimalist tools to build structured, high-quality
                      syllabi.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">02</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-background mb-1">
                      Manage
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Track student progress and engagement through clean
                      dashboard analytics.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">03</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-background mb-1">
                      Earn
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Monetize your expertise with fair revenue sharing and
                      automated payouts.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      {/*Footer (Shared Component)*/}
      <footer className="bg-surface-container-lowest border-t border-outline-variant full-width">
        <div className="w-full py-stack-lg px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-base max-w-container-max mx-auto font-body-sm text-body-sm">
          <div className="font-headline-md text-headline-md font-bold text-primary mb-4 md:mb-0">
            Coursify
          </div>
          <nav className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer opacity-90"
              href="#"
            >
              Terms
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer opacity-90"
              href="#"
            >
              Privacy
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer opacity-90"
              href="#"
            >
              Support
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer opacity-90"
              href="#"
            >
              Contact
            </a>
          </nav>
          <div className="text-secondary">
            © 2024 Coursify Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
