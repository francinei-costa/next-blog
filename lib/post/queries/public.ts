import { postRepository } from "@/repositories/post";
import { unstable_cache, cacheLife, cacheTag } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPostsCachedOld = cache(
  //metodo antigo, mantido por compatibilidade
  unstable_cache(
    async () => {
      return await postRepository.findAllPublic();
    },
    ["posts"],
    {
      tags: ["posts"],
    },
  ),
);

export const findPublicPostBySlugCachedOld = cache((slug: string) => {
  //metodo antigo, mantido por compatibilidade
  return unstable_cache(
    async (slug: string) => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => undefined);

      if (!post) notFound();

      return post;
    },
    [`post-${slug}`],
    { tags: [`post-${slug}`] },
  )(slug);
});

export const findAllPublicPostsCached = cache(
  
  async () => {
    "use cache"; // Avisa o compilador para cachear esta função
    // Define o tempo de vida usando perfis predefinidos (ex: 'hours') ou customizados
    cacheLife("hours");
    // Define a tag para invalidação on-demand
    cacheTag("users-tag");
    // Os argumentos da função (ex: 'role') viram a chave do cache automaticamente!
    return await postRepository.findAllPublic();
  },
);

export const findPublicPostBySlugCached = cache(async (slug: string) => {
  "use cache";
  
  // Define o tempo de vida do cache
  // stale:      300 seconds (5 minutes)
  // revalidate: 3600 seconds (1 hour)
  // expire:     86400 seconds (1 day)

  // cacheLife("hours");
  // cacheLife("minutes");
  
  cacheLife("cincoMinutos");
  cacheTag(`post-${slug}`);

  return await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined)
    .then((post) => {
      if (!post) notFound();

      return post;
    });
});
