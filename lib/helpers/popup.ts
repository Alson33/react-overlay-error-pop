import { RefObject } from "react";

export const closePop = (ref: RefObject<HTMLDivElement>) => ref.current?.style.setProperty('opacity', '0')