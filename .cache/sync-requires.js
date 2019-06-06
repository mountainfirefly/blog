const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-theme-startgatsby-src-components-post-js": hot(preferDefault(require("/Users/mountainfirefly/work/react/blog/node_modules/gatsby-theme-startgatsby/src/components/post.js"))),
  "component---node-modules-gatsby-theme-startgatsby-src-components-tags-js": hot(preferDefault(require("/Users/mountainfirefly/work/react/blog/node_modules/gatsby-theme-startgatsby/src/components/tags.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mountainfirefly/work/react/blog/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-theme-startgatsby-src-pages-404-js": hot(preferDefault(require("/Users/mountainfirefly/work/react/blog/node_modules/gatsby-theme-startgatsby/src/pages/404.js"))),
  "component---node-modules-gatsby-theme-startgatsby-src-pages-index-js": hot(preferDefault(require("/Users/mountainfirefly/work/react/blog/node_modules/gatsby-theme-startgatsby/src/pages/index.js"))),
  "component---node-modules-gatsby-theme-startgatsby-src-pages-contact-mdx": hot(preferDefault(require("/Users/mountainfirefly/work/react/blog/node_modules/gatsby-theme-startgatsby/src/pages/contact.mdx")))
}

