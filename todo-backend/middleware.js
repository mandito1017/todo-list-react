const API_KEY = 'mi-api-key-secreta-2024';

const authMiddleware = (req, res, next) => {
  const apiKey = req.headers['authorization'];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ error: 'No autorizado. API Key inválida.' });
  }

  next();
};

module.exports = authMiddleware;