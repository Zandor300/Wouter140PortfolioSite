import React from 'react';

import {MDBBtn, MDBCol, MDBIcon} from "mdbreact";

import ContentContainer from "../../components/ContentContainer";
import ProjectCard from "./components/ProjectCard";

import "./ProjectsContent.scss";
import "./ProjectSpecific.scss";

import paintImage from "../../content/paint/images/main_face.png";
import bitBusterImage from "../../content/bit-buster/images/main-face.png";
import pinballBashImage from "../../content/pinball-bash/images/main-face.png";
import cookDontLookImage from "../../content/cook-dont-look/images/main-face.jpg";
import p2goPlayerImage from "../../content/p2go-player/images/main-face.png";

export default class ProfessionalProjectsContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expandProjects: false
        }
    }

    render() {
        let containerClasses = "projects responsive-text-size";
        if(this.state.expandProjects)
            containerClasses += " expanded";

        return (
            <ContentContainer id="professional-projects-page" className={ containerClasses }
                    contentTitle={ (
                        <React.Fragment>
                            <span>Professional <strong>Projects</strong></span>
                        </React.Fragment>
                    ) }
            >

                <div className="d-flex flex-wrap justify-content-start container">

                    <MDBCol lg="6" className="animated fadeIn">
                        <ProjectCard src={ paintImage } alt="" title="P.A.I.N.T."
                                     location="/Paint"
                                     badges={[
                                         {name: 'Engine', content: 'Unreal Engine 4', title: "Engine"},
                                         {name: 'Languages', content: 'C++ & Python', title: "Used Languages"},
                                         {name: 'Platforms', content: 'PC & PS4', title: "Target Platforms"},
                                         {name: 'Team Size', content: '25 Person Team', title: "Project Team Size"},
                                         {name: 'Duration', content: '40 Weeks', title: "Project Duration"}
                                     ]}
                        >
                            This project is currently in development.<br/>
                            More will come soon!
                        </ProjectCard>
                    </MDBCol>

                    <MDBCol lg="6" className="animated fadeIn">
                        <ProjectCard src={ bitBusterImage } alt="Bit-Buster Project" title="Bit-Buster" className="bit-buster"
                                     location="/Bit-Buster"
                                     badges={[
                                         {name: 'Engine', content: 'Custom Engine'},
                                         {name: 'Languages', content: 'C++'},
                                         {name: 'Platforms', content: 'PC'},
                                         {name: 'Team Size', content: '25 Person Team'},
                                         {name: 'Duration', content: '8 Weeks'}
                                     ]}
                        >
                            Bit-buster is a local multiplayer co-op game, in which you have to pass a disk around to kill all the evil spirits.
                            The entire game is made out of voxels to allow for mayhem and destruction of the enemies and the level!
                            The voxels also have physics support to allow for partial voxel objects to fall and break for example.<br/>
                        </ProjectCard>
                    </MDBCol>

                    <MDBCol md="6" xl="4" className="animated fadeIn">
                        <ProjectCard src={ pinballBashImage } alt="Pinball Bash Project" title="Pinball Bash"
                                     location="/PinballBash"
                                     badges={[
                                         {name: 'Engine', content: 'Unreal Engine 4'},
                                         {name: 'Languages', content: 'Blueprints'},
                                         {name: 'Platforms', content: 'PC'},
                                         {name: 'Team Size', content: '9 Person Team'},
                                         {name: 'Duration', content: '8 Weeks'}
                                     ]}
                        >
                            Pinball Bash is a 4 player co-op game where you try to defeat the others by having deadly pin-balls hit them.
                            You can deflect these by making walls come up from the floor to win the game.
                        </ProjectCard>
                    </MDBCol>

                    <MDBCol md="6" xl="4" className="animated fadeIn">
                        <ProjectCard src={ p2goPlayerImage } alt="Web Video Player" title="Web Video Player"
                                     location="/P2GOPlayer"
                                     badges={[
                                         {name: 'Languages', content: 'Javascript ES6, React, CSS3, HTML5'},
                                         {name: 'Platforms', content: 'Web'}
                                     ]}
                        >
                            For the company Learning Valley and Presentations 2Go, I have worked on their Web video
                            platform. The video player supports rich media, commenting, multiple video types like dash
                            and hls, playlists, and 360 videos with support for VR.
                        </ProjectCard>
                    </MDBCol>

                    <MDBCol md="6" xl="4" className="extra-project-md">
                        <ProjectCard src={ cookDontLookImage } alt="Cook Don't Look Project" title="Cook Don't Look"
                                     location="/CookDontLook"
                                     badges={[
                                         {name: 'Engine', content: 'Unity3D'},
                                         {name: 'Languages', content: 'C#'},
                                         {name: 'Platforms', content: 'Gear VR'},
                                         {name: 'Team Size', content: '9 Person Team'},
                                         {name: 'Duration', content: '2 Weeks'}
                                     ]}
                        >
                            Cook Don't Look is Gear VR game where the player has to prepare food and make it perfect quality. To cook the food you look away from it, but have to make sure it does not overcook!
                        </ProjectCard>
                    </MDBCol>

                    <MDBCol md="6" xl="8" className="extra-project">
                    </MDBCol>

                    {/*<MDBCol md="6" xl="4" className="extra-project d-none">*/}
                    {/*    <ProjectCard src={ testImage } alt="" title="Testing Title"*/}
                    {/*                 location="/TestProject"*/}
                    {/*                 badges={[{name: 'Languages', content: 'Primary'}, {name: 'Engine', content: 'Secondary'}, {name: 'Platforms', content: 'Danger'}]}*/}
                    {/*    >*/}
                    {/*        Some super duper amazing card text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.*/}
                    {/*        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,*/}
                    {/*        pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.*/}
                    {/*        In enim justo, rhoncus ut*/}
                    {/*    </ProjectCard>*/}
                    {/*</MDBCol>*/}

                    <MDBCol className="d-xl-none d-flex flex-center">
                        <MDBBtn color="indigo" className="m-0 expand-projects-btn"
                                onClick={ () => this.setState((state) => { return {expandProjects: !state.expandProjects} }) }
                        >
                            { this.state.expandProjects ? (
                                <span>Hide extra</span>
                            ) : (
                                <span>Show More</span>
                            )}
                            <MDBIcon icon="angle-down ml-2" />
                        </MDBBtn>
                    </MDBCol>

                </div>

            </ContentContainer>
        );
    }
}