import VoHopB1 from '../assets/images/VoHopGiay_Detail/VoHopGiay_B1.png'
import VoHopB2 from '../assets/images/VoHopGiay_Detail/VoHopGiay_B2.jpg'
import VoHopB3 from '../assets/images/VoHopGiay_Detail/VoHopGiay_B3.png'
import VoHopB4 from '../assets/images/VoHopGiay_Detail/VoHopGiay_B4.png'
import VoHopBanner from '../assets/images/VoHopGiay_Detail/VoHopGiay_Banner.png'
import DetailImage from '../components/DetailImage'

const cartonSteps = [
  {
    title: 'Làm sạch',
    image: VoHopB1,
    alt: 'Làm sạch vỏ hộp sữa sau khi sử dụng',
    content: 'Đổ cạn hoàn toàn sữa hoặc nước ép còn thừa. Có thể tráng nhẹ bằng nước sạch rồi dốc ngược cho ráo để tránh sinh mùi hôi hoặc thu hút kiến, gián.',
  },
  {
    title: 'Để riêng nắp nhựa',
    image: VoHopB2,
    alt: 'Phân loại nắp nhựa riêng khỏi vỏ hộp giấy',
    content: 'Tháo nắp nhựa và để riêng vào một bao hoặc túi khác.',
  },
  {
    title: 'Ép dẹt',
    image: VoHopB3,
    alt: 'Ép dẹt vỏ hộp sữa để tiết kiệm chỗ',
    content: 'Bóc mở các nếp gấp ở phần đầu và đáy vỏ hộp, sau đó dùng tay ấn mạnh để ép bẹp toàn bộ vỏ hộp thành một mặt phẳng.',
  },
  {
    title: 'Lưu trữ',
    image: VoHopB4,
    alt: 'Xếp gọn và lưu trữ các vỏ hộp đã ép dẹt',
    content: 'Xếp chồng các vỏ hộp đã làm bẹp, cho vào túi lưới hoặc túi nilon và bảo quản ở nơi khô ráo trước khi đem đến trạm tiếp nhận.',
  },
]

export default function BeverageCartonDetailPage({ onNavigate }) {
  return (
    <article className="paper-detail page-view section-space">
      <div className="page-width paper-detail-inner">
        <a className="paper-back-link" href="/huong-dan" onClick={(event) => { event.preventDefault(); onNavigate('/huong-dan') }}>← Quay lại tra cứu</a>
        <header className="paper-detail-heading">
          <span className="news-category">Hướng dẫn tái chế</span>
          <h1>Cách chuẩn bị, sơ chế vỏ hộp giấy trước khi đem đến điểm tiếp nhận</h1>
          <p>Hướng dẫn sơ chế vỏ hộp sữa, vỏ hộp nước trái cây và các loại vỏ hộp giấy tương tự.</p>
        </header>

        <DetailImage className="paper-detail-cover" src={VoHopBanner} alt="Hướng dẫn sơ chế vỏ hộp giấy tái chế" loading="eager" />

        <section className="paper-type-panel" aria-labelledby="carton-types-title">
          <h2 id="carton-types-title">Các sản phẩm thuộc nhóm vỏ hộp giấy</h2>
          <ul><li>Vỏ hộp sữa</li><li>Vỏ hộp nước trái cây</li><li>Các loại vỏ hộp giấy tương tự</li></ul>
        </section>

        <div className="paper-steps-heading">
          <span className="news-category">4 bước đơn giản</span>
          <h2>Hướng dẫn chuẩn bị vỏ hộp giấy</h2>
        </div>
        <div className="paper-steps">
          {cartonSteps.map((step, index) => (
            <section className="paper-step" key={step.title}>
              <div className="paper-step-copy">
                <span className="paper-step-number">Bước {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.content}</p>
              </div>
              <DetailImage src={step.image} alt={step.alt} />
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}

