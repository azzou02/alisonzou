'use client';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi'; 

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-footer-blue text-cream 
                       overflow-hidden min-h-[16rem]">

      <div className="absolute inset-x-0 bottom-[.2em] z-0 flex justify-start pl-22">
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
              icon={<FaLinkedin size={20} />} // Use the icon component
            />
            <IconLink
              href="https://github.com/azzou02"
              label="GitHub"
              icon={<FaGithub size={20} />} // Use the icon component
            />
            <IconLink
              href="mailto:alisonzbb@gmail.com"
              label="Email"
              icon={<HiMail size={20} />} // Use the icon component
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
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
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
      {icon}
    </a>
  );
}
