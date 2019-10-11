import React from "react";
import {Parallax} from "react-scroll-parallax/cjs";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default class ProjectPage extends React.Component {

    render() {
        return (
            <React.Fragment>

                <div className="project-page-container" style={{minHeight: "100vh"}}>
                    <Parallax y={[-20, 20]}>
                        <div className="img-transition d-inline-block overflow-hidden"
                             style={{
                                 backgroundImage: "url(\"" + this.props.imageURL + "\")",
                                 height: "70vh",
                                 width: "100%",
                                 backgroundSize: "cover",
                                 backgroundRepeat: "no-repeat",
                                 backgroundPosition: "center",
                                 position: "absolute",
                             }}
                        />
                    </Parallax>
                    <div className="card-body text-center card-body-cascade"
                         style={{
                            display: "inline-block",
                            position: "relative",
                            top: "62vh",
                            left: "5%",
                            width: "90%",
                            minHeight: "38vh",
                            backgroundColor: "white",
                            boxShadow: "0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)",
                        }}
                    >
                        <h1 className="font-weight-bold project-title">
                            <div className="d-inline-block">{ this.props.title }</div>
                        </h1>

                        <div className="text-left mt-3">
                            { this.props.children }
                        </div>
                    </div>
                </div>
                {/*<div style={{height: "2rem"}} />*/}

            </React.Fragment>
        )
    }
}