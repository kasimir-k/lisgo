import { Title } from "@solidjs/meta";

const listName = "My List"

export default function About() {
  return (
    <main>
      <Title>Lisgo | {listName}</Title>
      <h1>{listName}</h1>
      <a href="../lists/">Lists</a>
      <ul>
        <li>Item</li>
      </ul>
    </main>
  );
}
