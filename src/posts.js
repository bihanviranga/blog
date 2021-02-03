import _ from 'lodash';
import all from '../posts/*.md';

export const posts = _.chain(all) // begin a chain
  .map(transform) // transform the shape of each post
  .orderBy('date', 'desc') // sort by newest
  .value(); // convert the chain back to array

function transform({ filename, html, metadata }) {
  // TODO: add a slug field to metadata and make it the permalink
  const permalink = filename.replace(/\.md$/, '');

  // convert the date string into a date object
  const date = new Date(metadata.date);

  return { ...metadata, filename, html, permalink, date };
}

// provide a way to find a post by permalink
export function findPost(permalink) {
  // use lodash to find by field name:
  return _.find(posts, { permalink });
}
