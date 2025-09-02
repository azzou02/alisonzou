'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Theme = {
  bg: string; 
  text: string;
  hover: string;
};

const THEMES: Record<string, Theme> = {
  default: {
    bg: 'bg-cream',
    text: 'text-brand-brown',
    hover: 'hover:text-brand-orange',
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
        <header className={`${theme.bg} px-10 py-6`}>
            <nav className="flex justify-between items-center">
                <Link href="/" className={`text-2xl font-semibold ${linkCls}`}>
                    alison zou
                </Link>

                <div className="flex items-center space-x-8 text-lg">
                    {/* <h3 className={linkCls}>UI/UX</h3>
                    <h3 className={linkCls}>Visual Design</h3>
                    <h3 className={linkCls}>New Media</h3> */}
                    <Link href="paintings" className={linkCls}>
                        Paintings
                    </Link>
                </div>

            </nav>
        </header>
    );
}