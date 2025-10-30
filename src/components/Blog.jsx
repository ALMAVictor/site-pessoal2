const posts = [
  {
    title: 'Como criar um PWA com Vite',
    subtitle: 'Progressive Web Apps fácil!',
    embed: <iframe className="w-full h-60" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube vídeo" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>,
  },
  {
    title: 'Traga vídeos do TikTok e Instagram',
    subtitle: 'Integrações práticas!',
    embed: <iframe className="w-full h-60" src="https://www.tiktok.com/embed/7423706937365075242" title="TikTok vídeo" frameBorder="0"></iframe>,
  },
  // Instagram e LinkedIn embed: normalmente, usar src correto conforme doc
]

const Blog = () => (
  <section id="blog" className="py-16 bg-blue-50">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">Blog & Vídeos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-5 flex flex-col">
            <div className="mb-3">{post.embed}</div>
            <h3 className="text-xl font-semibold text-blue-900">{post.title}</h3>
            <p className="text-gray-600">{post.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-gray-400 text-xs">YouTube, TikTok, Instagram, LinkedIn embeds suportados</div>
    </div>
  </section>
)

export default Blog;
