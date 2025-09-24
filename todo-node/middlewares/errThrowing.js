export const methodNotFound = function(req, res, next){
    const error = new Error(`Route ${req.method} ${req.originalUrl} not found`);
    error.status = 400;
    error.name = 'method_not_found';
    next(error);
}

export const errorFromRoute = function(err, req, res, next){

    const { name, msg } = err;
    const { method } = req;
    if( name == "method_not_found" ) {
        res.status(404).send(`Either endpoint is not available or endpoint with ${method} method is not available`);
    }
    if( name == 'update_missing_fields' || name == 'delete_missing_fields' || name == 'put_missing_fields' || name == 'delete_id_not_found' ) {
        res.status(404).send(msg);
    }
    if( name == 'rate_limitation' ){
        res.status(404).send(msg);
    }
}
