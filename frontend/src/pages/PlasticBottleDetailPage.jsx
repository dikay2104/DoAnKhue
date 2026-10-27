import ChaiNhuaB1 from '../assets/images/ChaiNhua_Detail/ChaiNhua_B1.png'
import ChaiNhuaB2 from '../assets/images/ChaiNhua_Detail/ChaiNhua_B2.png'
import ChaiNhuaB3 from '../assets/images/ChaiNhua_Detail/ChaiNhua_B3.png'
import ChaiNhuaBanner from '../assets/images/ChaiNhua_Detail/ChaiNhua_Banner.png'
import DetailImage from '../components/DetailImage'

const bottleSteps = [
  {
    title: 'Làm sạch và để ráo',
    image: ChaiNhuaB1,
    alt: 'Làm sạch và để ráo chai nhựa',
    content: 'Đổ cạn nước uống hoặc chất lỏng còn sót lại. Với chai đựng nước có đường, trà sữa hoặc xà phòng, hãy rửa bằng nước sạch rồi dốc ngược cho ráo.',
  },
  {
    title: 'Vặn xoắn và bóp bẹp',
    image: ChaiNhuaB2,
    alt: 'Vặn xoắn và bóp bẹp thân chai nhựa',
    content: 'Mở nắp, dùng tay vặn xoắn thân chai theo chiều dọc hoặc ấn bẹp chai để đẩy không khí ra ngoài, giúp tiết kiệm diện tích lưu chứa.',
  },
  {
    title: 'Đóng chặt nắp lại',
    image: ChaiNhuaB3,
    alt: 'Đóng chặt nắp sau khi ép bẹp chai nhựa',
    content: 'Ngay sau khi ép bẹp, vặn kín nắp để không khí không lọt vào và chai giữ nguyên trạng thái xẹp. Nắp cũng được giữ cùng chai để tái chế đồng bộ.',
  },
]

export default function PlasticBottleDetailPage({ onNavigate }) {
  return (
    <article className="paper-detail page-view section-space">
      <div className="page-width paper-detail-inner">
        <a className="paper-back-link" href="/huong-dan" onClick={(event) => { event.preventDefault(); onNavigate('/huong-dan') }}>← Quay lại tra cứu</a>
        <header className="paper-detail-heading">
          <span className="news-category">Hướng dẫn tái chế</span>
          <h1>Cách chuẩn bị, sơ chế chai nhựa trước khi đem đến điểm tiếp nhận</h1>
          <p>Làm sạch, ép gọn và đóng nắp chai nhựa đúng cách trước khi chuyển đến điểm tiếp nhận.</p>
        </header>

        <DetailImage className="paper-detail-cover" src={ChaiNhuaBanner} alt="Hướng dẫn chuẩn bị chai nhựa để tái chế" loading="eager" />

        <div className="paper-steps-heading">
          <span className="news-category">4 bước đơn giản</span>
          <h2>Hướng dẫn chuẩn bị chai nhựa</h2>
        </div>
        <div className="paper-steps">
          {bottleSteps.map((step, index) => (
            <section className="paper-step" key={step.title}>
              <div className="paper-step-copy">
                <span className="paper-step-number">Bước {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.content}</p>
              </div>
              <DetailImage src={step.image} alt={step.alt} />
            </section>
          ))}
          <section className="paper-step is-text-only">
            <div className="paper-step-copy">
              <span className="paper-step-number">Bước 4</span>
              <h3>Giữ nguyên tem nhãn</h3>
              <p>Có thể để nguyên lớp màng nhãn dán quanh thân chai, không cần bóc tách, trừ khi điểm tiếp nhận có quy định yêu cầu tháo rời rác nilon.</p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}

