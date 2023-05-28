export default function handler(req, res) {
  const body = req.body;

  if (!body.firstName || !body.message || !body.email) {
    return res.status(400).json({ data: 'First name, email, and message fields are required!' });
  }

  return res.status(200).json({ data: 'Message sent successfully!' });
}