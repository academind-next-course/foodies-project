export default async function MealDetailPage({ params }) {
  const { id } = await params;
  return (
    <main>
      <h1>Meal detail page</h1>
      <p>{id}</p>
    </main>
  );
}
