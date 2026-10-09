import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faRecycle, faXmark } from '@fortawesome/free-solid-svg-icons'

const contaminationItems = [
  'Chất thải từ động vật',
  'Trang bị bảo hộ cá nhân, bao gồm khẩu trang',
  'Tã dùng một lần',
  'Đồ thủy tinh dùng để nấu ăn, Pyrex, đồ dùng cho lò nướng, ly uống nước và đồ gốm sứ',
  'Băng keo',
  'Khăn giấy, khăn ướt, tăm bông và bông gòn',
  'Nồi và chảo',
]

const contaminationTips = [
  'Kiểm tra công cụ Hướng dẫn phân loại để biết những loại rác nào có thể tái chế tại nhà.',
  'Kiểm tra website hoặc tờ hướng dẫn thu gom của chính quyền địa phương để biết quy định cụ thể.',
]

const plasticSymbols = [
  { number: '1', code: 'PET', description: 'Có thể tái chế, cần vệ sinh kỹ.' },
  { number: '2', code: 'HDPE', description: 'Phổ biến và dễ tái chế.' },
  { number: '3', code: 'PVC', description: 'Rất độc và không thể tái chế.' },
  { number: '4', code: 'LDPE', description: 'Có thể tái chế nhưng không phải trung tâm nào cũng xử lý.' },
  { number: '5', code: 'PP', description: 'Khá phổ biến để tái chế.' },
  { number: '6', code: 'PS', description: 'Độc hại, không thể tái chế.' },
  { number: '7', code: 'OTHER', description: 'Thường không thể tái chế hoặc rất khó tái chế.' },
]

export default function KnowledgeArticleBody({ article }) {
  if (article.slug === 'giam-tap-chat-tai-che') {
    return (
      <div className="news-article-body contamination-article-body">
        <p className="article-lead">Việc bỏ đúng loại rác vào đúng thùng rất quan trọng. Những loại rác bị bỏ nhầm được gọi là rác gây nhiễm bẩn. Phần lớn chúng ta đang phân loại khá đúng, tuy nhiên khi có quá nhiều vật liệu bị nhiễm bẩn được thu gom, điều này có thể khiến cả một xe rác tái chế không thể được đưa đi tái chế.</p>

        <figure className="article-image-slot article-image-slot-featured">
          <div className="image-slot-mark" aria-hidden="true">＋</div>
          <figcaption>Vị trí ảnh minh họa về tình trạng nhiễm bẩn rác tái chế</figcaption>
        </figure>

        <section aria-labelledby="contamination-items-title">
          <h2 className="contamination-section-title" id="contamination-items-title">Những món đồ KHÔNG nên bỏ vào thùng rác tái chế tại nhà</h2>
          <p>Những món đồ sau cần được bỏ vào thùng rác thông thường:</p>
          <ul className="contamination-item-list">
            {contaminationItems.map((item) => (
              <li key={item}>
                <span className="contamination-x" aria-hidden="true"><FontAwesomeIcon icon={faXmark} /></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="contamination-tips-title">
          <h2 id="contamination-tips-title">Mẹo để tránh làm nhiễm bẩn rác tái chế</h2>
          <ul className="article-check-list">
            {contaminationTips.map((tip) => (
              <li key={tip}>
                <span className="article-check-mark" aria-hidden="true"><FontAwesomeIcon icon={faCheck} /></span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="what-is-contamination-title">
          <h2 id="what-is-contamination-title">Nhiễm bẩn trong rác tái chế là gì?</h2>
          <p>Nói một cách đơn giản, nhiễm bẩn trong rác tái chế là tình trạng có những thứ không nên xuất hiện trong dòng rác tái chế nhưng lại bị bỏ vào đó.</p>
          <p>Trong một số trường hợp, nguyên nhân có thể là do chúng ta “tái chế theo hy vọng” - tức là bỏ một món đồ vào thùng rác tái chế mà không kiểm tra trước, chỉ vì hy vọng rằng món đồ đó có thể được tái chế.</p>
          <p>Một món đồ cũng có thể là loại có khả năng tái chế nhưng không được chính quyền địa phương nơi bạn sinh sống thu gom. Ví dụ, vỉ thuốc rỗng hoặc dầu ăn thừa có thể được thu gom theo những hình thức riêng thay vì bỏ chung với giấy, nhựa hay vỏ lon.</p>
          <p>Hoặc một món đồ vốn được thu gom để tái chế nhưng lại bị nhiễm bẩn bởi những chất không phù hợp, chẳng hạn như hộp cơm giấy còn dính nhiều thức ăn và dầu mỡ, hoặc hộp sữa vẫn còn sữa bên trong.</p>
          <p>Ngoài ra, cũng có những món đồ hoàn toàn không thể tái chế và sẽ được đề cập trong một bài viết khác.</p>
        </section>

        <section aria-labelledby="why-contamination-title">
          <h2 id="why-contamination-title">Tại sao nhiễm bẩn lại là vấn đề?</h2>
          <p>Có nhiều lý do khiến việc bỏ đúng loại rác vào đúng thùng rất quan trọng.</p>
          <p>Trước hết, nếu có quá nhiều loại rác bị bỏ nhầm, cả một xe rác tái chế có thể không được tái chế. Nói cách khác, chỉ một vài món không phù hợp cũng có thể làm ảnh hưởng đến toàn bộ lượng rác còn lại.</p>
          <p>Một vấn đề khác là chi phí thu gom và phân loại rác tái chế bị nhiễm bẩn sẽ tăng lên và cuối cùng những chi phí này được chi trả bởi cộng đồng thông qua thuế. Bằng cách đảm bảo bỏ đúng loại rác vào đúng thùng, chúng ta có thể giúp tiết kiệm thời gian, chi phí và làm cho quá trình tái chế hiệu quả hơn.</p>
          <p>Nhiễm bẩn cũng có thể làm giảm giá trị của vật liệu có khả năng tái chế, thậm chí khiến chúng phải được đem đi xử lý thay vì tái chế thành sản phẩm mới. Một số loại rác nhiễm bẩn còn có thể gây nguy hiểm cho công nhân làm việc trong lĩnh vực thu gom và xử lý rác.</p>
          <p>Tóm lại, tốt nhất là tránh làm nhiễm bẩn rác tái chế. Điều này đôi khi có thể gây nhầm lẫn vì hệ thống tái chế chưa được áp dụng thống nhất ở mọi nơi. Trong thời gian chờ hệ thống trở nên đồng bộ hơn, hãy tham khảo những hướng dẫn giúp bạn phân loại rác đúng cách.</p>
        </section>

        <aside className="article-tip-box" aria-labelledby="small-tips-title">
          <h2 id="small-tips-title">Mẹo nhỏ</h2>
          <ul>
            <li>Tận dụng nước rửa chén để tráng nhanh những món như lọ thủy tinh và chai nhựa.</li>
            <li>Kiểm tra xem địa phương có thu gom nắp chai nhựa và lọ thủy tinh hay không.</li>
            <li>Nhớ tháo xốp polystyrene hoặc màng xốp bong bóng sau khi phân loại thùng carton.</li>
          </ul>
        </aside>
      </div>
    )
  }

  if (article.slug === 'y-nghia-ky-hieu-tai-che') {
    return (
      <div className="news-article-body symbol-article-body">
        <p className="article-lead">Các ký hiệu tái chế xuất hiện trên rất nhiều món đồ quen thuộc hằng ngày và có thể giúp bạn hiểu rõ hơn về cách xử lý chúng. Dưới đây là hướng dẫn về một số ký hiệu thường gặp trên bao bì.</p>

        <section aria-labelledby="symbol-labels-title">
          <h2 id="symbol-labels-title">Nhãn tái chế trên bao bì</h2>
          <p>Hãy để ý các ký hiệu tái chế được in trên nhiều loại bao bì, từ lon nước ngọt, túi bánh mì đến chai nhựa đựng sản phẩm vệ sinh cá nhân. Những ký hiệu này có thể cho biết bao bì có thể được thu gom để tái chế hay cần được xử lý theo cách khác.</p>
          <p>Lưu ý: không phải bao bì nào cũng có ký hiệu tái chế, và việc không có ký hiệu không đồng nghĩa với việc món đồ đó không thể tái chế.</p>
        </section>

        <div className="symbol-guide-list" aria-label="Ý nghĩa các ký hiệu tái chế">
          <article className="symbol-guide-card">
            <div className="symbol-guide-mark symbol-guide-mobius" aria-hidden="true">
              <FontAwesomeIcon icon={faRecycle} />
              <span>Mobius</span>
            </div>
            <div className="symbol-guide-copy">
              <h3>Mobius loop</h3>
              <span className="symbol-guide-rule" aria-hidden="true" />
              <p>Ký hiệu này cho biết bao bì có thể được làm sạch và đưa vào hệ thống thu gom tái chế phù hợp.</p>
            </div>
          </article>

          {plasticSymbols.map((symbol) => (
            <article className="symbol-guide-card" key={symbol.number}>
              <div className="symbol-guide-mark" role="img" aria-label={`Mã nhựa ${symbol.number}, ${symbol.code}`}>
                <FontAwesomeIcon icon={faRecycle} aria-hidden="true" />
                <strong>{symbol.number}</strong>
                <span>{symbol.code}</span>
              </div>
              <div className="symbol-guide-copy">
                <h3>Mã nhựa {symbol.number}: {symbol.code}</h3>
                <span className="symbol-guide-rule" aria-hidden="true" />
                <p>{symbol.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    )
  }

  if (article.slug !== 'tai-che-nhieu-hon') {
    return (
      <div className="news-detail-placeholder">
        Nội dung chi tiết bài viết sẽ được bổ sung sau.
      </div>
    )
  }

  return (
    <div className="news-article-body">
      <p className="article-lead">Không phải món đồ nào sau khi sử dụng cũng nhất thiết phải trở thành rác bỏ đi. Một số loại chất thải vẫn có thể được thu hồi và tái chế nếu được nhận biết, phân loại và chuẩn bị đúng cách.</p>

      <p>Tuy nhiên, việc nhận biết rác tái chế không chỉ đơn giản là nhìn vào chất liệu của một món đồ. Một món đồ có thể được làm từ vật liệu có khả năng tái chế nhưng vẫn không được tiếp nhận nếu bẩn, còn chứa chất thải hoặc không thuộc nhóm được thu gom.</p>

      <p>Vậy làm sao để biết món đồ trong tay bạn có thể được tái chế? Hãy bắt đầu từ những điều đơn giản sau.</p>

      <figure className="article-image-slot article-image-slot-featured">
        <div className="image-slot-mark" aria-hidden="true">＋</div>
        <figcaption>Vị trí ảnh minh họa: các loại rác tái chế</figcaption>
      </figure>

      <section aria-labelledby="article-material-title">
        <h2 id="article-material-title">1. Nhìn vào chất liệu của món đồ</h2>
        <p>Bước đầu tiên là xác định món đồ được làm từ chất liệu gì.</p>
        <p>Một số nhóm vật liệu thường có khả năng được thu hồi để tái chế như giấy, nhựa, kim loại và một số loại bao bì. Tuy nhiên, không phải mọi sản phẩm làm từ những vật liệu này đều được tiếp nhận theo cùng một cách.</p>
        <p>Ví dụ, một chai nhựa và một món đồ nhựa khác có thể có cách xử lý hoàn toàn khác nhau. Vì vậy, thay vì chỉ nhìn vào chữ “nhựa” hay “giấy”, hãy kiểm tra xem món đồ đó có thuộc nhóm được thu gom hay không.</p>
      </section>

      <figure className="article-image-slot">
        <div className="image-slot-mark" aria-hidden="true">＋</div>
        <figcaption>Vị trí ảnh minh họa: kiểm tra chất liệu và ký hiệu trên bao bì</figcaption>
      </figure>

      <section aria-labelledby="article-condition-title">
        <h2 id="article-condition-title">2. Kiểm tra tình trạng của món đồ</h2>
        <p>Sau khi xác định được loại rác, hãy kiểm tra xem món đồ còn thức ăn, chất lỏng hoặc các chất khác bên trong hay không.</p>
        <p>Rác tái chế thường cần được chuẩn bị ở trạng thái phù hợp trước khi chuyển giao. Một số món cần được:</p>
        <ul>
          <li>Làm sạch phần còn sót lại.</li>
          <li>Làm khô trước khi thu gom.</li>
          <li>Đổ hết chất bên trong.</li>
          <li>Tháo bỏ những phần không được tiếp nhận, nếu có.</li>
        </ul>
        <p>Điều này đặc biệt quan trọng với bao bì thực phẩm và đồ đựng chất lỏng. Một món đồ có thể thuộc nhóm tái chế nhưng nếu chưa được chuẩn bị đúng cách thì vẫn có thể không phù hợp để tiếp nhận.</p>
      </section>

      <figure className="article-image-slot">
        <div className="image-slot-mark" aria-hidden="true">＋</div>
        <figcaption>Vị trí ảnh minh họa: làm sạch và chuẩn bị rác tái chế</figcaption>
      </figure>
    </div>
  )
}
