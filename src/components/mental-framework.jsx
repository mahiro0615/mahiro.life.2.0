import Link from 'next/link';

export function MentalFramework({ currentFrameworks, archivedLink }) {
  return (
    <section>
      <div className="flex items-center space-x-2 mb-6">
        <h2 className="text-md font-bold flex items-center">
          <span className="mr-2">📦</span> Mental Frameworks
        </h2>
        <p className="text-gray-500"> - shortcuts to help me navigate through life</p>
      </div>
      <div className="space-y-8">
        {currentFrameworks.map((framework, index) => (
          <div key={index} className="space-y-4 pl-4 border-l-2 border-gray-200">
            <h3 className="text-md font-geo">{framework.title}</h3>
            <p className="text-gray-700">{framework.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 pl-4">
        <Link href={archivedLink}>
          <div className="text-blue-600 hover:underline text-sm text-right">View Archived Mental Frameworks</div>
        </Link>
      </div>
    </section>
  );
}