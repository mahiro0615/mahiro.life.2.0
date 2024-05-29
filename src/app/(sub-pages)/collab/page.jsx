import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { MailIcon, PhoneIcon, UserIcon } from '@heroicons/react/outline';
import Image from 'next/image';




export const metadata = {
  title: "Collab",
  description:
    "Lets collab and by collab, I mean lets be in each other's life",

  alternates: {
    canonical: `/collab`,
  },
};

export default async function CollabPage() {
  return (
    <div className="space-y-8">
      <Header>
      <h1 className = 'block mb-6 text-2xl font-bold'> Let&apos;s collab </h1>
          
        <p className = 'font-Default'>
         And by collab, I mean let&apos;s be part of each other&apos;s lives. Whether through facetime, text, or even you visiting me in Japan!? Or if you have some cool ideas(or not cool ideas), we can play catch with thoughts. Honestly whatever is cool, I&apos;m a social creature and I would love me some human interaction in any form.
        </p>
      
      </Header>
      <Content>
       

    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mt-6 transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <Image src="/image/profile-picture.jpg" alt="Profile Picture" width={500} height={500}/>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
      <div className="p-6">
      <p className = 'flex text-2xl font-bold justify-center'> Mahiro Yamakawa</p>
        <div className="flex items-center justify-center mt-4">
          <Image src="/image/whatsapp-icon.png" alt="WhatsApp Icon" width={24} height={24}/>
          <p className="text-black ml-2 font-medium">+1-860-280-1300 (WhatsApp)</p>
        </div>
        <div className="flex items-center justify-center mt-2">
          
          <MailIcon className="h-6 w-6 text-gray-600 dark:text-gray-400"/>
          <p className="text-gray-600 dark:text-gray-400 ml-2">
            <a href="mailto:mahiro.life.me@gmail.com" className="text-blue-500 hover:underline">mahiro.life.me@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  

    
      </Content>
    </div>
  );
}