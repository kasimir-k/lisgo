import { test, expect } from "vitest";

import { type User } from "~/types/lists";
import { saveUser, getUser } from "./user";

const user: User = {
  email: "lisgo@example.com",
};

test("saving user returns KV object", async () => {
  const savedUser = await saveUser(user);
  expect(savedUser.email).toBe(user.email);
  expect(savedUser.versionstamp).not.toBeFalsy();
})

test("getting saved user returns KV object", async () => {
  const retrievedUser = await getUser(user.email);
  expect(retrievedUser).toMatchObject(user);
  expect(retrievedUser?.versionstamp).not.toBeFalsy();
})
