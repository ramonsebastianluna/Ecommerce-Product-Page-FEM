
const MenuButton = ({action, description}) => {
    return (
            <button
                className="nav-link btn btn-primary mx-2"
                onClick={action}
                type="button"
                data-bs-toggle="offcanvas"                  
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation">
                {description}
            </button>
        )
}

export default MenuButton