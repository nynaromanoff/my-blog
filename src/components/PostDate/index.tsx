import { formatDistanceNow, formateDatetime } from "@/utils/format-datetime"

type PostDateProps = {
  dateTime: string
}

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <>
      <time
        className="text-slate-600 text-sm"
        dateTime={dateTime}
        title={formatDistanceNow(dateTime)}
      >
        {formateDatetime(dateTime)}
      </time>
    </>
  )
}