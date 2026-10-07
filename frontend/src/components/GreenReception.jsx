import { greenDaNang } from '../data/recyclingGuide'

export default function GreenReception({ compact = false }) {
  return (
    <div className={compact ? 'green-reception is-compact' : 'green-reception'}>
      <div>
        <span className="reception-label">Điểm tiếp nhận theo danh mục dự án</span>
        <strong>{greenDaNang.name}</strong>
        <address>{greenDaNang.address}</address>
        {!compact && <p>Hãy liên hệ dự án trước để xác nhận tình trạng và cách bàn giao vật liệu.</p>}
      </div>
    </div>
  )
}
