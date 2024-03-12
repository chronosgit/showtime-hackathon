import styles from "./search.module.css";

const Search = () => {

    return (
        <button>
            <img 
                src="/src/assets/icons/search.svg" 
                alt="magnifier icon"
                className={styles.icon} 
            />
        </button>
    );
};

export default Search;