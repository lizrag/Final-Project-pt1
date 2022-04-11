import next from "next";

const adminMiddleware = (req,res,next)=>{
    const isAdmin= false;

    if(req.body && req.body.isAdmin){
        isAdmin= true;
    }
    if (isAdmin){
        return next();
    }
    return res.send({
        error: -1,
        descripcion: `ruta '${req.path}' metodo '${req.method}' no autorizado`
    });
}

export default adminMiddleware;