import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        // Use the user's IP address instead of a fixed string so that the rate limit applies per user
        const identifier = req.ip || req.headers["x-forwarded-for"] || "global";
        const { success } = await ratelimit.limit(identifier);

        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later.",
            });
        }

        next();
    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }
};

export default rateLimiter;