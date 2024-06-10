"use client";

import { useState } from 'react';
import Link from 'next/link';
import { classNames } from '@/functions/class-names';

export function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full p-4 cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <Link href={`/projects/${project.meta.slug}`}>
        <div
          className={classNames(
            "relative w-full h-80 max-w-xs transition-transform duration-500 transform-style-preserve-3d mx-auto",
            isFlipped ? "transform rotateY-180" : ""
          )}
        >
      {/* Back of the card */}
         <div
            className="absolute w-full h-full card-border flex justify-center items-center backface-hidden rounded-lg"
          >
            <div className="w-full h-full card-inner-border flex flex-col justify-center items-center rounded-lg">
              <img src="/logo.png" alt="Logo" className="w-24 h-24 mt-42" />
              <h3 className="text-2xl font-bold text-center mb-10 font-Geo">{project.meta.title}</h3>
            </div>
          </div>
          {/* Front of the card */}
          <div
            className="absolute w-full h-full card-border transform rotateY-180 backface-hidden rounded-lg flex flex-col"
          >
            <div className="card-inner-border flex-grow flex flex-col justify-center items-center rounded-lg">
              <div className="card-header font-Geo">
                <p className="curved-text">{project.meta.title.split('.')[0]}</p>
                <div className="card-image-container">
                  <div className="card-image">
                    <img src={project.meta.image} alt="Project Image" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="curved-text">.{project.meta.title.split('.')[1]}</p>
              </div>
            </div>
            <div className="card-description flex-shrink-0">
              <p className="text-sm">{project.meta.description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}