import { ArticleTime } from "@/components/article-time";
import Link from "next/link";
import { classNames } from "@/functions/class-names";

export function ArticleCard({ article }) {
  return (
    <article key={article.title} className="relative group">
      <Link
        href={`/words/${article.meta.slug}`}

      >
        <div className=" flex justify-between items-center">
          <div
            className={
              "text-gray-900 dark:text-gray-50 group-hover:underline underline-offset-8"
            }
          >
            <h3 className="inline">{article.meta.title}</h3>
          </div>
          <ArticleTime
            className="italic group-hover:underline underline-offset-8 text-right"
            date={article.meta.date}
          />
        </div>
      </Link>
    </article>
  );
}