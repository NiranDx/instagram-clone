
export const fetchUsers = async () => {
    const data = []
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        let photo = await fetchPhotos(users[index].id)
        let posts = await fetchPosts(users[index].id)
        data.push({
            username: users[index].username,
            user_id: users[index].id,
            photo: photo.url,
            posts: posts
        })
    }
    console.log(data);
    
}

export const fetchPosts = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const posts = await response.json();
    return posts
    
  }

export const fetchPhotos = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const photos = await response.json();
    return photos
  }