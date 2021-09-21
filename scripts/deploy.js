var ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    message: "Auto-generated commit for deployment",
    dotfiles: true
  },
  () => console.log("[*] Deployment complete!")
);
