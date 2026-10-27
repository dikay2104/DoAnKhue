import PinCuB1 from '../assets/images/PinCu_Detail/PinCu_B1.jpg'
import PinCuB2 from '../assets/images/PinCu_Detail/PinCu_B2.jpg'
import PinCuB3 from '../assets/images/PinCu_Detail/PinCu_B3.jpg'
import PinCuB4 from '../assets/images/PinCu_Detail/PinCu_B4.jpg'
import DetailImage from '../components/DetailImage'

const batterySteps = [
  {
    title: 'Phân loại pin theo chủng loại',
    image: PinCuB1,
    alt: 'Phân loại các loại pin cũ riêng biệt',
    content: 'Mỗi loại pin chứa thành phần hóa học khác nhau. Để lẫn nhiều loại có thể khiến chúng phản ứng với nhau và tăng nguy cơ cháy nổ. Cất riêng từng chủng loại vào các hộp riêng để đảm bảo an toàn.',
  },
  {
    title: 'Bảo quản trong lọ hoặc hộp sạch',
    image: PinCuB2,
    alt: 'Bảo quản pin cũ trong lọ thủy tinh hoặc hộp nhựa sạch',
    content: 'Sau khi phân loại, bảo quản pin trong lọ thủy tinh hoặc hộp nhựa sạch. Đặt hộp ở nơi mát mẻ, tránh khu vực có nhiều vật dễ cháy.',
  },
  {
    title: 'Dán băng keo vào hai đầu cực',
    image: PinCuB3,
    alt: 'Dán băng keo cách điện vào hai đầu cực của pin',
    content: 'Dán băng keo có độ dính tốt lên hai đầu cực kim loại của pin để hạn chế pin va chạm trực tiếp với nhau và giảm nguy cơ chập cháy. Dán chắc để băng keo không bung trong lúc vận chuyển.',
  },
  {
    title: 'Mang pin đến điểm thu gom chuyên dụng',
    image: PinCuB4,
    alt: 'Chuyển pin cũ đến điểm thu gom chuyên dụng',
    content: 'Khi đã có một lượng pin đáng kể, hãy chuyển đến điểm thu gom để đơn vị có trách nhiệm xử lý. Không vứt pin cùng rác thải sinh hoạt vì pin có thể lẫn vào các vật liệu khác.',
  },
]

export default function UsedBatteryDetailPage({ onNavigate }) {
  return (
    <article className="paper-detail page-view section-space">
      <div className="page-width paper-detail-inner">
        <a className="paper-back-link" href="/huong-dan" onClick={(event) => { event.preventDefault(); onNavigate('/huong-dan') }}>← Quay lại tra cứu</a>
        <header className="paper-detail-heading">
          <span className="news-category">Rác cần xử lý riêng</span>
          <h1>Cách xử lý pin cũ đã qua sử dụng</h1>
          <p>Giữ pin cũ an toàn trong lúc lưu trữ và chuyển đến điểm thu gom chuyên dụng.</p>
        </header>

        <div className="paper-steps-heading">
          <span className="news-category">4 bước an toàn</span>
          <h2>Hướng dẫn xử lý pin cũ</h2>
        </div>
        <div className="paper-steps">
          {batterySteps.map((step, index) => (
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

