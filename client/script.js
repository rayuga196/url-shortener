const shortenBtn = document.getElementById('shortenBtn');
const longUrlInput = document.getElementById('longUrl');
const shortUrlEl = document.getElementById('shortUrl');


shortenBtn.addEventListener('click', () => {

 
  const longUrl = longUrlInput.value.trim();

  if (!longUrl) {
    alert('Please enter a URL first');
    return;
  }

  const shortCode = Math.random().toString(36).substring(2, 8);

  shortUrlEl.textContent = `short.ly/${shortCode}`;
  shortUrlEl.href = longUrl;

  longUrlInput.value = '';
});