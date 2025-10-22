import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./PostRepository";
import { drizzelDB } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository {
  findById(id: string): Promise<PostModel> {
    throw new Error("Method not implemented.");
  }
  findBySlug(slug: string): Promise<PostModel> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<PostModel[]> {
    throw new Error("Method not implemented.");
  }
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzelDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
}

(async () => {
  const repo = new DrizzlePostRepository();
  const posts = await repo.findAllPublic();

  posts.forEach((post) => {
    console.log(post.slug, post.published);
  });
})();
