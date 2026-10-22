import { revalidateExampleAction } from "@/actions/revalidate-example";

//export const revalidate = 60; // Revalidate every 60 seconds

export default async function ExampleDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const name = "Random User";
  //revalidando usando data fetch e action do server em cache
//   const resp = await fetch(`https://randomuser.me/api/?results=1`, {
//    // cache: "no-store", 
//     next: { tags: ["randomuser"], revalidate: 30 },
//   });
//   const data = await resp.json();
//   const name = data.results[0].name.first;

  return (
    <main className="min-h-150 text-4xl font-bold">
      <h1>
        Post Page: {id} - Name: {name}
      </h1>
      <form className="py16 " action={revalidateExampleAction}>
        <input name="path" type="hidden" defaultValue={`/exemplo/${id}`} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          REVALIDAR
        </button>
      </form>
    </main>
  );
}
