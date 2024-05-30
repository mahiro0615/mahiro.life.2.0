import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./navbar";
import { Content } from "@/components/content";
import Image from 'next/image';

export const metadata = {
  title: "Mahiro Yamakawa",
  description: "Mahiro Yamakawa's Life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head> 
       <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
       <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
       <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
       <link rel="manifest" href="/site.webmanifest"></link>
     </head>
      <body className=" bg-background dark:bg-black dark:text-white">
        <Navbar />
        <main>{children}</main>
        <Content as="footer" className="py-20 flex items-center space-x-4">
          <p className="opacity-100 font-Default text-gray-400" >
            Sweeping the garden while enjoying the beauty of it. Working on the website while being content with it.
          </p>
          <Image
        src="/logo-words.png" 
        alt="Footer logo"
        width="85"
        height="85"
      />
  
        </Content>
      </body>
      <Analytics />
    </html>
  );
}
