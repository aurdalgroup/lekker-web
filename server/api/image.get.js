import { get } from '@vercel/edge-config'

const instagram_media = async (access_token) => {
  try {
    const result = await fetch(
      `https://graph.instagram.com/v18.0/me/media?fields=id,username,caption,permalink,media_url,timestamp&limit=9&access_token=${access_token}`
    )
    const json = await result.json()

    if (json.error) throw new Error(json.error.message)

    return json
  } catch (e) {
    console.log('--- failed to call Instagram graph API:', e)
    return null
  }
}

export default defineEventHandler(async (event) => {
  try {
    // Get long-lived Instagram access token from config store
    const instagram_access_token = await get('instagram_access_token')

    // Get recent media from instagram account
    const { data } = await instagram_media(instagram_access_token)

    return data
  } catch (e) {
    console.log('--- failed to get images:', e)
    return null
  }
})
