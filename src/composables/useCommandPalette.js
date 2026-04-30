import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

// Shared singleton state so NavBar and CommandPalette share the same isOpen
const isOpen = ref(false)
const query = ref('')
const selectedIndex = ref(0)

export function useCommandPalette() {
  const router = useRouter()

  const commands = [
    { label: 'Beranda', action: () => router.push('/'), svgPath: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25', category: 'Navigasi' },
    { label: 'Tentang Saya', action: () => scrollToHash('#about'), svgPath: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z', category: 'Navigasi' },
    { label: 'Tech Stack', action: () => scrollToHash('#techstack'), svgPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', category: 'Navigasi' },
    { label: 'Portfolio', action: () => scrollToHash('#portfolio'), svgPath: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z', category: 'Navigasi' },
    { label: 'Journey / Timeline', action: () => scrollToHash('#timeline'), svgPath: 'M9 6.75V15m0-8.25l6 3m-6-3L3 9.75M9 15l6-3m-6 3l-6-3m12 0l5.25 2.625M15 12l5.25-2.625M15 12V3.375m0 0l5.25 2.625M15 3.375L9 6.75', category: 'Navigasi' },
    { label: 'Kontak', action: () => scrollToHash('#contact'), svgPath: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75', category: 'Navigasi' },
    { label: 'Sertifikasi & Kredensial', action: () => router.push('/credentials'), svgPath: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z', category: 'Halaman' },
    { label: 'IT Infrastructure', action: () => router.push('/it-infrastructure'), svgPath: 'M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z', category: 'Halaman' },
    { label: 'Digital Lab', action: () => router.push('/lab'), svgPath: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0012 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 5.21c.14.519-.273 1.01-.814.99a41.39 41.39 0 01-8.39 0c-.54.02-.952-.471-.813-.99L12.8 16.1', category: 'Halaman' },
  ]

  function scrollToHash(hash) {
    if (router.currentRoute.value.path !== '/') {
      router.push('/' + hash)
    } else {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  function open() { isOpen.value = true; query.value = ''; selectedIndex.value = 0 }
  function close() { isOpen.value = false; query.value = '' }

  function getFiltered() {
    if (!query.value) return commands
    const q = query.value.toLowerCase()
    return commands.filter(c => c.label.toLowerCase().includes(q) || c.category.toLowerCase().includes(q))
  }

  function execute(cmd) {
    close()
    if (cmd && cmd.action) cmd.action()
  }

  function handleKeydown(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault()
      isOpen.value ? close() : open()
    }
    if (!isOpen.value) return
    if (e.key === 'Escape') close()
    const filtered = getFiltered()
    if (e.key === 'ArrowDown') { e.preventDefault(); selectedIndex.value = Math.min(selectedIndex.value + 1, filtered.length - 1) }
    if (e.key === 'ArrowUp') { e.preventDefault(); selectedIndex.value = Math.max(selectedIndex.value - 1, 0) }
    if (e.key === 'Enter') { e.preventDefault(); execute(filtered[selectedIndex.value]) }
  }

  onMounted(() => window.addEventListener('keydown', handleKeydown))
  onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

  return { isOpen, query, selectedIndex, open, close, getFiltered, execute }
}
