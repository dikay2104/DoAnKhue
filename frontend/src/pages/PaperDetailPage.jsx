import GiayB1 from '../assets/images/Giay_Detail/Giay_B1.jfif'
import GiayB2 from '../assets/images/Giay_Detail/Giay_B2.jfif'
import GiayB3 from '../assets/images/Giay_Detail/Giay_B3.jfif'
import GiayB4 from '../assets/images/Giay_Detail/Giay_B4.jfif'
import GiayBanner from '../assets/images/Giay_Detail/Giay_banner.jfif'
import DetailImage from '../components/DetailImage'

const paperTypes = [
  'Giấy báo', 'Thùng carton', 'Tạp chí', 'Bìa giấy cứng', 'Sách', 'Tập/vở', 'Giấy quảng cáo',
  'Thiệp', 'Thư', 'Hộp giấy', 'Giấy gói', 'Bì thư', 'Giấy ghi chú', 'Các loại giấy tương tự',
]

const steps = [
  {
    title: 'Phân loại và làm sạch',
    image: GiayB1,
    alt: 'Phân loại giấy sạch trước khi tái chế',
    content: 'Tách riêng giấy trắng, giấy báo và thùng carton. Đảm bảo giấy không dính thức ăn, dầu mỡ hay hóa chất. Hộp pizza dính nhiều dầu và khăn giấy đã qua sử dụng không thể tái chế; hãy bỏ vào thùng rác thông thường.',
  },
  {
    title: 'Loại bỏ tạp chất',
    image: GiayB2,
    alt: 'Gỡ ghim, kẹp, băng keo và các tạp chất khỏi giấy',
    content: 'Tháo ghim bấm kim loại, kẹp giấy và phần gáy lò xo của sổ cũ. Với thùng carton hoặc hộp giấy, bóc băng keo, tem nhãn và màng nilon bên ngoài nếu có.',
  },
  {
    title: 'Ép phẳng và làm bẹp',
    image: GiayB3,
    alt: 'Ép thùng carton thành các tấm phẳng',
    content: 'Dùng dao rọc các nếp gấp và nắp thùng carton, sau đó ép bẹp thùng thành các tấm phẳng để tiết kiệm không gian lưu trữ.',
  },
  {
    title: 'Buộc chặt thành bó',
    image: GiayB4,
    alt: 'Buộc giấy và bìa carton thành bó gọn gàng',
    content: 'Xếp bìa carton và giấy đã làm phẳng thành từng chồng vuông vức. Dùng dây thừng hoặc dây nilon buộc chặt theo hình chữ thập để giấy không xô lệch hoặc bay trong lúc vận chuyển.',
  },
]

export default function PaperDetailPage({ onNavigate }) {
  return (
    <article className="paper-detail paper-guide-detail page-view section-space">
      <div className="page-width paper-detail-inner">
        <a className="paper-back-link" href="/huong-dan" onClick={(event) => { event.preventDefault(); onNavigate('/huong-dan') }}>← Quay lại tra cứu</a>
        <header className="paper-detail-heading">
          <span className="news-category">Hướng dẫn tái chế</span>
          <h1>Cách chuẩn bị, sơ chế rác thải giấy trước khi đem đến điểm tiếp nhận</h1>
          <p>Làm sạch, loại bỏ tạp chất và bó gọn giấy để thuận tiện lưu trữ, vận chuyển.</p>
        </header>

        <DetailImage className="paper-detail-cover" src={GiayBanner} alt="Minh họa cách chuẩn bị rác thải giấy" loading="eager" />

        <section className="paper-type-panel" aria-labelledby="paper-types-title">
          <h2 id="paper-types-title">Các sản phẩm được xem là rác thải giấy</h2>
          <ul>{paperTypes.map((type) => <li key={type}>{type}</li>)}</ul>
        </section>

        <div className="paper-steps-heading">
          <span className="news-category">4 bước đơn giản</span>
          <h2>Hướng dẫn chuẩn bị rác thải giấy</h2>
        </div>
        <div className="paper-steps">
          {steps.map((step, index) => (
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

