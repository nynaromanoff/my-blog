import { postRepository } from "@/repositories/json-post-repository";
import { cache } from "react";

export const findAllPublicPosts = cache(
  async () =>  await postRepository.findAllPublic(),
); 