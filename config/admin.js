module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '535a8d8a80164b03ea00571a3b876ba5'),
  },
});
