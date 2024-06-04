export default async function Page({
  params: { communityId },
}: {
  params: { communityId: string };
}) {
  return (
    <main className="h-svh w-full overflow-x-hidden overflow-y-scroll p-4">
      {communityId}
    </main>
  );
}
