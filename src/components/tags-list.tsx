"use client"

import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export function TagList({ tags }: { tags: string[] }) {
  const router = useRouter();
  return (
    <>
      <h3>Tags : </h3>
      {tags.map((lang) => (
        <Badge
          onClick={() => {
            router.push(`/?search=${lang}`);
          }}
          className="w-fit cursor-pointer"
          key={lang}
        >
          {lang}
        </Badge>
      ))}
    </>
  );
}
