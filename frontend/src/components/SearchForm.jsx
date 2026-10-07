export default function SearchForm({ query, setQuery, onSearch, error, inputId = 'waste-search' }) {
  return (
    <form className="search-form" onSubmit={onSearch}>
      <label htmlFor={inputId}>Bạn muốn phân loại món đồ nào?</label>
      <div className="search-control">
        <input
          id={inputId}
          name="waste-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ví dụ: chai nhựa, thùng carton"
          aria-describedby={error ? 'search-error' : 'search-hint'}
          aria-invalid={Boolean(error)}
        />
        <button className="button button-primary" type="submit">
          Kiểm tra <span aria-hidden="true">↗</span>
        </button>
      </div>
      {error ? (
        <p className="form-message form-error" id="search-error">{error}</p>
      ) : (
        <p className="form-message" id="search-hint">Nhập tên chất liệu hoặc loại đồ, rồi bấm Kiểm tra.</p>
      )}
    </form>
  )
}
