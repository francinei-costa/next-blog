import { SinglePost } from "@/components/SinglePost";
import { SpinLoader } from "@/components/SpinLoader";
import { findPublicPostBySlugCached } from "@/lib/post/queries/public";
import { Metadata } from "next";
import { Suspense } from "react";

//export const revalidate = 10;//Revalidate every 10 seconds

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPublicPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

async function PostSlugContent({ params }: PostSlugPageProps) {
  const { slug } = await params;

  return <SinglePost slug={slug} />;
}

export default function PostSlugPage({ params }: PostSlugPageProps) {
  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      <PostSlugContent params={params} />
    </Suspense>
  );
}
