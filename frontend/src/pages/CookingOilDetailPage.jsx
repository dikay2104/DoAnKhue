import DauAnB1 from '../assets/images/DauAn_Detail/DauAn_B1.png'
import DauAnB2 from '../assets/images/DauAn_Detail/DauAn_B2.png'
import DauAnB3 from '../assets/images/DauAn_Detail/DauAn_B3.png'
import DauAnB4 from '../assets/images/DauAn_Detail/DauAn_B4.png'
import DauAnBanner from '../assets/images/DauAn_Detail/DauAn_Banner.png'
import DetailImage from '../components/DetailImage'

const oilSteps = [
  {
    title: 'Để nguội hoàn toàn',
    image: DauAnB1,
    alt: 'Để dầu ăn nguội an toàn trước khi thu gom',
    content: 'Không thao tác khi dầu còn nóng để tránh bỏng hoặc làm biến dạng, nóng chảy chai nhựa đựng. Chờ dầu mỡ thừa trong chảo nguội hẳn về nhiệt độ phòng.',
  },
  {
    title: 'Lọc sạch cặn thức ăn',
    image: DauAnB2,
    alt: 'Lọc cặn thức ăn ra khỏi dầu ăn thừa',
    content: 'Đặt rây lọc mắt nhỏ hoặc một lớp khăn giấy mỏng lên miệng phễu. Rót từ từ dầu qua phễu để giữ lại vụn cháy, bột chiên, thịt cá và thức ăn còn sót.',
  },
  {
    title: 'Chiết vào chai và đậy kín',
    image: DauAnB3,
    alt: 'Chiết dầu đã lọc vào chai và vặn chặt nắp',
    content: 'Chiết phần dầu trong đã lọc cặn vào chai nhựa rỗng như chai nước suối, chai dầu ăn cũ hoặc lọ thủy tinh. Vặn chặt nắp để dầu không rò rỉ, sánh đổ trong lúc vận chuyển.',
  },
  {
    title: 'Bảo quản riêng biệt',
    image: DauAnB4,
    alt: 'Bảo quản riêng chai dầu ăn đã thu gom',
    content: 'Giữ chai dầu ở nơi khô ráo, thoáng mát. Không pha lẫn nước cặn, hóa chất tẩy rửa hoặc dầu nhớt động cơ vào dầu ăn đã qua sử dụng.',
  },
]

export default function CookingOilDetailPage({ onNavigate }) {
  return (
    <article className="paper-detail page-view section-space">
      <div className="page-width paper-detail-inner">
        <a className="paper-back-link" href="/huong-dan" onClick={(event) => { event.preventDefault(); onNavigate('/huong-dan') }}>← Quay lại tra cứu</a>
        <header className="paper-detail-heading">
          <span className="news-category">Hướng dẫn tái chế</span>
          <h1>Cách chuẩn bị, sơ chế dầu ăn thừa trước khi đem đến điểm tiếp nhận</h1>
          <p>Dầu ăn thừa thuộc nhóm sản phẩm Green Da Nang tiếp nhận.</p>
        </header>

        <DetailImage className="paper-detail-cover" src={DauAnBanner} alt="Hướng dẫn sơ chế dầu ăn thừa" loading="eager" />

        <div className="paper-steps-heading">
          <span className="news-category">4 bước đơn giản</span>
          <h2>Hướng dẫn chuẩn bị dầu ăn thừa</h2>
        </div>
        <div className="paper-steps">
          {oilSteps.map((step, index) => (
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

