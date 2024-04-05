var posts=["2024/04/05/hello-world/","2024/04/05/day01 编程基础/","2024/04/05/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };