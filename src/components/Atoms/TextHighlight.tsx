import TextHighlighter from "@/lib/helper/TextHighlighter";
import React from "react";

type TextHighlighterWrapperProps = {
  text: string;
};

const TextHighlighterWrapper: React.FC<TextHighlighterWrapperProps> = ({
  text,
}) => {
  const highlightedText = TextHighlighter(text);

  return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
};

export default TextHighlighterWrapper;
