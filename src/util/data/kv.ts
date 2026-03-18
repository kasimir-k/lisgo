import { type Kv, openKv } from "@deno/kv";

let kv: Kv | null = null;

function getConnectionString() {
  if (import.meta.env.VITEST) {
    return "";
  }
  if (import.meta.env.DEV) {
    return ".local-kv";
  }
  return "https://api.deno.com/databases/lisgo/connect"
}

async function getKv() {

  if (!kv) {
    kv = await openKv(getConnectionString());
  }
  return kv;
}

export default getKv;
