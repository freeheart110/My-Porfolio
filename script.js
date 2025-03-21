// Handle copy-to-clipboard for contact cards
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.contact-card[data-copy]').forEach(card => {
    card.addEventListener('click', function (e) {
      e.preventDefault(); // Stop link behavior
      const textToCopy = this.getAttribute('data-copy');

      // Copy text to clipboard
      navigator.clipboard.writeText(textToCopy).then(() => {
        // Optional feedback
        this.classList.add('copied');
        this.querySelector('span').textContent = '✅ Copied!';
        setTimeout(() => {
          this.classList.remove('copied');
          this.querySelector('span').textContent = textToCopy;
        }, 2000);
      }).catch(err => {
        alert('Copy failed. Try manually.');
        console.error(err);
      });
    });
  });
});