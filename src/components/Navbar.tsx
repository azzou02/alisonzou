'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Theme = {
  bg: string; 
  bgImg?: string;
  text: string;
  hover: string;
  navContainer?: string;
};

const THEMES: Record<string, Theme> = {
  default: {
    bg: 'bg-cover bg-center bg-no-repeat',
    bgImg: "/decorations/about-banner.png",  
    text: 'text-white',
    // text: 'text-brand-brown',
    hover: 'hover:text-amber-200',
    navContainer: 'bg-orange-400/75 px-4 py-1',
  },
  '/paintings': {
    bg: 'bg-brand-blue',
    text: 'text-white',
    hover: 'hover:text-pink-200',
    navContainer: 'px-4 py-1',
  },
  '/visuals': {
    bg: 'bg-white',
    text: 'text-brand-blue',
    hover: 'hover:text-brand-pink',
    navContainer: 'px-4 py-1',
  },
 };

export default function Navbar() {
    const pathname = usePathname();
    const theme = THEMES[pathname] ?? THEMES.default;

    const linkCls = `${theme.text} ${theme.hover}`;

    return(
        <header className={`${theme.bg} px-10 py-6 relative`}
                style={theme.bgImg ? { backgroundImage: `url(${theme.bgImg})` } : undefined}>
            
            <nav className="relative z-10 flex justify-between items-center">
                <Link href="/" className={`text-2xl font-semibold pl-4 ${theme.navContainer || ''} ${linkCls}`}>
                    alison zou
                </Link>

                <div className={`flex items-center space-x-8 text-lg ${theme.navContainer || ''}`}>
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