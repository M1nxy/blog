import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="About"
        description="The making of this site."
      >
        <Prose>
          <p className="text-justify">
            I created this site using <a href="https://github.com/alexcarpenter/nextjs-mdx-blog-theme">this template</a>. 
            It uses next and mdx to render markdown files to a nextjs site with tailwind & tailwind typography for styling.
            I decided to use this after being disatisfied with my own implementation using frontmatter + markdownit + sveltekit.
            My only real requirements for a pre-existing template were .md support and some way of embedding custom elements in a language I am comfortable with.
            Docusarus and Starlight were both solid contenders but they both come with drawbacks I wasn&#39;t pleased with and were not as minimal as I would have liked.
          </p>
          <p className="text-justify">
            I intend to document my current projects and side quests here as well as the occasional <span className="line-through">shitposting</span> opinion sharing.
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
