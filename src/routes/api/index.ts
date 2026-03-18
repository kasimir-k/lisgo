export async function GET() {
  return JSON.stringify(import.meta.env);
}
