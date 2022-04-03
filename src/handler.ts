export async function handleRequest(request: any): Promise<any> {
  return new Response(`request method: ${request.method}`)
}