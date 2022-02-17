// Creating api inside next js app
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
  }