import { ArticleTime } from "@/components/article-time";
import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { classNames } from "@/functions/class-names";
import { getArticle, getArticles } from "@/functions/markdown";
import Link from "next/link";
import { notFound } from "next/navigation";
import Comment from "@/components/comment";
import siteMetadata from '@/data/siteMetadata'

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.meta.slug }));
}

export async function generateMetadata({ params }) {
  const article = await getArticle(params.slug);
  return {
    title: article.meta.metaTitle || article.meta.title,
    description: article.meta.description,
    alternates: {
      canonical: `/words/${params.slug}`,
    },
    openGraph: {
      title: article.meta.metaTitle || article.meta.title,
      description: article.meta.description,
      url: `/words/${params.slug}`,
    },
  };
}

export default async function ArticlePage({ params }) {
  const { content, meta } = await getArticle(params.slug);
 

  if (!content) {
    notFound();
  }

  return (
    <>
      <Header>
        <div className={classNames("gap-x-2 mb-4 space-x-2")}>
          <h1 className="inline text-4xl font-bold">{meta.title}</h1>
        </div>
        <p className = 'italic'>
          <ArticleTime date={meta.date} /> -{" "}
          <span className="opacity-70">{meta.readingTime} Minute Read</span>
        </p>
      </Header>
      <Content>
        <article className="max-w-full px-0 prose mt-6 md:prose-lg font-Default dark:text-white">
          {content}
        </article>
        <div className = 'pb-8 border-b'> </div>
        {siteMetadata.comments && (
                <div
                  className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comment slug={params.slug} />
                </div>
              )}
      </Content>
    </>
  );
}