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
    bg: 'bg-cover bg-center bg-no-repeat',
    bgImg: "/decorations/about-banner.png",  
    text: 'text-white',
    hover: 'hover:text-amber-200',
    overlay: 'bg-gradient-to-b from-brand-brown via-brand-brown/30 to-transparent',
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
                    {/* <h3 className={linkCls}>UI/UX</h3>
                    <h3 className={linkCls}>Visual Design</h3>
                    <h3 className={linkCls}>New Media</h3> */}
                    <Link href='/' className={linkCls}>About</Link>
                    <Link href="paintings" className={linkCls}>
                        Paintings
                    </Link>
                </div>
            </nav>
        </header>
    );
}