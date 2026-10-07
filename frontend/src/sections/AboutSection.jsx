import SectionHeading from '../components/SectionHeading'

export default function AboutPage() {
  return (
    <div className="about-page page-view">
      <section id="gioi-thieu" className="about-section section-space" aria-labelledby="about-title">
        <div className="page-width about-layout">
          <div className="about-statement">
            <SectionHeading id="about-title" title="Tập Tành Tách Rác">
              Một dự án truyền thông giúp người trẻ tại Đà Nẵng hiểu cách phân loại và xử lý chất thải rắn sinh hoạt có khả năng tái chế.
            </SectionHeading>
            <p className="about-quote">“Đừng tiện tay, phân loại ngay”</p>
          </div>
          <div className="activity-list" aria-label="Lĩnh vực hoạt động">
            <article><span className="activity-mark" aria-hidden="true">Lan tỏa</span><div><h2>Truyền thông môi trường</h2><p>Nâng cao kiến thức về phân loại và xử lý rác sinh hoạt.</p></div></article>
            <article><span className="activity-mark" aria-hidden="true">Hướng dẫn</span><div><h2>Giáo dục phân loại rác</h2><p>Hướng dẫn nhận biết, phân loại và chuẩn bị rác tái chế.</p></div></article>
            <article><span className="activity-mark" aria-hidden="true">Kết nối</span><div><h2>Kết nối cộng đồng</h2><p>Lan tỏa kiến thức qua nền tảng trực tuyến và hoạt động trải nghiệm.</p></div></article>
          </div>
        </div>
      </section>

      <section className="team-section section-space" aria-labelledby="team-title">
        <div className="page-width">
          <SectionHeading id="team-title" title="Những người đứng sau dự án">
            Nhóm thực hiện cùng các cố vấn và đơn vị hỗ trợ.
          </SectionHeading>
          <div className="team-layout">
            <div className="team-advisors">
              <h2>Hội đồng cố vấn</h2>
              <article className="person-row"><span className="person-initial" aria-hidden="true">ĐT</span><div><strong>Tiến sĩ Đỗ Phương Thảo</strong><p>Giảng viên hướng dẫn, Bộ môn Công nghệ truyền thông, Trường Đại học FPT Đà Nẵng.</p></div></article>
              <article className="person-row"><span className="person-initial" aria-hidden="true">NH</span><div><strong>Thạc sĩ Nguyễn Thị Phương Huyền</strong><p>Cố vấn, Phó Trưởng phòng Quản lý Biên giới, Sở Ngoại vụ thành phố Đà Nẵng.</p></div></article>
            </div>
            <div className="team-members">
              <h2>Thành viên dự án</h2>
              <ul>
                <li><strong>Lê Thị Thục Khuê</strong><span>Trưởng dự án</span></li>
                <li><strong>Lê Anh Thư</strong><span>Ban Nội dung</span></li>
                <li><strong>Thái Nguyễn Như Quỳnh</strong><span>Ban Đối ngoại</span></li>
                <li><strong>Nguyễn Đoàn Thy Thy</strong><span>Ban Nghiên cứu</span></li>
                <li><strong>Nguyễn Thị Phương Trinh</strong><span>Ban Thiết kế</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
