
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['rkkVRVcAXajCquiceudsJU'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  