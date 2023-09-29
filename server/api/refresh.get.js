import { get } from '@vercel/edge-config'

const edge_config = async (items) => {
  try {
    await fetch(
      `https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items?teamId=${process.env.VERCEL_TEAM_ID}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items
        })
      }
    )
  } catch (e) {
    console.log('--- failed to run edge config operation(s):', e)
  }
}

const instagram_refresh_access_token = async (access_token) => {
  try {
    const result = await fetch(
      `https://graph.instagram.com/v18.0/refresh_access_token
      ?grant_type=ig_refresh_token&access_token=${access_token}`
    )
    const json = await result.json()

    console.log('debug', json)
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

    // Refresh long-lived instagram access token
    const { access_token } = await instagram_refresh_access_token(
      instagram_access_token
    )
    console.log('--- successfully refreshed long lived token')

    // Update long-lived Instagram access token in config store
    await edge_config([
      {
        operation: 'update',
        key: 'instagram_access_token',
        value: access_token
      }
    ])
    console.log('--- successfully updated edge config')
  } catch (e) {
    console.log('--- failed to refresh token:', e)
    return null
  }
})
