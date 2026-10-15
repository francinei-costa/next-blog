import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
    findAllPublic(): Promise<PostModel[]>;
     findById(id: string): Promise<PostModel | null>;
    // create(data: PostModel): Promise<void>;
    // update(id: string, data: PostModel): Promise<void>;
    // delete(id: string): Promise<void>;
}