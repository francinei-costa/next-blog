import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { Suspense } from "react";
import Loading  from "./loading";

export default async function HomePage() {
  return (
    <Suspense fallback={<Loading className="min-h-20 mb-16" />}>
      <PostFeatured />
      <PostsList />
    </Suspense>
  );
}
