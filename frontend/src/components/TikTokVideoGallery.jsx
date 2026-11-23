import { useEffect, useState } from 'react'

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
    id: '7701720727510142226',
    series: 'S\u1ed5 tay t\u00e1ch r\u00e1c',
    number: '2',
    prompt: 'L\u01b0u ngay chi\u1ebfc web \u0111\u00e1ng y\u00eau n\u00e0y nhoaaaaa \u{1F618}',
    tags: ['taptanhtachrac', 'phanloairac', 'environmental', 'danang'],
    audioId: '7701720789972994834',
  },
  {
    id: '7703798088971914497',
    series: '\u0110i\u1ec3m tin t\u00e1ch r\u00e1c',
    number: '1',
    prompt: '',
    tags: [],
    audioId: '7703798151831898901',
  },
  {
    id: '7704681430667873543',
    series: 'H\u1ecfi xo\u00e1y \u0111\u00e1p xoay',
    number: '3',
    prompt: 'U\u1ed1ng h\u1ebft thu\u1ed1c r\u1ed3i th\u00ec v\u1ec9 thu\u1ed1c d\u00f9ng \u0111\u1ec3 l\u00e0m g\u00ec?',
    tags: ['taptanhtachrac', 'phanloairac', 'environmental', 'danang'],
    audioId: '7704681488696756999',
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
  const [visibleCount, setVisibleCount] = useState(5)
  const [firstVideoIndex, setFirstVideoIndex] = useState(0)

  useEffect(() => {
    const updateVisibleCount = () => {
      const count = window.innerWidth <= 420 ? 1 : window.innerWidth <= 700 ? 2 : window.innerWidth <= 960 ? 3 : window.innerWidth <= 1100 ? 4 : 5
      setVisibleCount(count)
      setFirstVideoIndex((index) => Math.min(index, Math.max(0, videos.length - count)))
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const lastVideoIndex = Math.max(0, videos.length - visibleCount)
  const previousVideos = () => setFirstVideoIndex((index) => Math.max(0, index - 1))
  const nextVideos = () => setFirstVideoIndex((index) => Math.min(lastVideoIndex, index + 1))

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => script.remove()
  }, [firstVideoIndex, visibleCount])

  return (
    <div className="tiktok-gallery-frame">
      <button className="tiktok-gallery-arrow tiktok-gallery-arrow-prev" type="button" aria-label="Video tru\u1edbc" onClick={previousVideos} disabled={firstVideoIndex === 0}>&lsaquo;</button>
      <div className="tiktok-gallery" aria-label="Các video TikTok nổi bật">
        {videos.slice(firstVideoIndex, firstVideoIndex + visibleCount).map((video) => {
          const videoUrl = `${tiktokProfile}/video/${video.id}`
          const audioTitle = 'âm thanh gốc - Tập Tành Tách Rác'
          const audioUrl = `https://www.tiktok.com/music/${encodeURIComponent(audioTitle.replaceAll(' ', '-'))}-${video.audioId}?refer=embed`

          return (
            <article className="tiktok-video-embed-card" key={video.id}>
              <blockquote
                className="tiktok-embed"
                cite={videoUrl}
                data-video-id={video.id}
                style={{ maxWidth: '605px', minWidth: '0', width: '100%' }}
              >
                <section>
                  <a target="_blank" rel="noreferrer" title="@taptanhtachrac" href={`${tiktokProfile}?refer=embed`}>
                    @taptanhtachrac
                  </a>{' '}
                  {video.series}{' '}
                  <a title={video.number} target="_blank" rel="noreferrer" href={`https://www.tiktok.com/tag/${video.number}?refer=embed`}>
                    #{video.number}
                  </a>{video.prompt ? `: ${video.prompt} ` : ' '}{' '}
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
      <button className="tiktok-gallery-arrow tiktok-gallery-arrow-next" type="button" aria-label="Video ti\u1ebfp theo" onClick={nextVideos} disabled={firstVideoIndex >= lastVideoIndex}>&rsaquo;</button>
      <span className="tiktok-gallery-track" aria-hidden="true" />
    </div>
  )
}
