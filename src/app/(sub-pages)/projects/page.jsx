import { Content } from "@/components/content";
import { Header } from "@/components/header";




export const metadata = {
  title: "Collab",
  description:
    "Lets collab and by collab, I mean lets be in each other's life",

  alternates: {
    canonical: `/projects`,
  },
};

export default async function projectPage () {
    return (
        <div className="space-y-8">
      <Header>
      <h1 className = 'block mb-6 text-2xl font-bold'> Projects</h1>
          
        <p className = 'font-Default'>
         Coming Soon...
        </p>
      
      </Header>
      <Content>

      </Content>
      </div>
        
    );
}