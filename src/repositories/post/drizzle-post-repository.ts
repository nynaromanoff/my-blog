import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "../PostRepository";
import { drizzelDB } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository {
  findBySlug(slug: string): Promise<PostModel> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<PostModel> {
    const post = await drizzelDB.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error("Post não encontrado pelo ID informado");

    return post;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post = await drizzelDB.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error("Post não encontrado pelo Slug informado");

    return post;
  }
  async findAll(): Promise<PostModel[]> {
    console.log("\n", "D findAll", "\n");
    const posts = await drizzelDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }
  async findAllPublic(): Promise<PostModel[]> {
    console.log("\n", "D findAllPublic", "\n");
    const posts = await drizzelDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
}
