const data = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log('Hello');
    const json  = await res.json();
    console.log(json);
    console.log(true);
}

data();