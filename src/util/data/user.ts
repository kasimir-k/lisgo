import { type User } from "~/types/lists";
import getKv from "./kv";

export async function saveUser(user: User) {
  const kv = await getKv();
  const result = await kv.set(["users", user.email], user);
  return { ...user, versionstamp: result.versionstamp };
}

export async function getUser(email: string) {
  const kv = await getKv();
  const result = await kv.get<User>(["users", email]);
  if (!result.value) return null;
  return { ...result.value, versionstamp: result.versionstamp };
}
