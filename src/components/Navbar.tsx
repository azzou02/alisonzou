'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Theme = {
  bg: string; 
  bgImg?: string;
  text: string;
  hover: string;
  overlay?: string;
};

const THEMES: Record<string, Theme> = {
  default: {
    // bg: 'bg-cover bg-center bg-no-repeat',
    bg: 'bg-white',
    // bgImg: "/decorations/about-banner.png",  
    // text: 'text-white',
    text: 'text-brand-brown',
    hover: 'hover:text-amber-200',
    // overlay: 'bg-gradient-to-b from-brand-pink/60 via-orange-500/50 to-transparent',
  },
  '/paintings': {
    bg: 'bg-white',
    text: 'text-brand-brown',
    hover: 'hover:text-brand-orange',
  },
 };

export default function Navbar() {
    const pathname = usePathname();
    const theme = THEMES[pathname] ?? THEMES.default;

    const linkCls = `${theme.text} ${theme.hover}`;

    return(
        <header className={`${theme.bg} px-10 py-6 relative`}
                style={theme.bgImg ? { backgroundImage: `url(${theme.bgImg})` } : undefined}>
            
            {theme.overlay && (
              <div className={`absolute inset-0 z-0 pointer-events-none ${theme.overlay}`} />
            )}
            
            <nav className="relative z-10 flex justify-between items-center">
                <Link href="/" className={`text-2xl font-semibold ${linkCls}`}>
                    alison zou
                </Link>

                <div className="flex items-center space-x-8 text-lg">
                    {/* <Link href='/' className={linkCls}>UI/UX</Link>
                    <Link href='/' className={linkCls}>New Media</Link> */}
                    <Link href='visuals' className={linkCls}>Visual Work</Link>
                    <Link href="paintings" className={linkCls}>Paintings</Link>
                    <Link href='/' className={linkCls}>About</Link>
                </div>
            </nav>
        </header>
    );
}