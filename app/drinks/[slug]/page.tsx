import CocktailDisplay from "@/app/components/CocktailDisplay/CocktailDisplay";

export default function Drink({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return (
    <>
      <CocktailDisplay slug={params.slug} />
    </>
  );
}
