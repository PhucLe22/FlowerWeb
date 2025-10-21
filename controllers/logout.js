const logoutUser = (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect('/login');
};

module.exports = {
    logoutUser
};
