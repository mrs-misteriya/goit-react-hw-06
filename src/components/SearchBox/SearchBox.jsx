import css from './SearchBox.module.css'

export default function SearchBox({ value, onSearch}) {
    return (
      <div className={css.searchbox}>
        <p className={css.searchfield}>Find contact by name</p>
        <input
          type="text"
          value={value}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
}