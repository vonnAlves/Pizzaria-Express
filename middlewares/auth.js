// Arquivo para verificar se existe autenticação ou não; 
// middleware é uma função 
// podemos exportar diretamente ou criar uma var e exporta la

module.exports = (req, res, next) => {
  // Se existe na requisição uma session com nome user 
  // Iremos fazer o login, pois essa session so é criada ao fazer login;
  // se exister damos um next e passamos para a proxima rota
  if(req.session.user) {
    next()
  }
  // se não exiser a session redirecionamentos para ser feito o login;
  else {
    res.redirect("/user/login")
  }
}