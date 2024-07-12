import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/customHooks/layout";


const chatbox = () => {

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

            <Layout>
                <div className="body">

                    <div className="card">

                        <div className="icon">
                            <i class="bi bi-person-circle" onClick={() => {
                                router.push(`/aid`)
                            }}></i>
                        </div>

                        <div className="cardin">
                            <img src="cards.jpg" class="d-block w-100 " alt="..." />
                        </div>

                        <div className="mini-card">

                            <i class="bi bi-person-circle"></i>
                            <div className="text">
                                <p>
                                    Artificial intelligence (AI) is not exactly like a robot,
                                </p>
                                {/* <div className="icn">
                                <i class="bi bi-whatsapp"></i>
                                <p>Whatsapp</p>
                            </div> */}

                                <div className="button">
                                    <button id="btn1">
                                        <span> <i class="bi bi-whatsapp"></i></span>
                                        <p>Whatsapp</p>
                                    </button>

                                    <button>
                                        <span> <i class="bi bi-whatsapp"></i></span>
                                        <p>Whatsapp</p>
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div className="mini-cards">
                            <i class="bi bi-person-circle"></i>

                            <div className="texts">
                                <p>
                                    Artificial intelligence (AI)
                                </p>
                                <button>
                                    <span> <i class="bi bi-telephone-forward-fill"></i></span>
                                    <p>call call</p>
                                </button>
                            </div>
                        </div>

                        <div className="card-footer">

                            <div className="tag">
                                <div className="ip">
                                    <i class="bi bi-upload"></i>
                                    <p> Upload</p>
                                </div>
                            </div>

                            <div className="search-bar">
                                <input type="text" placeholder="search here" />
                            </div>

                            <div className="microphone">
                                <i class="bi bi-mic"></i>
                            </div>



                        </div>
                    </div>


                </div>

            </Layout>

        </>
    )
}

export default chatbox;