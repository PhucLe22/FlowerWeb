const loginUser = (req, res) => {
    const { username, password } = req.body;
    
    // Default credentials
    const DEFAULT_USERNAME = 'diempham';
    const DEFAULT_PASSWORD = '26012024';
   

    if (!username || !password) {
        return res.status(400).json({ 
            success: false, 
            message: 'Username and password are required' 
        });
    }

    if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
        req.session.isLoggedIn = true;
        return res.redirect('/home');
    } else {
        return res.status(401).json({ 
            success: false, 
            message: 'Invalid username or password' 
        });
    }
};

module.exports = {
    loginUser
};