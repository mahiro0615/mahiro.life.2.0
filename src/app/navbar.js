"use client" 
import { Content } from "@/components/content";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  
  const links = [
    { name: "words", href: "/words", icon: "📝" },
    { name: "projects", href: "/projects", icon: "💼" },
    { name: "collab", href: "/collab", icon: "🤝" },
  ];

  return (
    <Content as="div" className="py-8 mb-8 text-center sm:text-left">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link href="/" className="group font-bold flex items-center">
            <Image src="/logo.png" alt="Logo" width={30} height={30} className="mr-2" />  
            <span className="group-hover:hidden text-xl">MAHIRO</span>
            <span className="hidden group-hover:block text-pink-400 text-xl">Mahiro.Life</span>
          </Link> 
        </div>
        <nav className="w-full sm:w-auto">
          <ul className="flex justify-center gap-4 sm:gap-8 sm:justify-end">
            {links.map((link) => (
              <li key={link.name} className={`relative ${pathname === link.href ? 'text-gray-700' : 'text-gray-600'}`}>
                <Link href={link.href} className="flex items-center gap-2 decoration-gray-200 hover:decoration-gray-600 hover:text-gray-700 transition-colors duration-200 ease-in-out">
                  <span>{link.icon}</span>
                  <span className="relative">
                    {link.name}
                    {pathname === link.href && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-700"></span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Content>
  );
}