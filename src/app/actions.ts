"use server";
export async function getSomethingFromServer() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  return new Date().toISOString();
}
