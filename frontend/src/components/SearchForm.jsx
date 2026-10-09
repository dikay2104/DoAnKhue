import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function SearchForm({
  query,
  setQuery,
  onSearch,
  error,
  inputId = 'waste-search',
  className = '',
  label = 'Bạn muốn phân loại món đồ nào?',
  placeholder = 'Ví dụ: chai nhựa, thùng carton',
  helperText = 'Nhập tên chất liệu hoặc loại đồ, rồi bấm Kiểm tra.',
  visuallyHiddenLabel = false,
}) {
  return (
    <form className={`search-form ${className}`.trim()} onSubmit={onSearch}>
      <label className={visuallyHiddenLabel ? 'visually-hidden' : undefined} htmlFor={inputId}>{label}</label>
      <div className="search-control">
        <input
          id={inputId}
          name="waste-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          aria-describedby={error ? 'search-error' : 'search-hint'}
          aria-invalid={Boolean(error)}
        />
        <button className="button button-primary" type="submit">
          Kiểm tra <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
        </button>
      </div>
      {error ? (
        <p className="form-message form-error" id="search-error">{error}</p>
      ) : (
        <p className="form-message" id="search-hint">{helperText}</p>
      )}
    </form>
  )
}
