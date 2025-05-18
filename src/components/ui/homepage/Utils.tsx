import { ICocktailId } from "@/types/homepage/ICocktailId";

const colors: Record<ICocktailId | "default", { color: string; bg: string }> = {
  "bloody-mary": { color: "#DB1F13", bg: "#DB1F13" },
  "blue-lagoon": { color: "#048AAC", bg: "#048AAC" },
  "green-kiwi": { color: "#CFE044", bg: "#CFE044" },
  default: { color: "#FFFFFF", bg: "#FFFFFF" },
};

export function getColors(id: string) {
  if (id in colors) {
    return colors[id as ICocktailId];
  }
  return colors.default;
}
