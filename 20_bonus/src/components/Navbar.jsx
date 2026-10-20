const Navbar = (prop) => {

    function changeTheme () {
        console.log('theme Changed');
        prop.setTheme('Dark')
        
    }
    // Passing value from child to parent
    
    return (
        <div className="ml-4">
            <button className="text-white bg-black py-2 px-6 rounded-full font-semibold transition-all duration-200 active:scale-95" onClick={changeTheme}>
                Change Theme 
            </button>
        </div>
    )
}

export default Navbar