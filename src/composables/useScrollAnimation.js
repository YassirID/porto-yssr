import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible')
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    // observe all elements with scroll-hidden
    document.querySelectorAll('.scroll-hidden, .stagger-children').forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  // call this to re-observe after dynamic content changes
  function refresh() {
    if (!observer) return
    document.querySelectorAll('.scroll-hidden:not(.scroll-visible), .stagger-children:not(.scroll-visible)').forEach((el) => {
      observer.observe(el)
    })
  }

  return { refresh }
}
