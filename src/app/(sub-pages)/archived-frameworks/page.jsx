import { getFrameworks } from "@/functions/get-frameworks";

export default function ArchivedFrameworks() {
  const frameworks = getFrameworks().filter(
    (framework) => framework.status === 'archived'
  );

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-4">Archived Mental Frameworks</h1>
      <div className="space-y-6">
        {frameworks.map((framework, index) => (
          <div key={index} className="p-4 border rounded shadow-sm">
            <h2 className="font-semibold">{framework.title}</h2>
            <p>{framework.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}