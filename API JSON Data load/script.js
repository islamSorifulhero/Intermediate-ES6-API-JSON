const loadPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    //promise of response
    .then((res) => res.json())
    //promise of json data
    .then((data) => console.log(data))
}