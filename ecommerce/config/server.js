module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3329bbcbd115462acbcc9b62cbf88f73'),
    },
  },
});
