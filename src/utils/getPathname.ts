import {WebLinks} from "@/routes/routes.ts";

export const getPathname = (link: WebLinks, id?: string): string => {
    if (id) {
        return link.replace(":id", id);
    } else {
        return link;
    }
}