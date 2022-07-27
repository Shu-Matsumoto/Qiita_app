import {css} from '@emotion/react';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';

const MarkdownBlock = ({markdown}) => {
  return (
    <div css={markdownStyle}>
      <ReactMarkdown
        components={{
          code: codeBlockProps => {
            const {inline, className, children, ...codeProps} = codeBlockProps;
            const match = /language-(\w+)/.exec(className || '');

            return (
              <div css={codeBlock}>
                {!inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...codeProps}>
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code css={codeSpans} className={className} {...codeProps}>
                    {children}
                  </code>
                )}
              </div>
            );
          },
        }}
        className="markdown-style">
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownBlock;

const codeBlock = css`
  margin: 24px 0;
`;

const codeSpans = css`
  font-size: 0.9em;
  line-height: 1.5;
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
  padding: 0.25rem 0.5rem;
  margin: 0 0.25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(231 229 228 / var(--tw-bg-opacity));
  border-radius: 4px;
`;

const markdownStyle = css`
  div {
    line-height: 150%;
  }

  a {
    color: #0645ad;
    text-decoration: none;
  }

  a:visited {
    color: #0b0080;
  }

  a:hover {
    color: #06e;
  }

  a:active {
    color: #faa700;
  }

  a:focus {
    outline: thin dotted;
  }

  a:hover,
  a:active {
    outline: 0;
  }

  ::-moz-selection {
    background: rgba(255, 255, 0, 0.3);
    color: #000;
  }

  ::selection {
    background: rgba(255, 255, 0, 0.3);
    color: #000;
  }

  a::-moz-selection {
    background: rgba(255, 255, 0, 0.3);
    color: #0645ad;
  }

  a::selection {
    background: rgba(255, 255, 0, 0.3);
    color: #0645ad;
  }

  p {
    margin: 1.5em 0;
  }

  img {
    max-width: 100%;
    margin: 16px 0 24px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    line-height: 145%;
  }

  h4,
  h5,
  h6 {
    font-weight: bold;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.75em;
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.2em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 0.9em;
  }

  blockquote {
    color: #666666;
    margin: 0;
    padding-left: 2em;
    border-left: 0.5em #eee solid;
  }

  hr {
    display: block;
    border: 0;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #eee;
    margin: 1em 0;
    padding: 0;
  }

  pre {
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  b,
  strong {
    font-weight: bold;
  }

  dfn {
    font-style: italic;
  }

  ins {
    background: #ff9;
    color: #000;
    text-decoration: none;
  }

  mark {
    background: #ff0;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  ul,
  ol {
    margin: 1em 0;
    padding: 0 0 0 2em;
  }

  li p:last-child {
    margin: 0;
  }

  dd {
    margin: 0 0 0 2em;
  }

  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td {
    vertical-align: top;
  }

  @media only screen and (min-width: 480px) {
    body {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 768px) {
    body {
      font-size: 16px;
    }
  }

  @media print {
    * {
      background: transparent !important;
      color: black !important;
      filter: none !important;
      -ms-filter: none !important;
    }

    body {
      font-size: 12pt;
      max-width: 100%;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    hr {
      height: 1px;
      border: 0;
      border-bottom: 1px solid black;
    }

    a[href]:after {
      content: ' (' attr(href) ')';
    }

    abbr[title]:after {
      content: ' (' attr(title) ')';
    }

    .ir a:after,
    a[href^='javascript:']:after,
    a[href^='#']:after {
      content: '';
    }

    pre,
    blockquote {
      border: 1px solid #999;
      padding-right: 1em;
      page-break-inside: avoid;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    @page :left {
      margin: 15mm 20mm 15mm 10mm;
    }

    @page :right {
      margin: 15mm 10mm 15mm 20mm;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }
`;