import { get } from '@vercel/edge-config'

const instagram = async (access_token) => {
  try {
    return await fetch(
      `https://graph.instagram.com/v18.0//me?fields=id,username&access_token=${access_token}`
    )
  } catch (e) {
    return null
    console.log('--- failed to run edge config operation(s):', e)
  }
}

export default defineEventHandler(async (event) => {
  try {
    const instagram_access_token = await get('instagram_access_token')
    const images = await instagram(instagram_access_token)
    return { images }
  } catch (e) {
    console.log('--- failed to get images:', e)
    return null
  }
})
