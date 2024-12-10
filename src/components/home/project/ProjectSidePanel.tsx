import Separator from "./Separator";

const ProjectSidePanel = () => {
  return (
    <div className="flex flex-col w-[30%] border p-4 border-black">
      <div className="flex gap-4">
        <div className="w-[128px] h-[128px] border">Project pic</div>
        <div className="h-auto">
          <h1 className="">DevNet</h1>
          <h1>Followers: 0</h1>
          <h1>Contributors: 0</h1>
          <h1>Beginner/Intermediate/Advanced</h1>
          <h1>Casual/Formal/Professional</h1>
        </div>
      </div>
      <Separator />
      <div className="overflow-y-auto">
        <h1>Summary</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Separator />
        <h1>Stack</h1>
        <p>Languages: TypeScript, Python</p>
        <p>Frameworks/Tools: Vite + React, Django</p>
        <Separator />
        <h1>Contributors</h1>
        <p>Yours Truly</p>
      </div>
    </div>
  );
};

export default ProjectSidePanel;
