function clean(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Méthode non autorisée." });
  }

  const name = clean(req.body?.name, 80);
  const email = clean(req.body?.email, 160);
  const message = clean(req.body?.message, 2000);

  if (!name || !message) {
    return res.status(400).json({
      success: false,
      message: "Nom et message obligatoires."
    });
  }

  console.log("KILLUA CONTACT", { name, email, message });

  return res.status(200).json({
    success: true,
    message: "Message reçu. Merci !"
  });
}
