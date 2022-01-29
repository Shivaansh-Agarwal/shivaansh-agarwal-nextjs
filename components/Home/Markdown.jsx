import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Markdown = ({ markdown }) => {
  return (
    <ReactMarkdown className="prose min-w-full" remarkPlugins={[remarkGfm]}>
      {markdown}
    </ReactMarkdown>
  );
};
