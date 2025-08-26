import axios from "axios";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const fetchPosts = async () => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.data;
};

interface ThreePost {
  title: string;
  body: string;
}

async function logThreePosts() {
  const posts = await fetchPosts();
  const threePost = [];
  for (let i = 0; i < 3; i++) {
    threePost.push(posts[i]);
  }
  const threePostUpdate = threePost.map((post): ThreePost => {
    return {
      title: post.title,
      body: post.body,
    };
  });
  console.log(20, threePostUpdate);
}

logThreePosts();

// Функція fetchPosts повинна отримати список постів з API за допомогою бібліотеки axios.

// Завдання:

// Оголосіть інтерфейс Post для поста (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchPosts, вказавши, що вона повертає проміс, який містить масив об'єктів типу Post.
// Оголосіть функцію logThreePosts, яка виведе в консоль дані перших 3 постів, виводячи їхні title та body.
