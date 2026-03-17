export const Footer = () => (
  <footer className="py-12 px-6 border-t border-muted bg-black">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <span className="font-display font-bold text-xl text-white">Dev.Portfolio</span>
        <p className="text-accent text-sm mt-2">© 2026. Todos os direitos reservados.</p>
      </div>
      <div className="flex gap-6 text-lightGray hover:text-white">
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">GitHub</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
      </div>
    </div>
  </footer>
);