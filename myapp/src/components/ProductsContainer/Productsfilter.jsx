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
        value={"smartphones"}
        label={"Smart Phones"}
        setFilter={setfilter}
        filter={filter}
      />
      <FilterItem
        value={"laptops"}
        label={"Laptops"}
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
