
let comments = [
  {
    id: 'qwerty',
    user: 'john.doe@example.org',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    createdAt: new Date('2019-07-19')
  }
]

const list = () => Promise.resolve(comments);

const create = comment => {
  comment.id = Math.random().toString(32).substring(2, 15);
  comment.createdAt = new Date();
  comments.push(comment);
  return Promise.resolve(comment);
}

const remove = id => {
  comments = comments.filter(comment => comment.id !== id);
  return Promise.resolve();
}

export default {
  list,
  create,
  remove
}
