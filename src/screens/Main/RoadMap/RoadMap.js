import React from 'react';
import './RoadMap.css';
import { Row, Col } from 'react-bootstrap'; 
import { Images } from 'Assets/Images';
import { teamMembers } from 'Assets/Data';
import RoadMapContain from 'components/RoadMapContain/RoadMapContain';

const RoadMapSection = (props) => {

    const arr = [1, 2];

    return(

        <div className="app-flex-column w-100 py-5 text-white justify-content-center align-items-center">
            
            <h6 className="font-36px mb-2">Roadmap To Success</h6>
            <p className="font-16px d-block text-center">
            ICO seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
            </p>

            <RoadMapContain />

            <h6 className="font-36px mb-2 mt-5 pt-3" id="team-section">Our Awesome Team</h6>
            <p className="font-16px d-block text-center">
                ICO seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
            </p>

            <img alt="" width="244px" height="244px" src={Images.shajuanda} className="mt-5 mb-3" />
            <h6 className="font-20px mb-2">Shajuanda</h6>
            <span className="font-16px mb-2">
                Business owner
            </span>
            <span className="font-16px mb-3 d-block text-center">
                White-Founder-IT Consulting Expert-Entrepreneur Grambling State University
            </span>
            <span className="font-16px text-center d-block">
                Over 17 years of leadership and administrative experience in the IT industry.Managed large portfolio/programs/projects including testing (QA) and development and High Enterprise applications.Over nine years of implementing best practices and gathering requirements for Quality Assurance methodology for various software development projects, services, and products.Managed projects, teams, applications with multi-million-dollar budgets, P&L, SOW, RFP ($7-20 million).
            </span>

            <h6 className="font-36px mb-2 my-5 pt-5">Team Members</h6>
            
            <Row>
                {
                    teamMembers.map((memb, i) => (
                        <Col xs={12} sm={6} md={6} lg={3} xl={3} key={i}>
                            <div className="w-100 app-flex-column align-items-center justify-content-center mb-4">
                                <img alt="" src={memb.image} />
                                <h6 className="font-20px mb-2 mt-4">{memb.name}</h6>
                                <span className="font-16px mb-1">{memb.role}</span>
                            </div>
                        </Col>
                    ))
                }
            </Row>

            <button className="gradient-apply connect-wallet border-0 my-5">
                See All
            </button>

        </div>

    );

}

export default RoadMapSection;