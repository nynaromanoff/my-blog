import { postRepository } from "@/repositories/json-post-repository";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { formatDistanceNow, formateDatetime } from "@/utils/format-datetime";
import { formatDate } from "date-fns";


export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {posts.map(post => {
        const postLink = `/post/${post.slug}`
        return( 
        <div className='flex flex-col gap-4 group' key={post.id}>
          <PostCoverImage
                    linkProps={{
                      href: postLink,
                    }}
                    imageProps={{
                      width: 1200,
                      height: 720,
                      src: post.coverImageUrl,
                      alt: post.title,
                      priority: true,
                    }}
                  />
                  <div className="flex flex-col gap-4 sm:justify-center">
                    <time 
                      className="text-slate-600 text-sm" 
                      dateTime={post.createdAt}
                      title={formatDistanceNow(post.createdAt)}
                      >
                        {formateDatetime(post.createdAt)}
                    </time>
                    <PostHeading url={postLink} as='h2'>
                      {post.title}
                    </PostHeading>
                    <p>{post.excerpt}</p>
                  </div>
        </div>
        );
      })}
    </div>
  );
}