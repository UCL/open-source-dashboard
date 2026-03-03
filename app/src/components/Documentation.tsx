import { marked } from 'marked';
import Docs from '../../docs/definitions.md';

const convertMarkdownToHTML = (markdown: string): string => {
  return marked(markdown) as string;
};

const Documentation = () => {
  const html = convertMarkdownToHTML(Docs);

  return (
    <div className="prose dark:prose-invert prose-lg">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Documentation;
