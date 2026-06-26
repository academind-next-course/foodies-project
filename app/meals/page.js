import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <p><Link href="/meals/chicken-fried-rice">Chicken fried rice</Link></p>
      <p><Link href="/meals/udon-soup">Udon soup</Link></p>
      <br />

      <p><Link href="/meals/share">Share a meal</Link></p>
    </main>
  );
}
