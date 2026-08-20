const memory = globalThis.__KILLUA_DISCUSSIONS__ || (globalThis.__KILLUA_DISCUSSIONS__ = []);

function clean(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "GET") {
    return res.status(200).json({ success: true, posts: memory.slice(-100).reverse() });
  }

  if (req.method === "POST") {
    const name = clean(req.body?.name, 40);
    const message = clean(req.body?.message, 500);

    if (!name || !message) {
      return res.status(400).json({
        success: false,
        message: "Nom et message obligatoires."
      });
    }

    const post = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name,
      message,
      created_at: new Date().toISOString()
    };

    memory.push(post);
    if (memory.length > 500) memory.shift();

    return res.status(201).json({ success: true, post });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ success: false, message: "Méthode non autorisée." });
}
