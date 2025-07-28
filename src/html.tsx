import React from 'react';

interface HTMLProps {
  htmlAttributes?: React.HtmlHTMLAttributes<HTMLHtmlElement>;
  headComponents?: React.ReactNode[];
  
  bodyAttributes?: React.HTMLAttributes<HTMLBodyElement>;
  body: TrustedHTML;
  preBodyComponents?: React.ReactNode[];
  postBodyComponents?: React.ReactNode[];
}

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents,
  body
}: HTMLProps) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
}
