module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(! authHeader){
        return req.status(401).send({error: 'No token provided'});
    }

    const parts = authHeader.split(' ');
    if (!parts.length === 2) {
        return req.status(401).send({error: 'Token error'});
    }

     //18:20
}