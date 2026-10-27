import ThuyTinhB1 from '../assets/images/ThuyTinh_Detail/ThuyTinh_B1.png'
import ThuyTinhB2 from '../assets/images/ThuyTinh_Detail/ThuyTinh_B2.png'
import ThuyTinhB3 from '../assets/images/ThuyTinh_Detail/ThuyTinh_B3.png'
import ThuyTinhB4 from '../assets/images/ThuyTinh_Detail/ThuyTinh_B4.jfif'
import ThuyTinhBanner from '../assets/images/ThuyTinh_Detail/ThuyTinh_Banner.png'
import DetailImage from '../components/DetailImage'

const glassProducts = [
  'Chai/lọ đựng gia vị', 'Chai đồ uống', 'Chai rượu', 'Chai thực phẩm',
  'Chai vitamin', 'Chai cà phê', 'Chai mứt',
]

const glassSteps = [
  {
    title: 'Làm sạch',
    image: ThuyTinhB1,
    alt: 'Làm sạch chai lọ thủy tinh',
    content: 'Đổ bỏ hoàn toàn nước uống, mỹ phẩm hoặc thức ăn thừa bên trong. Rửa chai bằng nước sạch rồi dốc ngược cho ráo để ngăn mùi hôi.',
  },
  {
    title: 'Tháo rời nắp đậy',
    image: ThuyTinhB2,
    alt: 'Tháo nắp khỏi chai lọ thủy tinh',
    content: 'Tách riêng nắp vặn kim loại, nút bần hoặc nắp nhựa để bỏ vào đúng nhóm rác tương ứng. Các chất liệu này không thể nấu chảy cùng mẻ với thủy tinh.',
  },
  {
    title: 'Giữ nguyên tem nhãn',
    image: ThuyTinhB3,
    alt: 'Giữ nguyên tem nhãn trên chai lọ thủy tinh',
    content: 'Không cần bóc tem nhãn khỏi thân chai. Quá trình nung chảy ở nhiệt độ cao tại nhà máy tái chế sẽ xử lý phần giấy và keo.',
  },
  {
    title: 'Đóng gói an toàn',
    image: ThuyTinhB4,
    alt: 'Đóng gói chai lọ thủy tinh an toàn khi vận chuyển',
    content: 'Xếp chai lọ nguyên vẹn vào hộp carton có vách ngăn hoặc lót giấy để tránh va đập. Nếu có mảnh vỡ, gói kín bằng nhiều lớp giấy báo và ghi rõ cảnh báo bên ngoài.',
  },
]

export default function GlassContainerDetailPage({ onNavigate }) {
  return (
    <article className="paper-detail page-view section-space">
      <div className="page-width paper-detail-inner">
        <a className="paper-back-link" href="/huong-dan" onClick={(event) => { event.preventDefault(); onNavigate('/huong-dan') }}>← Quay lại tra cứu</a>
        <header className="paper-detail-heading">
          <span className="news-category">Hướng dẫn tái chế</span>
          <h1>Cách chuẩn bị, sơ chế chai/lọ thủy tinh trước khi đem đến điểm tiếp nhận</h1>
          <p>Làm sạch, tách nắp và đóng gói chai lọ an toàn trước khi chuyển đến điểm tiếp nhận.</p>
        </header>

        <DetailImage className="paper-detail-cover" src={ThuyTinhBanner} alt="Hướng dẫn sơ chế chai lọ thủy tinh" loading="eager" />

        <section className="paper-type-panel" aria-labelledby="glass-types-title">
          <h2 id="glass-types-title">Nhóm sản phẩm chai/lọ thủy tinh</h2>
          <ul>{glassProducts.map((product) => <li key={product}>{product}</li>)}</ul>
        </section>

        <div className="paper-steps-heading">
          <span className="news-category">4 bước đơn giản</span>
          <h2>Hướng dẫn chuẩn bị chai/lọ thủy tinh</h2>
        </div>
        <div className="paper-steps">
          {glassSteps.map((step, index) => (
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

