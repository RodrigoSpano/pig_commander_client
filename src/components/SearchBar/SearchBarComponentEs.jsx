const SearchBarComponentEs = ({ handleSearch }) => {
    return (
        <form className="border-2 border-[#E6E9EE] rounded-lg p-2">
            <input type="search" placeholder="Buscar..." onChange={handleSearch} className="outline-none border-none dark:placeholder:text-white dark:bg-mediumGrayDarkMode" />
        </form>
    )
}

export default SearchBarComponentEs
