import { findAllPublicPosts } from "@/lib/post/queries";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export default async function PostFeatured() {
  const posts = await findAllPublicPosts();
  const post = posts[0];
  const slug ='qualquer';
  const postLink= `/post/${slug}`
  return(
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
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
        <PostSummary
          postLink={postLink}
          postHeading='h1'
          createdAt={post.createdAt}
          excerpt={
            post.excerpt
          }
          title={post.title}
      />
      </section>
  )
}