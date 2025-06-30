const userList = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

const postList = [
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

const commentList = [
  { id: 1, postId: 1, content: "Comment on Alice's post" },
  { id: 2, postId: 2, content: "Comment on Bob's post" },
  { id: 3, postId: 1, content: "Another comment on  Alice's post" },
];

const getUserInput = () => {
  console.clear();
  console.log("Available Users:");
  userList.forEach((user) => {
    console.log(`ID: ${user.id}, Name: ${user.name}`);
  });
  const selectedUserId = parseInt(prompt(`Enter user ID (1-${userList.length}):`), 10);
  return isNaN(selectedUserId) || selectedUserId < 1 || selectedUserId > userList.length
    ? getUserInput()
    : selectedUserId;
};

const fetchUserById = (userId, userList) => {
  return new Promise((resolve) => {
    const foundUser = userList.find((user) => {
      return user.id === userId;
    });
    resolve(foundUser);
  });
};

const fetchPostsByUser = ({ id }, postList) => {
  return new Promise((resolve) => {
    const userPosts = postList.filter((post) => {
      return post.userId === id;
    });
    resolve(userPosts);
  });
};

const fetchCommentsForPosts = (posts, commentList) => {
  return new Promise((resolve) => {
    const relatedComments = commentList.filter((comment) => {
      return posts.some((post) => post.id === comment.postId);
    });
    resolve(relatedComments);
  });
};

fetchUserById(getUserInput(), userList)
  .then((user) => {
    console.log("Id:", user.id, "Name:", user.name, "Age:", user.age);
    return fetchPostsByUser(user, postList);
  })
  .then((posts) => {
    posts.forEach((post) => {
      console.log(`Post ID: ${post.id}, Title: ${post.title}`);
    });
    return fetchCommentsForPosts(posts, commentList);
  })
  .then((comments) => {
    comments.forEach((comment) => {
      console.log(`Comment ID: ${comment.id}, Content: ${comment.content}`);
    });
  });
