import { findAllPostAdmin } from "@/lib/post/admin-queries";
import clsx from "clsx";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export default async function PostsListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className='py-16'>
      {posts.map(post => {
        return (
          <div className={clsx(
            'py-2 px-2', !post.published && 'bg-slate-300', 'flex gap-2 items-center justify-between'
          )} key={post.id}>
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (<span className='text-xs text-slate-600 italic' >(Não Publicado)</span>)}

            <button className={clsx(
              'text-red-800 cursor-pointer transition',
              '[&_svg]:w-4 [&_svg]:h-4',
              'hover:scale-120'
            )}
              title={`Apagar post: ${post.title}`}>
              <Trash2 size={16}/>
            </button>
          </div>
        );
      })}
    </div>
  );
}