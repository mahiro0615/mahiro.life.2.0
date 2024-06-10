import Link from "next/link";
import { ArticleTime } from "@/components/article-time";
import { classNames } from "@/functions/class-names";

export function ProjectSubpageCard({ subpage, project }) {
  return (
    <article key={subpage.file} className="relative group">
      <Link href={`/projects/${project}/${subpage.file.replace('.mdx', '')}`}>
        <div className="flex justify-between items-center">
          <div
            className={
              "text-gray-900 dark:text-gray-50 group-hover:underline underline-offset-8"
            }
          >
            <h3 className="inline">{subpage.meta.title}</h3>
          </div>
          <ArticleTime
            className="italic group-hover:underline underline-offset-8 text-right"
            date={subpage.meta.date}
          />
        </div>
      </Link>
    </article>
  );
}