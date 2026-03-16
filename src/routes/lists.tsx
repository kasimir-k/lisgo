import { Title } from "@solidjs/meta";

const listName = "My List"

export default function Lists() {
  return (
    <main>
      <Title>Lisgo | Lists</Title>
      <h1>Your lists:</h1>
      <ul>
        <li>
          <a href="../list/">My List</a>
        </li>
      </ul>
    </main>
  );
}
