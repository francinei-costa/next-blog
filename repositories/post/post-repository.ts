import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlugPublic(slug: string): Promise<PostModel>;
  // create(data: PostModel): Promise<void>;
  // update(id: string, data: PostModel): Promise<void>;
  // delete(id: string): Promise<void>;
}