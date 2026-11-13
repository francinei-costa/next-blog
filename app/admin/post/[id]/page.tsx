import { ManagePostForm } from '@/components/admin/ManagePostForm';
import { makePublicPostFromDb } from '@/dto/post/dto';
import { findPostByIdAdmin } from '@/lib/post/queries/admin';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { SpinLoader } from '@/components/SpinLoader';

export const metadata: Metadata = {
  title: 'Editar post',
};

type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function AdminPostIdPage({ params }: AdminPostIdPageProps) {
  return (
    <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
      <AdminPostContent params={params} />
    </Suspense>
  );
}

async function AdminPostContent({ params }: AdminPostIdPageProps) {
  const { id } = await params;
  const post = await findPostByIdAdmin(id).catch(() => undefined);

  if (!post) notFound();

  const publicPost = makePublicPostFromDb(post);

  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-xl font-extrabold'>Editar post</h1>
      <ManagePostForm mode='update' publicPost={publicPost} />
    </div>
  );
}
