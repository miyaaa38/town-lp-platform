export async function fetcher<T>(input: RequestInfo | URL) {
  const response = await fetch(input);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json() as Promise<T>;
}
