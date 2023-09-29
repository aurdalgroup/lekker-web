import { defineStore } from 'pinia'

export default defineStore('app', {
  state: () => ({}),
  actions: {
    async getPosition() {
      const res = await fetch('/api/position', {
        method: 'get'
      })
      return await res.json()
    },
    async getImage() {
      const res = await fetch('/api/image', {
        method: 'get'
      })
      return await res.json()
    }
  }
})
