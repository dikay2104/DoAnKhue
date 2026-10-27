import HopNhuaB1 from '../assets/images/HopNhua_Detail/HopNhua_B1.png'
import HopNhuaB2 from '../assets/images/HopNhua_Detail/HopNhua_B2.png'
import HopNhuaB3 from '../assets/images/HopNhua_Detail/HopNhua_B3.png'
import HopNhuaB4 from '../assets/images/HopNhua_Detail/HopNhua_B4.png'
import HopNhuaBanner from '../assets/images/HopNhua_Detail/HopNhua_Banner.png'
import DetailImage from '../components/DetailImage'

const acceptedProducts = new Set([
  'Khay thực phẩm', 'Chai dầu gội', 'Hộp đựng nước sốt', 'Nắp nhựa', 'Hộp đựng thực phẩm bằng nhựa',
])

const plasticProducts = [
  'Chai đựng dầu bằng nhựa', 'Xô nhựa', 'Đồ đựng bằng nhôm', 'Khay thực phẩm',
  'Hộp đựng đậu phụ', 'Hộp/món đựng mì ăn liền', 'Chai dầu gội', 'Hộp đựng chất tẩy rửa',
  'Hộp đựng nước sốt', 'Túi đựng đồ ăn sẵn', 'Túi mua hàng', 'Nắp nhựa', 'Vỉ đựng trứng',
  'Túi đựng rau quả', 'Hộp đựng dầu bằng nhựa', 'Hộp đựng thực phẩm bằng nhựa', 'Các loại bao bì nhựa tương tự',
]

const plasticSteps = [
  {
    title: 'Loại bỏ tạp chất',
    image: HopNhuaB1,
    alt: 'Loại bỏ màng bọc và tem nhãn khỏi khay nhựa',
    content: 'Bóc sạch màng bọc thực phẩm bằng nilon trong suốt và tem nhãn giấy. Những phụ kiện này thường là rác nilon hoặc rác sinh hoạt, không thể nung chảy tái chế cùng khay nhựa cứng.',
  },
  {
    title: 'Làm sạch',
    image: HopNhuaB2,
    alt: 'Làm sạch khay nhựa trong bồn rửa',
    content: 'Dùng nước hoặc một chút nước rửa chén để làm sạch hoàn toàn dầu mỡ, máu thịt cá hoặc lòng đỏ trứng dính trên khay, sau đó vẩy thật ráo.',
  },
  {
    title: 'Xếp chồng',
    image: HopNhuaB3,
    alt: 'Xếp chồng vỉ nhựa để tiết kiệm không gian',
    content: 'Với vỉ nhựa mềm mỏng, bóp xẹp hoặc gấp gọn để giảm thể tích. Nếu có nhiều khay cứng cùng dáng và kích cỡ, lồng chúng vào nhau thành từng cọc nén chặt để tiết kiệm chỗ.',
  },
  {
    title: 'Lưu trữ riêng biệt',
    image: HopNhuaB4,
    alt: 'Lưu trữ riêng khay và vỉ nhựa đã làm sạch',
    content: 'Gom các khay, vỉ nhựa đã khô ráo vào túi nilon riêng, đặt ở nơi râm mát để nhựa không bị lão hóa, giòn vỡ trước khi bàn giao.',
  },
]

export default function PlasticPackagingDetailPage({ onNavigate }) {
  return (
    <article className="paper-detail page-view section-space">
      <div className="page-width paper-detail-inner">
        <a className="paper-back-link" href="/huong-dan" onClick={(event) => { event.preventDefault(); onNavigate('/huong-dan') }}>← Quay lại tra cứu</a>
        <header className="paper-detail-heading">
          <span className="news-category">Hướng dẫn tái chế</span>
          <h1>Cách chuẩn bị, sơ chế rác thải nhựa trước khi đem đến điểm tiếp nhận</h1>
          <p>Làm sạch và xếp gọn các loại bao bì nhựa trước khi chuyển đến điểm tiếp nhận.</p>
        </header>

        <DetailImage className="paper-detail-cover" src={HopNhuaBanner} alt="Hướng dẫn sơ chế rác nhựa" loading="eager" />

        <section className="paper-type-panel" aria-labelledby="plastic-types-title">
          <h2 id="plastic-types-title">Nhóm các sản phẩm nhựa</h2>
          <ul>{plasticProducts.map((product) => (
            <li key={product}>
              {product}
              {acceptedProducts.has(product) && <span className="accepted-product-tag">Green Da Nang tiếp nhận</span>}
            </li>
          ))}</ul>
        </section>

        <div className="paper-steps-heading">
          <span className="news-category">4 bước đơn giản</span>
          <h2>Hướng dẫn chuẩn bị rác thải nhựa</h2>
        </div>
        <div className="paper-steps">
          {plasticSteps.map((step, index) => (
            <section className="paper-step" key={step.title}>
              <div className="paper-step-copy">
                <span className="paper-step-number">Bước {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.content}</p>
              </div>
              <DetailImage src={step.image} alt={step.alt} />
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}

