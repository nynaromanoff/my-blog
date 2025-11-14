import { PostModel } from "@/models/post/post-model";
import { drizzelDB } from "@/db/drizzle";
import { PostRepository } from "./PostRepository";
import { logColor } from "@/utils/log-color";
import { format } from "date-fns";
import { asyncDelay } from "@/utils/async-delay";
import { SIMULATE_WAIT_IN_MS } from "@/constants/geral";

export class DrizzlePostRepository implements PostRepository {
  async findById(id: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('findById', Date.now());
    const post = await drizzelDB.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error("Post não encontrado pelo ID informado");

    return post;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('findBySlugPublic', format(new Date(), "dd-MM-yyyy'T'HH:mm:ss.SSS"));
    const post = await drizzelDB.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error("Post não encontrado pelo Slug informado");

    return post;
  }
  async findAll(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('findAll', Date.now());
    const posts = await drizzelDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }
  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('findAllPublic', format(new Date(), "dd-MM-yyyy'T'HH:mm:ss.SSS"));
    const posts = await drizzelDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
}
