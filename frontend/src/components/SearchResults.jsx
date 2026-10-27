import GreenReception from './GreenReception'

export default function SearchResults({ submission, onNavigate }) {
  if (!submission) return null

  const isPinSearch = submission.query.toLocaleLowerCase('vi').includes('pin')

  if (submission.matches.length === 0) {
    return (
      <div className="lookup-state no-results" role="status">
        <div className="state-symbol" aria-hidden="true">?</div>
        <div>
          <h2>Không có kết quả</h2>
          <p>Thử tên chất liệu hoặc tên loại đồ khác trong danh mục hướng dẫn.</p>
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
          <article
            className={`result-item${['paper', 'beverage-carton', 'glass-container', 'metal-cans', 'plastic-bottles', 'plastic-containers-accepted', 'plastic-containers-other', 'cooking-oil'].includes(item.id) || (item.id === 'hazardous-waste' && isPinSearch) ? ' is-clickable' : ''}`}
            key={item.id}
            {...(['paper', 'beverage-carton', 'glass-container', 'metal-cans', 'plastic-bottles', 'plastic-containers-accepted', 'plastic-containers-other', 'cooking-oil'].includes(item.id) || (item.id === 'hazardous-waste' && isPinSearch) ? {
              role: 'link',
              tabIndex: 0,
              'aria-label': `Xem hướng dẫn chi tiết: ${item.name}`,
              onClick: () => onNavigate(item.id === 'paper' ? '/huong-dan/giay-va-bia-giay' : item.id === 'beverage-carton' ? '/huong-dan/vo-hop-giay' : item.id === 'glass-container' ? '/huong-dan/chai-lo-thuy-tinh' : item.id === 'metal-cans' ? '/huong-dan/vo-lon' : item.id === 'plastic-bottles' ? '/huong-dan/chai-nhua' : item.id === 'cooking-oil' ? '/huong-dan/dau-an-thua' : item.id === 'hazardous-waste' ? '/huong-dan/pin-cu' : '/huong-dan/bao-bi-nhua'),
              onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  onNavigate(item.id === 'paper' ? '/huong-dan/giay-va-bia-giay' : item.id === 'beverage-carton' ? '/huong-dan/vo-hop-giay' : item.id === 'glass-container' ? '/huong-dan/chai-lo-thuy-tinh' : item.id === 'metal-cans' ? '/huong-dan/vo-lon' : item.id === 'plastic-bottles' ? '/huong-dan/chai-nhua' : item.id === 'cooking-oil' ? '/huong-dan/dau-an-thua' : item.id === 'hazardous-waste' ? '/huong-dan/pin-cu' : '/huong-dan/bao-bi-nhua')
                }
              },
            } : {})}
          >
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
