import Link from 'next/link';

export default function Navbar() {
    return(
        <header className="bg-cream px-10 py-6">
            <nav className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-semibold text-brand-brown">
                    alison zou
                </Link>

                <div className="flex items-center space-x-8 text-lg">
                    <h3 className="text-brand-brown hover:text-brand-orange">UI/UX</h3>
                    <h3 className="text-brand-brown hover:text-brand-orange">Visual Design</h3>
                    <h3 className="text-brand-brown hover:text-brand-orange">New Media</h3>
                    <h3 className="text-brand-brown hover:text-brand-orange">Creative Fun</h3>
                </div>

            </nav>
        </header>
    );
}