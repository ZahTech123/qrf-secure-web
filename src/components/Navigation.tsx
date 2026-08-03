
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Response Model', href: '#response-model' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#eef3f7]/92 backdrop-blur-xl shadow-sm' : 'bg-[#eef3f7]/80 backdrop-blur-md'
      }`}>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                <img
                  src="/qrf-favicon-64x64.png"
                  alt="QRF Communications"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="hidden sm:block leading-tight">
                <span className="block text-lg font-black text-slate-950">QRF Communications</span>
                <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Security Response</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-5 rounded-full border border-slate-200 bg-white/70 px-5 py-3 shadow-sm lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-bold text-slate-600 transition-colors hover:text-cyan-700"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <Button
                className="rounded-md bg-slate-950 px-5 font-black text-white hover:bg-cyan-500 hover:text-slate-950"
                onClick={() => handleNavClick('#contact')}
              >
                Request Assessment
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center space-x-2 lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button aria-label="Open navigation menu" variant="ghost" size="icon" className="rounded-full bg-white text-slate-950 shadow-sm ring-1 ring-slate-200 hover:bg-white">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] border-slate-200 bg-white">
                  <div className="mt-6 flex items-center gap-3">
                    <img src="/qrf-favicon-64x64.png" alt="QRF Communications" className="h-11 w-11 rounded-xl bg-white object-contain ring-1 ring-slate-200" />
                    <div>
                      <p className="font-black text-slate-950">QRF Communications</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Security Response</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-5 mt-10">
                    {navItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavClick(item.href)}
                        className="text-left text-lg font-bold text-slate-700 transition-colors hover:text-cyan-700"
                      >
                        {item.label}
                      </button>
                    ))}
                    <Button className="mt-4 rounded-md bg-slate-950 font-black text-white hover:bg-cyan-500 hover:text-slate-950" onClick={() => handleNavClick('#contact')}>
                      Contact QRF
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
