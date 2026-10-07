import greenDaNangLogo from '../assets/images/LogoGreenDaNang.jpg'
import GreenReception from '../components/GreenReception'
import SectionHeading from '../components/SectionHeading'

export default function ReceptionPage() {
  return (
    <section id="diem-tiep-nhan" className="reception-section section-space page-view" aria-labelledby="reception-title">
      <div className="page-width reception-layout">
        <div className="reception-copy">
          <SectionHeading id="reception-title" title="Gửi rác đến đúng nơi">
            Green Da Nang kết nối cộng đồng với hoạt động phân loại, thu gom và chuyển giao vật liệu phù hợp.
          </SectionHeading>
          <p>Danh mục tra cứu ghi rõ những nhóm được dự án nêu là có thể chuyển đến Green Da Nang. Với vật liệu khác, hãy hỏi trước khi mang tới.</p>
          <GreenReception />
        </div>
        <figure className="partner-figure">
          <img src={greenDaNangLogo} alt="Logo Green Da Nang" />
          <figcaption>Đơn vị hỗ trợ tiếp nhận được giới thiệu trong brief dự án.</figcaption>
        </figure>
      </div>
    </section>
  )
}
