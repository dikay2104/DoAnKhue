import greenDaNangLogo from '../assets/images/LogoGreenDaNang.jpg'

const mapUrl = 'https://www.google.com/maps/place/Ch%E1%BA%BF+Lan+Vi%C3%AAn+%26+Ki%E1%BB%87t+35+Ch%E1%BA%BF+Lan+Vi%C3%AAn,+Ng%C5%A9+H%C3%A0nh+S%C6%A1n,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.0424022,108.2456681,18.5z/data=!4m6!3m5!1s0x31421766fc199cfb:0x137100b5b0204b67!8m2!3d16.042365!4d108.2462595!16s%2Fg%2F11f348l9g3?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D'

export default function ReceptionPage() {
  return (
    <article className="reception-page page-view section-space" aria-labelledby="reception-title">
      <div className="page-width reception-content">
        <header className="reception-heading">
          <p className="hero-eyebrow">Điểm tiếp nhận</p>
          <h1 id="reception-title">Green Da Nang</h1>
          <p>Trạm Xanh kết nối cộng đồng cùng phân loại, thu gom và đưa rác đến đúng nơi xử lý, tái chế.</p>
        </header>

        <div className="reception-story">
          <p>Green Da Nang (Trạm Xanh) là một dự án cộng đồng về môi trường được thành lập tại Đà Nẵng từ năm 2020. Dự án ra đời với mong muốn tạo ra một kênh kết nối cộng đồng cùng tham gia bảo vệ môi trường, nâng cao nhận thức về phân loại rác tại nguồn, thu gom và đưa rác đến đúng nơi xử lý, tái chế.</p>

          <figure className="reception-logo-figure">
            <img src={greenDaNangLogo} alt="Logo Green Da Nang" />
          </figure>

          <p>Từ những hoạt động thu gom ban đầu, Green Da Nang từng bước mở rộng các nhóm rác tiếp nhận, bao gồm giấy bìa, nhựa, lon nhôm, vỏ hộp giấy và một số loại rác có giá trị tái chế thấp hoặc khó được thu gom thông thường. Những loại rác sau khi được phân loại và làm sạch sẽ được chuyển đến các đơn vị phù hợp để tái chế hoặc xử lý, qua đó kéo dài vòng đời của vật liệu và hạn chế lượng rác bị đưa đến bãi chôn lấp.</p>

          <p>Bên cạnh hoạt động thu gom, Green Da Nang còn tổ chức và đồng hành cùng nhiều hoạt động đổi rác lấy quà, phiên chợ xanh, workshop và chương trình giáo dục môi trường tại trường học, sự kiện và cộng đồng. Các hoạt động này hướng đến việc đưa kiến thức về phân loại rác đến gần hơn với người dân, đặc biệt là người trẻ.</p>

          <figure className="event-image-placeholder" aria-label="Vị trí ảnh sự kiện Green Da Nang">
            <div>Ảnh sự kiện Green Da Nang</div>
            <figcaption>Hình ảnh hoạt động cộng đồng</figcaption>
          </figure>

          <p>Một điểm đáng chú ý trong hoạt động của Green Da Nang là kết nối với các đối tác để tiếp nhận và xử lý những loại rác khó tái chế hoặc ít có giá trị kinh tế, chẳng hạn như vỏ hộp giấy, nhựa dùng một lần, vỉ thuốc rỗng và dầu ăn thừa.</p>

          <p>Green Da Nang không chỉ là một điểm tiếp nhận rác. Thông qua việc phân loại - thu gom - chuyển giao - tái chế, dự án góp phần giúp cộng đồng nhìn nhận rác thải như một nguồn tài nguyên có thể tiếp tục được sử dụng khi được xử lý đúng cách.</p>

          <address className="reception-address">
            <strong>Địa chỉ:</strong>{' '}
            <a href={mapUrl} target="_blank" rel="noreferrer">35 Chế Lan Viên, phường Ngũ Hành Sơn, Đà Nẵng</a>
          </address>
        </div>
      </div>
    </article>
  )
}
