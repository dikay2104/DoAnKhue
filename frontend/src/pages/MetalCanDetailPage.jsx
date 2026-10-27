import VoLonB1 from '../assets/images/VoLon_Detail/VoLon_B1.png'
import VoLonB2 from '../assets/images/VoLon_Detail/VoLon_B2.png'
import VoLonB3 from '../assets/images/VoLon_Detail/VoLon_B3.png'
import VoLonB4 from '../assets/images/VoLon_Detail/VoLon_B4.png'
import VoLonBanner from '../assets/images/VoLon_Detail/VoLon_Banner.png'
import DetailImage from '../components/DetailImage'

const canProducts = [
  'Lon đồ uống', 'Lon trà', 'Lon rong biển', 'Lon dầu', 'Lon kẹo', 'Lon sữa',
  'Lon thực phẩm đóng hộp', 'Lon thức ăn cho thú nuôi', 'Lon nhôm đựng thực phẩm',
]

const canSteps = [
  {
    title: 'Làm sạch và để ráo',
    image: VoLonB1,
    alt: 'Làm sạch và để ráo vỏ lon',
    content: 'Trút cạn đồ uống hoặc gạt bỏ hết thực phẩm còn sót lại. Rửa lon bằng nước sạch rồi dốc ngược cho khô ráo để tránh mùi hôi và ruồi nhặng.',
  },
  {
    title: 'Ép bẹp giảm thể tích',
    image: VoLonB2,
    alt: 'Ép bẹp vỏ lon nhôm để giảm thể tích',
    content: 'Với vỏ lon nhôm mỏng, dùng tay bóp méo hoặc đạp bẹp thân lon thành khối dẹt để tiết kiệm không gian lưu chứa.',
  },
  {
    title: 'Xử lý nắp sắc nhọn',
    image: VoLonB3,
    alt: 'Gập hoặc đặt nắp sắc vào bên trong thân lon',
    content: 'Nếu lon đồ hộp có nắp thiếc cắt rời, hãy bẻ gập hoặc nhét hẳn phần nắp có viền sắc vào sâu bên trong thân lon để tránh gây đứt tay, trầy xước cho người vận chuyển.',
  },
  {
    title: 'Đóng gói lưu trữ',
    image: VoLonB4,
    alt: 'Đóng gói các vỏ lon đã sơ chế',
    content: 'Gom các vỏ lon đã làm bẹp và xử lý an toàn vào một túi nilon hoặc bao tải riêng, sau đó giữ ở nơi thoáng mát.',
  },
]

export default function MetalCanDetailPage({ onNavigate }) {
  return (
    <article className="paper-detail page-view section-space">
      <div className="page-width paper-detail-inner">
        <a className="paper-back-link" href="/huong-dan" onClick={(event) => { event.preventDefault(); onNavigate('/huong-dan') }}>← Quay lại tra cứu</a>
        <header className="paper-detail-heading">
          <span className="news-category">Hướng dẫn tái chế</span>
          <h1>Cách chuẩn bị, sơ chế vỏ lon trước khi đem đến điểm tiếp nhận</h1>
          <p>Làm sạch, ép gọn và xử lý cạnh sắc an toàn trước khi lưu trữ vỏ lon.</p>
        </header>

        <DetailImage className="paper-detail-cover" src={VoLonBanner} alt="Hướng dẫn tái chế vỏ lon an toàn" loading="eager" />

        <section className="paper-type-panel" aria-labelledby="can-types-title">
          <h2 id="can-types-title">Nhóm các sản phẩm lon kim loại</h2>
          <ul>{canProducts.map((product) => <li key={product}>{product}</li>)}</ul>
        </section>

        <div className="paper-steps-heading">
          <span className="news-category">4 bước đơn giản</span>
          <h2>Hướng dẫn chuẩn bị vỏ lon</h2>
        </div>
        <div className="paper-steps">
          {canSteps.map((step, index) => (
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

