"use client";

import type { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import styles from "./Dialog.module.scss";

type DialogProps = {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children?: ReactNode;
};

export default function Dialog({
  open,
  title,
  description,
  onClose,
  children,
}: DialogProps) {
  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          onClose();
        }
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={styles.overlay} />
        <DialogPrimitive.Content className={styles.panel}>
          <div className={styles.header}>
            <DialogPrimitive.Title asChild>
              <h3>{title}</h3>
            </DialogPrimitive.Title>
            <DialogPrimitive.Close asChild>
              <button className={styles.close} aria-label="閉じる">
                ×
              </button>
            </DialogPrimitive.Close>
          </div>
          {description && (
            <DialogPrimitive.Description className={styles.description}>
              {description}
            </DialogPrimitive.Description>
          )}
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
