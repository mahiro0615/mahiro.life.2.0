import { Content } from "@/components/content";
import { classNames } from "@/functions/class-names";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <Content
      as="div"
      className="grid py-8 gap-8 sm:grid-cols-3 mb-8 text-center sm:text-left"
    >
      <div className="col-span-1 flex items-center">
        <Link href="/" className="group font-bold flex items-center">
          <Image src="/logo.png" alt="Logo" width={30} height={30} className="mr-2" />  
          <span className="group-hover:hidden">MAHIRO</span>
          <span className="hidden group-hover:block text-pink-400">
            Mahiro.Life
          </span>
        </Link> 
      </div>
      <nav className="col-span-2 ml-auto">
        <ul className="flex gap-x-8">
          {[
            { name: "words", href: "/words" },
            { name: "projects", href: "/projects" },
            { name: "collab", href: "/collab" },
          ].map((link) => (
            <li
              key={link.name}
              className="decoration-gray-200 hover:decoration-gray-600 duration-200 hover:text-pink-400"

         >

             <Link href={link.href}>{link.name}</Link>
             

            </li>
          ))}
        </ul>
      </nav>

    </Content>
  );
}
