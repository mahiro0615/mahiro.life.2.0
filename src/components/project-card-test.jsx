import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 bg-white">
      <Image className="w-full" src={project.meta.image} alt="Project Image" width={400} height={200} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.meta.title}</div>
        <p className="text-gray-700 text-base">
          {project.meta.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
      </div>
    </div>
  );
}