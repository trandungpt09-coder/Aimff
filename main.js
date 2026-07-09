Deno.serve(async (r) => {
  const u = new URL(r.url);
  if (u.pathname.includes("config") || u.pathname.includes("version")) {
    return new Response(JSON.stringify({ code: 0, data: { version: "1.0", config: { aimbot: true } } }), {
      headers: { "Content-Type": "application/json" }
    });
  }
  if (r.method === "POST") {
    try {
      const b = await r.json();
      if (b.aim) b.aim.headshot = true;
      if (b.weapon) { b.weapon.recoil = 0; b.weapon.spread = 0; }
      if (b.health) b.health.current = 9999;
      if (b.ammo) b.ammo.current = 999;
      return new Response(JSON.stringify(b), {
        headers: { "Content-Type": "application/json" }
      });
    } catch { return new Response("OK"); }
  }
  return new Response("OK");
});
