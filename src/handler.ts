export async function handleRequest(request: any): Promise<Response> {
  return new Response(`request method: ${request.method}`)
}