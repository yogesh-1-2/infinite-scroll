const key='yg5NUUz2fAhpTQG7xpHf_-pDY6vT1aZgqap2F8W6rKY';
const url=`https://api.unsplash.com/photos/random/?client_id=${key}&count=10`;
const container=document.getElementById('container');
console.log(container);
const getPhotos=async()=>{
    try{
        const response=await fetch(url);
        const data=await response.json();
        await data.map((image,i)=>{
            const img=document.createElement('img');
            img.setAttribute('src',image.urls.small);
            container.appendChild(img);
        })
    }
    catch(err){
        console.log(err);
    }
}
window.addEventListener('scroll',()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-1000){
        getPhotos();
    }
})
getPhotos();