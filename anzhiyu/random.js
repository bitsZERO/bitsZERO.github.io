var posts=["2024/04/07/image/","2024/04/08/我的第一篇博客文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };