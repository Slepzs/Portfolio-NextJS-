export default function TextHighlighter(text: string) {
  // Convert text to bold if it has [[]]
  const regex = /\[\[(.*?)\]\]/g;
  const boldText = text.replace(
    regex,
    "<span class='font-bold text-blue-500'>$1</span>"
  );

  return boldText;
}
