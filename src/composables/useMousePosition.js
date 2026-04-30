import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0.5)
  const y = ref(0.5)

  let ticking = false

  function onMouseMove(e) {
    if (!ticking) {
      requestAnimationFrame(() => {
        x.value = e.clientX / window.innerWidth
        y.value = e.clientY / window.innerHeight
        ticking = false
      })
      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener('mousemove', onMouseMove, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
  })

  return { x, y }
}
