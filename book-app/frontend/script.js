// script.js
const fetchBooks = async (query = '') => {
    let url = 'http://localhost:5000/api/books';
    if (query) url += `/search?author=${query}`;
  
    const res = await fetch(url);
    const books = await res.json();
  
    document.getElementById('books').innerHTML = books.map(book => `
      <div class="card col-3 m-2 p-2 shadow">
        <h5>${book.title}</h5>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Price:</strong> $${book.price}</p>
      </div>
    `).join('');
  };
  
  document.getElementById('search').addEventListener('input', (e) => {
    fetchBooks(e.target.value);
  });
  
  window.onload = () => fetchBooks();
   
