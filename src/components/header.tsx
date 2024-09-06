import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const navItems = [
    { href: "https://edu.ieee.org/eg-guc/", label: "Official Page" },
    { href: "https://www.facebook.com/IEEE.GUC.SB/", label: "Facebook" },
    { href: "https://www.instagram.com/ieeegucsb/?hl=en", label: "Instagram" },
  ];

  return (
    <header className="w-full bg-white shadow-md">
      <div className="py-2 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo.svg" alt="Logo" className="h-10 mr-2" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between">
          <ul className="flex space-x-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
