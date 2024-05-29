import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { getArticles } from "@/functions/markdown";
import ArticlesList from "@/components/article-list"; // Import the new ArticlesList component

export const metadata = {
  title: "A Collection of Thoughts and Ideas",
  description: "Words in interesting ways",
  alternates: {
    canonical: `/words`,
  },
};

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <div className="space-y-8">
      <Header>
        <h1 className="block mb-6 text-2xl font-bold">Words arranged in fun ways</h1>
        <p className = 'font-Default'>At best words can only point to the Truth. They are never the Truth. Truth is a word too. So Truth is never Truth. So Truth is <br></br><br></br>This thought doesn&apos;t really go well with writing blog posts, does it? I think as long as we don&apos;t get too attached to it, it&apos;s cool. Raft is not the shore. If you meet the Buddha, kill him. <br></br><br></br>
        So please, take these posts with a grain of ... pepper</p>
      </Header>
      <Content as="section" className="space-y-6 ">
        <ArticlesList articles={articles} />
      </Content>
    </div>
  );
}