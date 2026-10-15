import type { PostModel } from "@/models/post/post-model";
import type { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
// const JSON_POST_FILE_PATH = `${ROOT_DIR}/posts.json`;
const JSON_POST_FILE_PATH = resolve(ROOT_DIR, "db", "seed", "posts.json");
const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) {
      return;
    }

    return new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POST_FILE_PATH, "utf-8");
    const { posts } = JSON.parse(jsonContent);

    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts.filter((post: PostModel) => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.id === id);
    if (!post) {
      throw new Error(`Post com id ${id} não encontrado`);
    }

    return post;
  }
}
