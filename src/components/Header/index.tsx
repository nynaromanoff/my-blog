import clsx from "clsx";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <h1 className={clsx(
          'text-4xl/snug',
          'font-extrabold',
          'py-8',
          'sm: text-5xl sm: py-10',
          'md: text-5xl md: py-11',
          'lg: text-7 xl lg: py-12',
          )}>
        <Link href='/'>Bloggs</Link>
      </h1>
    </header>
  );
}