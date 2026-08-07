import { onMounted, onUnmounted } from 'vue';

export function useReveal() {
  let observer = null;
  let mutationObserver = null;

  const observe = (el) => {
    if (!el.classList.contains('revealed')) {
      observer.observe(el);
    }
  };

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseInt(el.dataset.revealDelay || '0', 10);
            setTimeout(() => {
              el.classList.add('revealed');
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('[data-reveal]').forEach(observe);

    mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.hasAttribute && node.hasAttribute('data-reveal')) {
            observe(node);
          }
          if (node.querySelectorAll) {
            node.querySelectorAll('[data-reveal]').forEach(observe);
          }
        }
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
    if (mutationObserver) mutationObserver.disconnect();
  });
}
