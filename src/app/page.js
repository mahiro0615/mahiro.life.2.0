import { ArticleCard } from "@/components/article-card";
import { Header } from "@/components/header";
import { classNames } from "@/functions/class-names";
import { getArticles, getArticle} from "@/functions/markdown";
import Link from "next/link";

export const metadata = {
  title: "Mahiro.life by Mahiro Yamakawa",
  alternates: {
    canonical: `/`,
  },
};


export default async function Home() {
  const articles = await getArticles();



  return (
    <div className="space-y-12">
      <Header>
          <span className="block mb-6 text-2xl font-bold">
            I&apos;m so glad you made it here
          </span>
          <div className='font-Default'> 
          What is this all about? Who am I? What is consciousness? Now what? All good questions with no good answers. If I try to answer them, I'll be wrong; if I don’t answer them, I'll still be wrong.<br></br><br></br>
All I know is that I’m confused. But being confused feels so much better when I’m confused with you. I want this to serve as a collection of pieces to THE puzzle. The name of the puzzle can’t be named, but I know you have a glimpse of what it is. Just go with the vibe.

          </div>
      </Header>
      <div className="space-y-16 mx-auto max-w-3xl px-6 lg:px-8">
        <section>
          <div
            className={classNames(
              "gap-x-2 mb-4 space-x-2",
            )}
          >
            <h2 className="inline font-bold">Recent uploads</h2>
            <span className="opacity-60">/</span>
            <Link
              href="/words"
              className="opacity-70 hover:underline underline-offset-4"
            >
              All
            </Link>
          </div>
          
          <div className="space-y-6">
            {articles
              .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
              .slice(0, 4)     
              .map((article) => (
                <ArticleCard article={article} key={article.meta.title} />
              ))}             
          </div>
        </section>
      </div>
    </div>
  );
}

