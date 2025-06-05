"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { MenuIcon } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 border-b dark:border-gray-700">
      <div className="text-xl font-bold">MyApp</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Button
          variant="outline"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 px-6">
              <Link
                href="/"
                className="hover:underline"
                onClick={() => document.body.click()}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:underline"
                onClick={() => document.body.click()}
              >
                About
              </Link>
              <Button
                variant="outline"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
