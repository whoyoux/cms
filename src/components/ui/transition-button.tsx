"use client";

import { type PropsWithChildren, useTransition } from "react";
import { Button, type ButtonProps } from "./button";

type TransitionButtonProps<T> = PropsWithChildren &
  ButtonProps & {
    action: () => Promise<T>;
    onEnd?: (data: T) => void;
  };

function TransitionButton<T>({
  action,
  onEnd,
  children,
  ...props
}: TransitionButtonProps<T>) {
  const [isPending, startTransition] = useTransition();

  const start = () => {
    startTransition(async () => {
      const res = await action();
      onEnd?.(res);
    });
  };

  return (
    <Button onClick={start} loading={isPending} {...props}>
      {isPending ? "Pending" : children}
    </Button>
  );
}

export { TransitionButton };
