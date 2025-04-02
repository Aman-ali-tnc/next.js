

export default function Home() {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-8">Welcome to my First Next.js project</h1>
    <a 
      href={`/allcountries`}
      className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      View all countries
    </a>
    </div>
  );
}
