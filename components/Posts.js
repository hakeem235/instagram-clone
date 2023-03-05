import Post from "./Post"

const posts = [
    {
        id: "123",
        username: 'hakeemkoo',
        userImg: 'https://i.ibb.co/q1g7CrQ/ahmed.png',
        img: 'https://i.ibb.co/q1g7CrQ/ahmed.png',
        caption: 'this is a DOPE!',
         
    },
    {
        id: "123",
        username: 'hakeemkoo',
        userImg: 'https://i.ibb.co/q1g7CrQ/ahmed.png',
        img: 'https://i.ibb.co/q1g7CrQ/ahmed.png',
        caption: 'this is a DOPE!',
         
    },
    {
        id: "123",
        username: 'hakeemkoo',
        userImg: 'https://i.ibb.co/q1g7CrQ/ahmed.png',
        img: 'https://i.ibb.co/q1g7CrQ/ahmed.png',
        caption: 'this is a DOPE!',    
    } 
]

function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
                />
            ))}
        </div>
    )
}

export default Posts
