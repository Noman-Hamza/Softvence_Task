export const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        error: 'Route not found',
        message: 'The requested API endpoint does not exist.',
        path: req.originalUrl
    });
};
