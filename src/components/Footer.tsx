export default function Footer() {
  return (
    <footer className="bg-cream py-8 mt-16">
      <div className="container mx-auto text-center text-brand-brown">
        <p>&copy; {new Date().getFullYear()} Alison Zou. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/alison-zou/" target="_blank" className="hover:underline">LinkedIn</a>
          <a href="https://github.com/azzou02" target="_blank" className="hover:underline">GitHub</a>
          <a href="mailto:alisonzbb@gmail.com" className="hover:underline">Email</a>
        </div>
      </div>
    </footer>
  );
}