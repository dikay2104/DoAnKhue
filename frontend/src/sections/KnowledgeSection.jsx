import SectionHeading from '../components/SectionHeading'

export default function KnowledgePage() {
  return (
    <section id="kien-thuc" className="knowledge-section section-space page-view" aria-labelledby="knowledge-title">
      <div className="page-width">
        <SectionHeading id="knowledge-title" title="Góc nhỏ về phân loại rác">
          Những điều cơ bản giúp bạn phân loại đúng và hạn chế làm bẩn vật liệu có thể thu hồi.
        </SectionHeading>

        <div className="knowledge-layout">
          <article className="knowledge-feature">
            <h2>Cách nhận biết rác tái chế</h2>
            <p>Bắt đầu bằng chất liệu, sau đó kiểm tra món đồ có sạch, khô và thuộc nhóm được thu gom hay không.</p>
            <details>
              <summary>Đọc hướng dẫn</summary>
              <div className="details-content">
                <p>Không phải mọi món đồ bằng giấy, nhựa hay kim loại đều được tiếp nhận giống nhau. Bao bì còn thức ăn hoặc chất lỏng có thể làm bẩn vật liệu khác.</p>
                <ul>
                  <li>Nhìn ký hiệu và chất liệu của từng phần.</li>
                  <li>Làm sạch, để khô và tháo những phần không được nhận nếu hướng dẫn yêu cầu.</li>
                  <li>Kiểm tra danh mục của điểm tiếp nhận trước khi mang đi.</li>
                </ul>
              </div>
            </details>
          </article>

          <div className="knowledge-side">
            <article className="knowledge-symbols">
              <div className="symbol-mark" aria-hidden="true">♻</div>
              <div>
                <h2>Ký hiệu tái chế nói gì?</h2>
                <p>Vòng Mobius và mã nhựa giúp nhận biết thông tin vật liệu. Ký hiệu không bảo đảm mọi điểm thu gom đều tiếp nhận.</p>
                <details>
                  <summary>Xem lưu ý</summary>
                  <p className="details-content">Mã nhận diện nhựa mô tả loại nhựa, không phải lời hứa rằng món đồ sẽ được tái chế tại nơi bạn sống. Luôn kiểm tra hướng dẫn địa phương.</p>
                </details>
              </div>
            </article>
            <article className="knowledge-clean">
              <h2>Giữ vật liệu sạch</h2>
              <p>Đổ hết chất lỏng, gạt bỏ thức ăn thừa và để bao bì khô trước khi phân loại.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
