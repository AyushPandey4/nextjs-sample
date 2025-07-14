'use client'
import { useParams } from "next/navigation";

export default function BlogPost() {
  const params = useParams();
  const { slug } = params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Blog Post</h1>
      <p>This is a test UI for the dynamic blog post route.</p>
      <p>
        <strong>Slug:</strong> {slug}
      </p>
    </div>
  );
}
