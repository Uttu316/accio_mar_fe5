import styles from "./productsFilter.module.css";

const ProductsFilter = ({ filter, setfilter }) => {
  return (
    <div className={styles.filterBar}>
      <FilterItem
        label={"All"}
        value={"all"}
        setFilter={setfilter}
        filter={filter}
      />
      <FilterItem
        value={"men's clothing"}
        label={"Men's clothing"}
        setFilter={setfilter}
        filter={filter}
      />
      <FilterItem
        value={"women's clothing"}
        label={"Women's clothing"}
        setFilter={setfilter}
        filter={filter}
      />
      <FilterItem
        value={"electronics"}
        label={"Electronics"}
        setFilter={setfilter}
        filter={filter}
      />
      <FilterItem
        value={"jewelery"}
        label={"Jewelery"}
        setFilter={setfilter}
        filter={filter}
      />
    </div>
  );
};

const FilterItem = ({ label, value, filter, setFilter }) => {
  const isSelected = value === filter;
  return (
    <button
      className={isSelected ? styles.filterButtonActive : styles.filterButton}
      onClick={() => setFilter(value)}
    >
      {label}
    </button>
  );
};

export default ProductsFilter;
