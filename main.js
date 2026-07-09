Deno.serve(async (req) => {
  const url = new URL(req.url);
  
  if (url.pathname.includes("config") || url.pathname.includes("version")) {
    return new Response(JSON.stringify({
      status: "success",
      version: "1.0.0",
      config: {
        aimbot: true,
        headshot: true
      }
    }), {
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response("OK");
});
