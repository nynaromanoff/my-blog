'use client'

import clsx from "clsx";
import { Trash2 } from "lucide-react";

type DeletePostButtonProps = {
  id: string;
  title: string;
}

export function DeletePostButton({id, title}: DeletePostButtonProps) {
  function handleClick() {
    alert('Botão Clicado' + id);
  }

  return(
    <button
      className={clsx(
        'text-red-800 cursor-pointer transition',
        '[&_svg]:w-4 [&_svg]:h-4',
        'hover:scale-125 hover:text-red-700'
      )}
      aria-label={`Apaga post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}
    >
      <Trash2 />
    </button>
  );
}