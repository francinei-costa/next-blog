import { postRepository } from "@/repositories/post";
import { cache } from "react";


export const findAllPublicPostsCached = cache(async () => {
  return await postRepository.findAllPublic();
});

export const findByIdPostCached = cache(async (id: string) => {
  return await postRepository.findById(id);
});

export const findBySlugPostCached = cache(async (slug: string) => {
  return await postRepository.findBySlugPublic(slug);
});