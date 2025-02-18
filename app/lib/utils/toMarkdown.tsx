import React from 'react';
import ReactMarkdown from 'react-markdown';

type MarkdownProps = {
    markdownText? : string
}

function ToMarkdown({ markdownText} : MarkdownProps) {
  return (
    <div className="prose !text-red-500 p-4">
      {/* Pass the markdowntest as a prop, nest it in between tags */}
      <ReactMarkdown>
        {markdownText}
      </ReactMarkdown>
    </div>
  );
}

export default ToMarkdown;
