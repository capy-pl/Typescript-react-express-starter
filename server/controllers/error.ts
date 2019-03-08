import e from 'express';

export default function errorController(
    err: Error,
    req: e.Request,
    res: e.Response,
    next: e.NextFunction,
    ) {
    console.error(err.stack);
    res.status(500);
}
