


const Navbar = () => {
    return (
        <>


            <div className="navbar">
                <h3 id="name"><span1> my INDER </span1> </h3>


                <h4 id="ai">AI  </h4>


                <ul>
                    <li> <a href="#" id="a">button1</a> </li>
                    <li> <a href="#" id="b">button1</a> </li>
                    <li> <a href="#" id="c">button1</a>  </li>
                    <li><a href="#" id="d">button1</a> </li>
                    <li> <a id="e"> login</a></li>
                </ul>

                <div className="drop">

                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>



                </div>

            </div>


        </>
    )
}
export default Navbar;