import { list, get, upsert, update, remove, query } from '../../../store/mysql.js';
import { nanoid } from 'nanoid';

const TABLE = 'post';

export default function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    return;
  }

  function listPosts () {
    return list(TABLE)
  }

  function getPost (id) {
    return get(TABLE, id);
  }

  async function createPost (data) {

    console.log(data);
    const post = {
      id: nanoid(),
      text: data.text,
      user: data.user
    };
    console.log(post);

    return upsert(TABLE, post);
  }

  function updatePost (id, data) {
    console.log(data);
    console.log(id);
    return update(TABLE, { id, ...data });
  }

  function deletePost (id) {
    return remove(TABLE, id);
  }

  return {
    listPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
  }
}