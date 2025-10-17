import { formatDistanceNow, formateDatetime } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";

type PostSummaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
}

export async function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time 
        className="text-slate-600 text-sm" 
        dateTime={createdAt}
        title={formatDistanceNow(createdAt)}
        >
          {formateDatetime(createdAt)}
      </time>
      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  )
}