import { get } from '@vercel/edge-config'

export default defineEventHandler(async (event) => {
  try {
    const position = await get('position')
    return { position }
  } catch (e) {
    console.log('--- failed to get position:', e)
    return null
  }
})
