import { useEffect, useState } from "react";
import "./md.css";
import DOMPurify from "dompurify";
import { cn } from "@/lib/utils";
import { marked } from "marked";

const MarkDown = ({
  className,
  content,
}: {
  className?: string;
  content: string;
}) => {
  const [htmlValue, setHtmlValue] = useState<string>("");

  useEffect(() => {
    // Filter out unrecognizable no space characters from string
    const filteredMD = content.replace(
      /^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,
      ""
    );
    const convert = async () => {
      const html = DOMPurify.sanitize(await marked.parse(filteredMD));
      setHtmlValue(html);
    };
    convert();

    const titleReg = /#{2}\s*([^#\n]+)/g;
    const subTitleReg = /#{3}\s*([^#\n]+)/g;

    const titleList = content.match(titleReg);
    const subTitleList = content.match(subTitleReg);
  });

  return (
    <div
      className={cn("markdown-body", className)}
      dangerouslySetInnerHTML={{ __html: htmlValue }}
    />
  );
};

export default MarkDown;
