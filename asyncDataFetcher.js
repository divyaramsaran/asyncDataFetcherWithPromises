const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

const posts = [
  {
    id: 1,
    userId: 1,
    title: "Post by Alice",
    content: "Content of Alice's post",
  },
  { id: 2, userId: 2, title: "Post by Bob", content: "Content of Bob's post" },
  {
    id: 3,
    userId: 1,
    title: "Another Post by Alice",
    content: "More content from Alice",
  },
];

const comments = [
  { id: 1, postId: 1, content: "Comment on Alice's post" },
  { id: 2, postId: 2, content: "Comment on Bob's post" },
  { id: 3, postId: 1, content: "Another comment on  Alice's post" },
];

const input = () => {
  console.clear();
  console.log("Available Users:");
  users.forEach((user) => {
    console.log(`ID: ${user.id}, Name: ${user.name}`);
  });
  const userId = parseInt(prompt(`Enter user ID (1-${users.length}):`), 10);
  return isNaN(userId) || userId < 1 || userId > users.length
    ? input()
    : userId;
};

const fetchUser = (userId, users) => {
  return new Promise((resolve) => {
    const person = users.find((user) => {
      return user.id === userId;
    });
    resolve(person);
  });
};

const fetchPosts = ({ id }, posts) => {
  return new Promise((resolve) => {
    const userPosts = posts.filter((post) => {
      return post.userId === id;
    });
    resolve(userPosts);
  });
};

fetchUser(input(), users)
  .then((user) => {
    return fetchPosts(user, posts);
  })
  .then((list) => {
    console.log(list);
    return list;
  });
