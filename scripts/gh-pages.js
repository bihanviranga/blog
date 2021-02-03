const ghpages = require('gh-pages');

ghpages.publish(
  '__sapper__/export/blog',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/bihanviranga/blog.git',
    user: {
      name: 'Bihan Viranga',
      email: 'bihanviranga@gmail.com',
    },
  },
  () => {
    console.log('[gh-pages] Deployment complete!');
  }
);
