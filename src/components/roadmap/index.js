import React, { Fragment } from 'react'

import {
    Card
} from 'reactstrap'

const Roadmap = () => {
    return (
        <Fragment>
                <Card style={{width: "90%", margin: "auto", backgroundColor: "#000", paddingBlock: "25px", border: "2px solid #000", borderTop: "hidden", borderBottomLeftRadius: "150px", borderBottomRightRadius: "150px" }}>
                    <div style={{ width: "90%", margin: "auto" }}>
                        <h2 style={{ color: "rgb(230,163,12)", paddingTop: "50px", letterSpacing: "10px", fontSize: "50px", fontWeight: "700" }}>Roadmap</h2>
                        <p style={{ color: "#000", paddingBottom: "50px" }}>This roadmap outlines our goals and where we want to take MekaVerse. We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!</p>
                    </div>
                </Card>
            <div style={{overflow: "hidden",position: "relative", backgroundColor: "#000", width: "70%", margin: "auto", borderRadius: "40px", marginTop: "70px" }}>
                <Card style={{ zIndex: 9999, display: "flex", backgroundColor: "rgb(21,24,36, 0.4)", marginTop: "30px" }}>
                    <div style={{ position: "absolute", left: "100px",zIndex: 999,height: "340vh", width: "0.5%", backgroundColor: "rgb(230,163,12)" }}></div>
                </Card>
                <div style={{ height: "250vh", width: "100%", paddingTop: "20vh", backgroundColor: "#000" }}>
                    <div style={{ width: "100%", backgroundColor: "#000", height: "50vh" }}>
                        <div style={{ width: "100%", backgroundColor: "rgb(21,24,36,0.6)", height: "50vh" }}>

                        </div>
                    </div>
                    <div style={{ marginTop: "10vh", width: "100%", backgroundColor: "#000", height: "50vh" }}>
                        <div style={{ width: "100%", backgroundColor: "rgb(21,24,36,0.6)", height: "50vh" }}>

                        </div>
                    </div>
                    <div style={{ marginTop: "10vh", width: "100%", backgroundColor: "#000", height: "50vh" }}>
                        <div style={{ width: "100%", backgroundColor: "rgb(21,24,36,0.6)", height: "50vh" }}>

                        </div>
                    </div>
                    <div style={{ marginTop: "10vh", width: "100%", backgroundColor: "#000", height: "50vh" }}>
                        <div style={{ width: "100%", backgroundColor: "rgb(21,24,36,0.6)", height: "50vh" }}>

                        </div>
                    </div>
                    
                </div>
                
            </div>
        </Fragment>
    )
}

export default Roadmap

// "rgb(21,24,36)"
// "rgb(230,163,12)"