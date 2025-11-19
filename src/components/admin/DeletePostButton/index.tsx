'use client'

import { deletePostAction } from "@/action/post/delete-post-action";
import { IconButton } from "@mui/material";
import clsx from "clsx";
import { Trash2 } from "lucide-react";
import { useState, useTransition } from "react";
import { DialogComponent } from "../DialogComponent";

type DeletePostButtonProps = {
  id: string;
  title: string;
}

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPeding, startTrasition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);


  async function handleClick() {
    setShowDialog(true);
  }

  function handleClickConfirm() {
    startTrasition(async () => {
      const result = await deletePostAction(id);
      alert(`O result is: ${result}`);
      setShowDialog(false);
    })
  }

  return (
    <>
      <div className={clsx(
        'hover:scale-125 hover:text-red-700',
        '[&_svg]:w-4 [&_svg]:h-4',
        'disabled:text-slate-600 disabled:cursor-not-allowed'
      )}>
        <IconButton sx={{
          color: '#cc0000'
        }}
          aria-label={`Apaga post: ${title}`}
          title={`Apagar post: ${title}`}
          disabled={isPeding}
          onClick={handleClick}
        >
          <Trash2 />
        </IconButton>
      </div>
      {showDialog &&
        <DialogComponent
          isVisible={showDialog}
          title='Deseja apagar post?'
          content={`Tem certeza que deseja apagar o post: ${title} `}
          onCancel={() => setShowDialog(false)}
          onConfirm={handleClickConfirm}
        />}
    </>
  );
}