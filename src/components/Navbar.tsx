import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Terms", href: "/terms" },
    { name: "Contact", href: "/contact" },
  ];

  const isExternalLink = (href: string) => href.startsWith("/#");
  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-lg shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-3">
              <img src={logo} alt="AM Enterprises Logo" className="h-14 w-auto" />
              <div className="hidden sm:block">
                <h1 className="font-bold text-xl text-foreground">AM Enterprises</h1>
                <p className="text-xs text-muted-foreground">360° Digital Agency</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) =>
              isExternalLink(link.href) ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-foreground hover:text-primary transition-smooth rounded-lg hover:bg-muted"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 transition-smooth rounded-lg hover:bg-muted ${
                    isActive(link.href) ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-elegant" asChild>
              <Link to="/about">Free Audit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-smooth"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 space-y-3">
              {navLinks.map((link) =>
                isExternalLink(link.href) ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 hover:bg-muted rounded-lg transition-smooth ${
                      isActive(link.href) ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="pt-4">
                <Button className="w-full bg-gradient-primary" asChild>
                  <Link to="/about">Get Free Audit</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
