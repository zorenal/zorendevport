import { ReactNode } from "react";

export interface JSXNodeProp {
    children: ReactNode;
  }


export interface PathProps {
    variants: any
    d?: string;
    transition?: {
      duration: number;
    };
}

export interface MenuToggleProps {
  toggle: () => void;
}