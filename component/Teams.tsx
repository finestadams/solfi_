import React from 'react'
import Image from 'next/image'

const Teams = () => {
    return (
        <section className="teams">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h4>Our Teams</h4>
                    </div>
                </div>
                <div style={{backgroundImage: "url(/images/teambg.png)",
                 backgroundRepeat: "no-repeat",  backgroundColor: "rgba(0, 0, 0, 1)",
                 backgroundSize: "100% 100%", width: "100%"}}>
                        <div className="team-container">
                            <div className="gap-3 team-images">
                            <div className="position-relative"  style={{backgroundImage: "url(/images/card_img.png)",backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%"}}>
                                <Image src="/images/profile1.png" alt="profile" width={400} height={500} />
                                <div className="team-social d-flex justify-content-center position-absolute gap-4">
                                    <div className="pl">
                                        <div>
                                            <a href="#"><Image src="/images/twitter-g.png" alt="profile" width={14} height={14} /></a>
                                        </div>
                                        <div>
                                            <a href="#">
                                                <Image src="/images/linkedin-g.png" alt="profile" width={14} height={14} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-center team-text">
                                        <p id="team-green">Diego Lopez</p>
                                        <p>CEO & Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative" style={{backgroundImage: "url(/images/card_img.png)",backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%"}}>
                                <Image src="/images/profile2.png" alt="profile" width={400} height={500} />
                                <div className="team-social d-flex justify-content-center position-absolute gap-4">
                                    <div className="pl">
                                        <div>
                                            <a href="#"><Image src="/images/twitter-g.png" alt="profile" width={14} height={14} /></a>
                                        </div>
                                        <div>
                                            <a href="#">
                                                <Image src="/images/linkedin-g.png" alt="profile" width={14} height={14} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-center team-text">
                                        <p id="team-green">Adams Smith</p>
                                        <p>CTO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative" style={{backgroundImage: "url(/images/card_img.png)",backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%"}}>
                                <Image src="/images/profile3.png" alt="profile" width={400} height={500} />
                                <div className="team-social d-flex justify-content-center position-absolute gap-4">
                                    <div className="pl">
                                        <div>
                                            <a href="#"><Image src="/images/twitter-g.png" alt="profile" width={14} height={14} /></a>
                                        </div>
                                        <div>
                                            <a href="#">
                                                <Image src="/images/linkedin-g.png" alt="profile" width={14} height={14} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-center team-text">
                                        <p id="team-green">Allen Lallana</p>
                                        <p>CFO</p>
                                    </div>
                                </div>
                            </div>
                         </div>
                         <div className="d-flex align-items-center justify-content-center teams-control">
                                <button></button>
                                <button className="button-color"></button>
                                <button></button>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Teams
