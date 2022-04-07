// function createResponse(data:string)
export async function handleRequest(request) {
  const value = await NAMESPACE.get([{MY_KV:'11'}], {type: "json"})
  if (value === null) {
    return new Response("Value not found", {status: 404})
  }

  return new Response(value)
}
