import { ref, watch, onMounted } from 'vue'

const isDark = ref(false)

export function useTheme() {
  onMounted(() => {
    const saved = localStorage.getItem('yssr-theme')
    if (saved) {
      isDark.value = saved === 'dark'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme()
  })

  function applyTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    localStorage.setItem('yssr-theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  watch(isDark, applyTheme)

  return { isDark, toggleTheme }
}
