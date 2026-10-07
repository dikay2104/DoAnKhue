import GreenReception from '../components/GreenReception'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'
import SectionHeading from '../components/SectionHeading'
import { quickGroups } from '../data/recyclingGuide'

export default function GuidePage({ searchProps, submission, onSuggestion, onQuickSearch }) {
  return (
    <section id="huong-dan" className="guide-section section-space page-view" aria-labelledby="guide-title">
      <div className="page-width">
        <SectionHeading id="guide-title" title="Tìm đúng nhóm. Chuẩn bị đúng cách.">
          Tra cứu theo chất liệu hoặc tên món đồ để xem cách phân loại và chuẩn bị.
        </SectionHeading>

        <div className="guide-search-panel">
          <SearchForm {...searchProps} inputId="guide-waste-search" />
        </div>

        <SearchResults submission={submission} onSuggestion={onSuggestion} />

        <div className="quick-guide">
          <div className="quick-guide-intro">
            <h2>Bắt đầu từ chất liệu</h2>
            <p>Chọn một nhóm để xem các hướng dẫn có trong danh mục.</p>
          </div>
          <div className="quick-groups">
            {quickGroups.map((group) => (
              <button className="quick-group" key={group.label} type="button" onClick={() => onQuickSearch(group.term)}>
                <span className="quick-group-name">{group.label}<span aria-hidden="true">↗</span></span>
                <span>{group.note}</span>
              </button>
            ))}
          </div>
        </div>

        <aside className="guide-help">
          <h2>Chưa chắc món đồ thuộc nhóm nào?</h2>
          <p>Thông tin có thể khác nhau theo tình trạng vật liệu và nơi thu gom. Hãy xác nhận trước khi chuyển giao.</p>
          <GreenReception compact />
        </aside>
        <p className="guide-note">Danh mục đang được nhóm dự án tổng hợp. Quy định thu gom có thể khác nhau giữa các đơn vị và địa phương.</p>
      </div>
    </section>
  )
}
