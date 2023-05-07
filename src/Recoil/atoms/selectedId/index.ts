import { atom } from "recoil";

export const selectedIdState = atom<string | undefined>({
  key: "selectedId",
  default: undefined,
});
