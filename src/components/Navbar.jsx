import Link from "next/link";

const navItems = [
  { id: "techstack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <div className="w-full mb-4 border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="hidden sm:flex w- text-lg sm:text-xl font-bold text-green-500 tracking-tight"
        >
          KL
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4 md:gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs sm:text-sm md:text-sm text-secondary relative bg-muted-foreground inline-flex items-center justify-center overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-700 px-3 sm:px-4 py-1.5 font-medium shadow-sm transition-all duration-300 ease-in-out hover:border-transparent hover:text-white hover:shadow-lg hover:bg-gradient-to-r hover:from-green-400 hover:via-emerald-500 hover:to-lime-500"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
