import { DrizzlePostRepository } from "./drizzle-post-repository";
import { JsonPostRepository } from "./json-post-repository";
import { PostRepository } from "./post-repository";
// mockado
// export const postRepository: PostRepository = new JsonPostRepository();
// base de dados
export const postRepository: PostRepository = new DrizzlePostRepository();
