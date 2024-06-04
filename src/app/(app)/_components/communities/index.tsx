import dynamic from "next/dynamic";

const CommunitiesList = dynamic(
  () => import("./list").then((mod) => mod.CommunitiesList),
  { ssr: true },
);

const CreateCommunity = dynamic(
  () => import("./create").then((mod) => mod.CreateCommunity),
  { ssr: true },
);

export const Communities = () => {
  return (
    <section className="pb-4">
      <h3 className="text-lg">Communities</h3>
      <CommunitiesList />
      <CreateCommunity />
    </section>
  );
};
