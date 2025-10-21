/* eslint-disable @typescript-eslint/no-unused-expressions */
import { drizzelDB } from "."
import { postsTable } from "./schemas"

(async () => {
  const posts = await drizzelDB.select().from(postsTable);

  console.log(posts);
})();