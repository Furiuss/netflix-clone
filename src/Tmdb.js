const API_KEY = "ab6c6ed6cfb9ebf2cf487074151de92c"
const API_BASE = "https://api.themoviedb.org/3"

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default{
  getHomeList: async() => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Em Alta',
        items: []
      },
      {
        slug: 'action',
        title: 'Ação',
        items: []
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: []
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: []
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: []
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: []
      }
    ]
  }
}