const middlewares = {
  authenticate(req, res, next) {
    const { authenticate } = req.headers;
    const { user_id } = req.params;

    if (!authenticate) return res.status(400).json({ nessage: "No token" });
    if (authenticate !== user_id)
      return res.status(400).json({ message: "Aqui nao bonitao" });
    //  no .send colocar (not allowew) ou (nao permitido)

    next();
  },
};

module.exports = middlewares;

// talvez devo usar um  json web token
