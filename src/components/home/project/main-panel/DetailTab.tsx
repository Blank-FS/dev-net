import { useEffect, useState } from "react";
import MarkDown from "@/components/ui/md-custom";

const DetailTab = () => {
  const [mdString, setMdString] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);

  const switchMode = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    const fetchMarkdownString = async () => {
      const response = await fetch("/mdTest.md"); // Path relative to the public directory
      const text = await response.text();
      setMdString(text);
    };
    fetchMarkdownString();
  }, []);

  return (
    <div className="flex flex-col border w-full min-h-0 flex-1 mr-4 border-black p-4">
      {editMode ? (
        <form className="flex gap-4 flex-col">
          <div className="flex justify-end gap-4">
            <button className="border border-black p-2" onClick={switchMode}>
              Cancel
            </button>
            <button className="border border-black p-2" onClick={switchMode}>
              Confirm
            </button>
          </div>
          <textarea
            className="border border-black w-full flex-1"
            required
            name="form-md"
          ></textarea>
        </form>
      ) : (
        <>
          <div className="flex justify-end w-full mb-2">
            <button className="border border-black p-1" onClick={switchMode}>
              Edit
            </button>
          </div>
          <MarkDown content={mdString} className="flex-1" />
        </>
      )}
    </div>
  );
};

export default DetailTab;
