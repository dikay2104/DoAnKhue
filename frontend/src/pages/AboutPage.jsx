import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faGraduationCap, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import SectionHeading from '../components/SectionHeading'

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
  },
  {
    initials: 'NH',
    name: 'Thạc sĩ Nguyễn Thị Phương Huyền',
    detail: 'Cố vấn, Phó Trưởng phòng Quản lý Biên giới, Sở Ngoại vụ thành phố Đà Nẵng.',
  },
]

const members = [
  ['Lê Thị Thục Khuê', 'Trưởng dự án'],
  ['Lê Anh Thư', 'Ban Nội dung'],
  ['Thái Nguyễn Như Quỳnh', 'Ban Đối ngoại'],
  ['Nguyễn Đoàn Thy Thy', 'Ban Nghiên cứu'],
  ['Nguyễn Thị Phương Trinh', 'Ban Thiết kế'],
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
            <div className="team-advisors">
              <h2>Hội đồng cố vấn</h2>
              {advisors.map((advisor) => (
                <article className="person-row" key={advisor.initials}>
                  <span className="person-initial" aria-hidden="true">{advisor.initials}</span>
                  <div><strong>{advisor.name}</strong><p>{advisor.detail}</p></div>
                </article>
              ))}
            </div>
            <div className="team-members">
              <h2>Thành viên dự án</h2>
              <ul>
                {members.map(([name, role]) => <li key={name}><strong>{name}</strong><span>{role}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
