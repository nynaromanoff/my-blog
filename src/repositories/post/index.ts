import { DrizzlePostRepository } from "./drizzle-post-repository";
import { PostRepository } from "./PostRepository";

export const postRepository: PostRepository = new DrizzlePostRepository();
