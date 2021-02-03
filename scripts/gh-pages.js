const ghpages = require('gh-pages');

ghpages.publish(
  '__sapper__/export/blog',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/bihanviranga/blog.git',
  },
  (err) => {
    if (err) {
      console.log('[gh-pages] Deployment failed!');
      console.log(err);
    } else {
      console.log('[gh-pages] Deployment complete!');
    }
  }
);
