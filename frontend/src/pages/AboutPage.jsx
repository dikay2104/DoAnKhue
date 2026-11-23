import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faGraduationCap, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import SectionHeading from '../components/SectionHeading'
import greenDaNangLogo from '../assets/images/LogoGreenDaNang.jpg'
import advisorThao from '../assets/images/Profile_nhom/Tiến sĩ Đỗ Phương Thảo.jpg'
import advisorHuyen from '../assets/images/Profile_nhom/Thạc sĩ Nguyễn Thị Phương Huyền.jpg'
import memberKhue from '../assets/images/Profile_nhom/Lê Thị Thục Khuê.jpg'
import memberThu from '../assets/images/Profile_nhom/Lê Anh Thư.jpeg'
import memberQuynh from '../assets/images/Profile_nhom/Thái Nguyễn Như Quỳnh.jpg'
import memberThy from '../assets/images/Profile_nhom/Nguyễn Đoàn Thy Thy.jpg'
import memberTrinh from '../assets/images/Profile_nhom/Nguyễn Thị Phương Trinh.jpg'

const activities = [
  {
    title: 'Truyền thông môi trường',
    description: 'Nâng cao kiến thức của người trẻ về phân loại và xử lý chất thải rắn sinh hoạt có khả năng tái chế.',
    icon: faBullhorn,
  },
  {
    title: 'Giáo dục phân loại rác',
    description: 'Cung cấp thông tin và hướng dẫn nhận biết, phân loại, chuẩn bị rác tái chế đúng cách.',
    icon: faGraduationCap,
  },
  {
    title: 'Truyền thông cộng đồng',
    description: 'Lan tỏa kiến thức về phân loại rác thông qua các nền tảng trực tuyến và hoạt động trải nghiệm tương tác.',
    icon: faPeopleGroup,
  },
]

const advisors = [
  {
    initials: 'ĐT',
    name: 'Tiến sĩ Đỗ Phương Thảo',
    detail: 'Giảng viên hướng dẫn, Bộ môn Công nghệ truyền thông, Trường Đại học FPT Đà Nẵng.',
    image: advisorThao,
  },
  {
    initials: 'NH',
    name: 'Thạc sĩ Nguyễn Thị Phương Huyền',
    detail: 'Cố vấn, Phó Trưởng phòng Quản lý Biên giới, Sở Ngoại vụ thành phố Đà Nẵng.',
    image: advisorHuyen,
  },
]

const members = [
  { name: 'Lê Thị Thục Khuê', role: 'Trưởng dự án', image: memberKhue },
  { name: 'Lê Anh Thư', role: 'Ban Nội dung', image: memberThu },
  { name: 'Thái Nguyễn Như Quỳnh', role: 'Ban Đối ngoại', image: memberQuynh },
  { name: 'Nguyễn Đoàn Thy Thy', role: 'Ban Nghiên cứu', image: memberThy },
  { name: 'Nguyễn Thị Phương Trinh', role: 'Ban Thiết kế', image: memberTrinh },
]

export default function AboutPage() {
  return (
    <div className="about-page page-view">
      <section id="gioi-thieu" className="about-section section-space" aria-labelledby="about-title">
        <div className="page-width">
          <SectionHeading as="h1" id="about-title" title="CHÀO MỪNG BẠN ĐẾN VỚI TẬP TÀNH TÁCH RÁC">
            “Tập Tành Tách Rác” là một dự án truyền thông nhằm nâng cao kiến thức của người trẻ tại thành phố Đà Nẵng về cách phân loại và xử lý chất thải rắn sinh hoạt có khả năng tái chế thông qua các hoạt động truyền thông trên mạng xã hội, nền tảng trực tuyến và trải nghiệm tương tác.
          </SectionHeading>
        </div>
      </section>

      <section className="activity-section section-space" aria-labelledby="activity-title">
        <div className="page-width">
          <header className="activity-heading">
            <h2 id="activity-title">LĨNH VỰC HOẠT ĐỘNG</h2>
            <span aria-hidden="true" />
          </header>
          <div className="activity-grid">
            {activities.map((activity) => (
              <article className="activity-card" key={activity.title}>
                <div className="activity-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={activity.icon} />
                </div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section section-space" aria-labelledby="team-title">
        <div className="page-width">
          <SectionHeading id="team-title" title="Những người đứng sau dự án">
            Nhóm thực hiện cùng các cố vấn và đơn vị hỗ trợ.
          </SectionHeading>
          <div className="team-layout">
            <section className="team-group team-advisors" aria-labelledby="advisors-title">
              <h2 id="advisors-title">Hội đồng cố vấn</h2>
              <ul className="team-card-grid team-advisor-grid">
                {advisors.map((advisor) => (
                  <li className="team-person-card" key={advisor.initials}>
                    <img className="person-photo" src={advisor.image} alt={advisor.name} />
                    <div className="member-info">
                      <strong>{advisor.name}</strong>
                      <span>{advisor.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section className="team-group team-members" aria-labelledby="members-title">
              <h2 id="members-title">Thành viên dự án</h2>
              <ul className="team-card-grid team-member-grid">
                {members.map(({ name, role, image }) => (
                  <li className="team-person-card" key={name}>
                    <img className="person-photo" src={image} alt={name} />
                    <div className="member-info"><strong>{name}</strong><span>{role}</span></div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className="team-supporter">
            <h2>Đơn vị hỗ trợ tiếp nhận</h2>
            <article className="supporter-card">
              <img src={greenDaNangLogo} alt="Logo Green Da Nang" />
              <div>
                <strong>Tổ chức Green Da Nang</strong>
                <p>Tổ chức phi lợi nhuận cộng đồng, Đà Nẵng.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
