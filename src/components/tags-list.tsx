import { room } from "@/db/schema";
import { Badge } from "@/components/ui/badge";

export function spiltTags(language: string) {
    return  language.split(",").map((lang) => lang.trim());
    
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <>
      <h3>Tags : </h3>
      {tags.map((lang) => (
        <Badge className="w-fit" key={lang}>
          {lang}
        </Badge>
      ))}
    </>
  );
}
