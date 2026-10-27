import { useEffect } from 'react'

const videos = [
  {
    id: '7697580095610916097',
    series: 'Hỏi xoáy đáp xoay',
    number: '1',
    prompt: 'Bạn cảm thấy mình là người duy nhất phân loại rác?',
    tags: ['taptanhtachrac', 'greendanang', 'phanloairac', 'environmental'],
    audioId: '7697580274447567623',
  },
  {
    id: '7699084589087624455',
    series: 'Sổ tay tách rác',
    number: '1',
    prompt: 'Phân loại rác có nhất thiết phải chuẩn bị đủ 3 thùng rác?',
    tags: ['taptanhtachrac', 'phanloairac', 'environmental', 'danang'],
    audioId: '7699084629109754645',
  },
  {
    id: '7700178077136997640',
    series: 'Hỏi xoáy đáp xoay',
    number: '2',
    prompt: 'Cứ là giấy và nhựa thì đều tái chế được?',
    tags: ['taptanhtachrac', 'phanloairac', 'environmental', 'danang'],
    audioId: '7700178150781209352',
  },
]

const tiktokProfile = 'https://www.tiktok.com/@taptanhtachrac'

export default function TikTokVideoGallery() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => script.remove()
  }, [])

  return (
    <div className="tiktok-gallery-frame">
      <div className="tiktok-gallery" aria-label="Các video TikTok nổi bật">
        {videos.map((video) => {
          const videoUrl = `${tiktokProfile}/video/${video.id}`
          const audioTitle = 'âm thanh gốc - Tập Tành Tách Rác'
          const audioUrl = `https://www.tiktok.com/music/${encodeURIComponent(audioTitle.replaceAll(' ', '-'))}-${video.audioId}?refer=embed`

          return (
            <article className="tiktok-video-embed-card" key={video.id}>
              <blockquote
                className="tiktok-embed"
                cite={videoUrl}
                data-video-id={video.id}
                style={{ maxWidth: '605px', minWidth: '325px' }}
              >
                <section>
                  <a target="_blank" rel="noreferrer" title="@taptanhtachrac" href={`${tiktokProfile}?refer=embed`}>
                    @taptanhtachrac
                  </a>{' '}
                  {video.series}{' '}
                  <a title={video.number} target="_blank" rel="noreferrer" href={`https://www.tiktok.com/tag/${video.number}?refer=embed`}>
                    #{video.number}
                  </a>:{' '}
                  {video.prompt}{' '}
                  {video.tags.map((tag) => (
                    <a key={tag} title={tag} target="_blank" rel="noreferrer" href={`https://www.tiktok.com/tag/${tag}?refer=embed`}>
                      #{tag}{' '}
                    </a>
                  ))}
                  <a target="_blank" rel="noreferrer" title={`♬ ${audioTitle}`} href={audioUrl}>
                    ♬ {audioTitle}
                  </a>
                </section>
              </blockquote>
              <a className="tiktok-fallback-link" href={videoUrl} target="_blank" rel="noreferrer">
                Xem video trên TikTok
              </a>
            </article>
          )
        })}
      </div>
      <span className="tiktok-gallery-track" aria-hidden="true" />
    </div>
  )
}
