"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <div className="logo">
          <Link href="/" className="text-2xl font-bold text-primary">
            WildLife
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className="font-medium py-2 px-3 rounded-md hover:bg-primary-50 hover:text-primary transition-colors"
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                href="/animals"
                className="font-medium py-2 px-3 rounded-md hover:bg-primary-50 hover:text-primary transition-colors"
              >
                Các loài động vật
              </Link>
            </li>
            <li>
              <Link
                href="/habitats"
                className="font-medium py-2 px-3 rounded-md hover:bg-primary-50 hover:text-primary transition-colors"
              >
                Môi trường sống
              </Link>
            </li>
            <li>
              <Link
                href="/conservation"
                className="font-medium py-2 px-3 rounded-md hover:bg-primary-50 hover:text-primary transition-colors"
              >
                Bảo tồn
              </Link>
            </li>
            <li>
              <Link
                href="/explore"
                className="font-medium py-2 px-3 rounded-md hover:bg-primary-50 hover:text-primary transition-colors"
              >
                Góc khám phá
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-medium py-2 px-3 rounded-md hover:bg-primary-50 hover:text-primary transition-colors"
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>

        <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
            <ul className="flex flex-col p-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-4 hover:bg-primary-50 hover:text-primary rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/animals"
                  className="block py-2 px-4 hover:bg-primary-50 hover:text-primary rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Các loài động vật
                </Link>
              </li>
              <li>
                <Link
                  href="/habitats"
                  className="block py-2 px-4 hover:bg-primary-50 hover:text-primary rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Môi trường sống
                </Link>
              </li>
              <li>
                <Link
                  href="/conservation"
                  className="block py-2 px-4 hover:bg-primary-50 hover:text-primary rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bảo tồn
                </Link>
              </li>
              <li>
                <Link
                  href="/explore"
                  className="block py-2 px-4 hover:bg-primary-50 hover:text-primary rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Góc khám phá
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-4 hover:bg-primary-50 hover:text-primary rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

