'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-footer-blue text-cream 
                       overflow-hidden min-h-[16rem]">

      <div className="absolute inset-x-0 bottom-[-0.2em] z-0 flex justify-start pl-22">
        <span className="select-none font-extrabold leading-none tracking-tight text-cream/35 text-[22vw] md:text-[14vw] lg:text-[12vw] whitespace-nowrap">
          alison zou
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-start justify-between">
          {/* left: copyright */}
          <div className="space-y-2">
            <p className="text-sm">&copy; {year} Alison Zou</p>
          </div>

          {/* right: icon links */}
          <div className="flex items-center gap-3">
            <IconLink
              href="https://www.linkedin.com/in/alison-zou/"
              label="LinkedIn"
              svg={
                /* LinkedIn */
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM14.5 9c-2.21 0-3.5 1.204-3.5 2.824V21h4v-6.49c0-.978.7-1.76 1.75-1.76 1.02 0 1.75.72 1.75 1.76V21h4v-7.49C22.5 10.83 20.67 9 18.25 9c-1.32 0-2.42.54-3.1 1.39V9h-0.65z"/>
                </svg>
              }
            />
            <IconLink
              href="https://github.com/azzou02"
              label="GitHub"
              svg={
                /* GitHub */
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.19-3.37-1.19-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.41-.01 2.74 0 .26.18.58.69.48A10 10 0 0 0 12 2z"/>
                </svg>
              }
            />
            <IconLink
              href="mailto:alisonzbb@gmail.com"
              label="Email"
              svg={
                /* Mail */
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2Zm2 5.2-8.97 5.6a2 2 0 0 1-2.06 0L2 9.2V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.2Z"/>
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Reusable rounded icon button that keeps your brown text color */
function IconLink({
  href,
  label,
  svg,
}: {
  href: string;
  label: string;
  svg: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-cream/20 hover:bg-cream/10 transition text-cream"
      title={label}
    >
      <span className="sr-only">{label}</span>
      {svg}
    </a>
  );
}
