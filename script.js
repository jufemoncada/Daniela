document.querySelectorAll('.post').forEach(post => {
  post.addEventListener('click', (e) => {
    e.preventDefault();
    post.classList.toggle('active');
  });
});
