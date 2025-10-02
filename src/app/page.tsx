import LinkForm from "@/components/LinkForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-indigo-700">🔗 Link Shortener</h1>
        <p className="text-gray-600">Paste a URL and get a short link instantly</p>
        <LinkForm />
      </div>
    </main>
  );
}
