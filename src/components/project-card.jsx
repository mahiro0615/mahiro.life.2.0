"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { classNames } from '@/functions/class-names';

export default function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const getStatusLogo = (status) => {
    switch (status) {
      case 'active':
        return '/image/active.png';
      case 'dormant':
        return '/image/dormant.png';
      case 'incubating':
        return '/image/incubating.png';
      default:
        return '/image/active.png';
    }
  };

  const getStatusBackgroundImage = (status) => {
    switch (status) {
      case 'active':
        return '/image/active-real.png';
      case 'dormant':
        return '/image/dormant-real.png';
      case 'incubating':
        return '/image/incubating-real.png';
      default:
        return '/image/active-real.png';
    }
  };

  return (
    <Link href={`/projects/${project.meta.slug}`}>
      <div
        className="relative w-full p-4 cursor-pointer perspective-1000"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          className={classNames(
            "relative w-full max-w-sm h-72 sm:h-80 md:h-96 transition-transform duration-500 transform-style-preserve-3d mx-auto",
            isFlipped ? "rotateY-180" : ""
          )}
        >
          {/* Front of the card */}
          <div className="absolute w-full h-full rounded-3xl bg-[#f5f5f5] shadow-2xl backface-hidden flex flex-col justify-center items-center">
            <div className="relative w-24 h-24 mb-4">
              <Image src={getStatusLogo(project.meta.status)} alt="Status Logo" width={96} height={96} className="rounded-full" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{project.meta.title}</h3>
          </div>

         {/* Back of the card */}
         <div className="absolute w-full h-full rounded-3xl shadow-2xl transform rotateY-180 backface-hidden flex flex-col">
            <div className="relative w-full h-1/2 overflow-hidden rounded-t-3xl">
              <Image src={getStatusBackgroundImage(project.meta.status)} alt="Project Poster" fill className="object-cover rounded-t-3xl object-top" />
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black via-transparent to-transparent flex flex-col justify-center items-center p-4">
                <h3 className="text-2xl font-bold text-white uppercase text-center">{project.meta.title}</h3>
              </div>
            </div>
            <div className="w-full h-1/2 bg-[#f5f5f5] flex flex-col p-4 rounded-b-3xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">{project.meta.title}</h4>
              <p className="text-gray-600 text-sm text-center mb-4">{project.meta.description}</p>
              </div>
            </div>
          </div>
        </div>

    </Link>
  );
}