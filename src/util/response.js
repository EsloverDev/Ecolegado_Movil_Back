exports.success = function(req, res, status, message){
    res.status(status).send({
        error: false,
        status: status,
        msg: message,
        body: req.body
    })
}

exports.error = function(req, res, status, message){
    res.status(status).send({
        error: true,
        status: status,
        msg: message
    })
}