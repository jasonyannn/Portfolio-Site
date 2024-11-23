import Script from 'next/script'

const videos = [
  {
    url: "https://www.tiktok.com/@ravebae.gg/video/7379519547193183506",
    views: "30K"
  },
  {
    url: "https://www.tiktok.com/@ravebae.gg/video/7423589777590504711",
    views: "3K"
  },
  {
    url: "https://www.tiktok.com/@ravebae.gg/video/7405516599383395591",
    views: "1.5K"
  },
  {
    url: "https://www.instagram.com/reel/DAIV_UQsmvy/",
    views: "91K"
  }
]

export function Videography() {
  return (
    <section className="bg-[#1a1a1a] text-white py-20">
      <Script src="https://www.tiktok.com/embed.js" strategy="afterInteractive" />
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Videography</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-6">
            Hello there! I'm Jason, a dedicated videographer with a deep love for storytelling through the lens. My journey into the world of videography has led me to explore and create engaging content on TikTok.
          </p>
          <p className="mb-6">
            I have helped TikTokers like Antony Qiu and TikTok business account xposuremediagroup, Myst Night Club with recording.
          </p>
          <p className="mb-6">
            My highest TikTok video currently sits at 30k views and 91k on Instagram where I manage the page of Ravebae.gg.
          </p>
          <p className="mb-6">
            Why TikTok? Because it's more than an app – it's a canvas for creativity!
          </p>
          <ul className="list-none space-y-4 mb-8">
            <li>
              <span className="font-bold">🌐 Vlogs:</span> Join me on adventures, discover new places, and share in the excitement of everyday life. My vlogs are a window into my world.
            </li>
            <li>
              <span className="font-bold">🎙️ Interviews:</span> Capturing authentic conversations with fascinating individuals. Every person has a unique story, and I'm here to tell it through insightful interviews.
            </li>
            <li>
              <span className="font-bold">💃 TikTok Trends:</span> Riding the waves of the latest trends! I bring fresh perspectives to viral challenges, ensuring you stay entertained and in the loop.
            </li>
            <li>
              <span className="font-bold">🕺 TikTok Dances:</span> From smooth moves to trendy choreography, let's dance! Join me as we groove to the rhythm of TikTok's hottest dance trends.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-6">My Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="relative">
                <div className="aspect-[9/16] flex items-center justify-center">
                  {video.url.includes('tiktok') ? (
                    <blockquote 
                      className="tiktok-embed" 
                      cite={video.url} 
                      data-video-id={video.url.split('/').pop()}
                    >
                      <section></section>
                    </blockquote>
                  ) : (
                    <iframe
                      src={`${video.url}embed`}
                      className="w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded">
                  {video.views} views
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
