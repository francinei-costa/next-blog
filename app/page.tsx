import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { Suspense } from "react";
import { SpinLoader } from "@/components/SpinLoader";

export default async function HomePage() {
  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      <PostFeatured />
      <PostsList />
    </Suspense>
  );
}
