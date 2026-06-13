export function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const cursorBlob = document.getElementById('custom-cursor-blob');
  
  if (!cursor || !cursorBlob) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorBlob.style.left = e.clientX + 'px';
    cursorBlob.style.top = e.clientY + 'px';
  });

  const handleHoverEffects = () => {
    const hoverables = document.querySelectorAll('.hoverable, a, button');
    
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });
  };

  handleHoverEffects();
  
  const observer = new MutationObserver(() => {
    handleHoverEffects();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
