import { Divider } from "@nextui-org/divider";
import { Communities } from "./communities";

export const SideNav = () => {
  return (
    <aside className="flex h-full max-h-screen w-full flex-col gap-y-1 md:max-w-64 md:border-r">
      <nav className="grid items-start px-2 font-medium text-sm lg:px-4">
        <div className="flex h-full max-h-screen flex-col gap-2 py-4">
          <Communities />
          <Divider />
        </div>
      </nav>
    </aside>
  );
};
