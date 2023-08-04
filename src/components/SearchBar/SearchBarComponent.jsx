const SearchBarComponent = ({ handleSearch }) => {
    return (
        <form className="border-2 border-[#E6E9EE] rounded-lg p-2 m-5">
            <input type="search" placeholder="Search..." onChange={handleSearch} className="outline-none border-none" />
            <span>oi</span>
        </form>
    )
}

export default SearchBarComponent
