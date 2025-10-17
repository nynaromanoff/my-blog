import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export default function PostFeatured() {
  return(
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{
            href: '/post/asdfasdf',
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: '/images/2.png',
            alt: 'Alt da imagem',
            priority: true,
          }}
        />
        <div className="flex flex-col gap-4 sm:justify-center">
          <time 
            className="text-slate-600 text-sm" 
            dateTime="2025-10-16">16/10/2025 11:00h</time>
          <PostHeading url="#" as='h1'>
              Impedit ullam harum blanditiis
            mollitia?
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
            dolorem est dolor porro, doloribus neque, quidem mollitia doloremque,
            ad perspiciatis fugiat. Rerum, vel ex? 
          </p>
        </div>
      </section>
  )
}