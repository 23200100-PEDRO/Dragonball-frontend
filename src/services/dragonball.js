import axios from 'axios'

const API_URL = 'https://dragonball-api.com/api/characters'

export const getCharacters = async () => {
  try {
    const res = await axios.get(API_URL)
    return res.data.items
  } catch (error) {
    console.error('Error API:', error)
    return []
  }
}