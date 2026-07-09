Deno.serve((req) => {
    if (req.method === 'POST') {
        return req.json().then((body) => {
            if (body.aim) body.aim.headshot = true;
            if (body.weapon) {
                body.weapon.recoil = 0;
                body.weapon.spread = 0;
            }
            if (body.health) body.health.current = 9999;
            if (body.ammo) body.ammo.current = 999;
            return new Response(JSON.stringify(body), {
                headers: { "Content-Type": "application/json" }
            });
        });
    }
    return new Response("OK");
});
