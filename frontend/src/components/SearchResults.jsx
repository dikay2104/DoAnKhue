import GreenReception from './GreenReception'

export default function SearchResults({ submission, onSuggestion }) {
  if (!submission) return null

  if (submission.matches.length === 0) {
    return (
      <div className="lookup-state no-results" role="status">
        <div className="state-symbol" aria-hidden="true">?</div>
        <div>
          <h2>Không có kết quả</h2>
          <p>Thử tên chất liệu hoặc tên loại đồ khác trong danh mục hướng dẫn.</p>
          {submission.suggestions.length > 0 && (
            <div className="suggestions">
              <span>Có thể bạn muốn tìm:</span>
              {submission.suggestions.map((item) => (
                <button key={item.id} type="button" onClick={() => onSuggestion(item.name)}>
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="lookup-results" role="status" aria-label={`Có ${submission.matches.length} kết quả`}>
      <div className="results-intro">
        <span className="result-count">{submission.matches.length} kết quả</span>
        <h2>Kết quả cho “{submission.query}”</h2>
      </div>
      <div className="result-list">
        {submission.matches.map((item) => (
          <article className="result-item" key={item.id}>
            <div className="result-main">
              <div className="result-title-row">
                <h3>{item.name}</h3>
                <span className={item.group === 'Rác tái chế' ? 'result-tag is-recyclable' : 'result-tag'}>
                  {item.group}
                </span>
              </div>
              <p className="material-line">Chất liệu: {item.material}</p>
              <div className="preparation">
                <h4>{item.preparation.length > 0 ? 'Cách chuẩn bị / xử lý' : 'Lưu ý'}</h4>
                {item.preparation.length > 0
                  ? <ul>{item.preparation.map((step) => <li key={step}>{step}</li>)}</ul>
                  : <p>Danh mục chưa nêu cách chuẩn bị cụ thể cho loại này. Hãy xem hướng dẫn phân loại tại địa phương.</p>}
              </div>
              {item.acceptedByGreen ? (
                <GreenReception compact />
              ) : (
                <p className="destination-note">Điểm tiếp nhận của Green Da Nang cho loại này chưa được xác nhận trong danh mục dự án.</p>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="result-disclaimer">Hãy kiểm tra hướng dẫn của nơi thu gom trước khi chuyển giao. Tình trạng sạch, khô và thành phần vật liệu có thể ảnh hưởng đến việc tiếp nhận.</p>
    </div>
  )
}
