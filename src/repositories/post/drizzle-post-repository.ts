import { PostModel } from "@/models/post/post-model";
import { drizzelDB } from "@/db/drizzle";
import { PostRepository } from "./PostRepository";

export class DrizzlePostRepository implements PostRepository {
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
    const posts = await drizzelDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzelDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
}
