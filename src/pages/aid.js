import Image from "next/image";
import { useRouter } from "next/router";

const design = () => {

    const router = useRouter()
    return (
        <>
            <div style={{
                zIndex: -1,
                position: "fixed",
                width: "100vw",
                height: "100vw"
            }}>
                <Image
                    src="/pixels.jpg"
                    alt="ai design"
                    layout="fill"
                    objectFit="cover"
                />

            </div>
            <div className="body-section">

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


                <div className="container">
                    <div className="title">
                        <h1>
                            Ai Help You Find,<br></br>
                            <span>Anything to Everything </span>
                        </h1>
                    </div>

                    <div className="search-bar">
                        <form>
                            <div className="input-field">
                                <input type="text" placeholder="" />

                                <div className="icons">
                                    <i class="bi bi-mic"></i>
                                    <i class="bi bi-camera"></i>
                                    <span> <i class="bi bi-person-circle" onClick={() => {
                                        router.push(`/chatbox`)
                                    }}></i></span>

                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="footer">
                        <ul>
                            <li> <a href="#" id="f">button1</a> </li>
                            <li> <a href="#" id="g">button1</a> </li>
                            <li> <a href="#" id="h">button1</a>  </li>
                            <li><a href="#" id="i">button1</a> </li>
                            <li> <a id="j"> login</a></li>
                        </ul>
                    </div>

                </div>

            </div >

        </>
    )
}

export default design;