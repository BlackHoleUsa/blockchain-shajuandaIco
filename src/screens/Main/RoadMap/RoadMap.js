import React from 'react';
import './RoadMap.css';
import { Row, Col } from 'react-bootstrap'; 
import { Images } from 'Assets/Images';
import { teamMembers } from 'Assets/Data';
import RoadMapContain from 'components/RoadMapContain/RoadMapContain';

const RoadMapSection = (props) => {

    const arr = [1, 2];

    return(

        <div className="app-flex-column w-100 py-5 text-white justify-content-center align-items-center" style={{marginTop: '100px'}}>
            
            <h6 className="font-36px mb-2 paragraph-font" style={{fontWeight: 'bold', letterSpacing: '1px'}}>Roadmap To Success</h6>
            <p className="font-20px d-block text-center heading-font" style={{marginTop: '1%'}}>
            ICO seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
            </p>

            <div className="roadmap-img"></div>
            
            <h6 className="font-36px mb-2 mt-5 pt-3 paragraph-font" id="team-section" style={{fontWeight: 'bold'}}>Our Awesome Team</h6>
            <p className="font-20px d-block text-center heading-font" style={{marginTop: '1%'}}>
                ICO seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
            </p>

            <img alt="" width="244px" height="244px" src={Images.shajuanda} className="mt-5 mb-3" />
            <h6 className="font-28px mb-2 heading-font">Shajuanda</h6>
            <span className="font-20px mb-2 heading-font">
                Business owner
            </span>
            <span className="font-20px mb-3 d-block text-center heading-font">
                White-Founder-IT Consulting Expert-Entrepreneur Grambling State University
            </span>
            <span className="font-16px text-center d-block heading-font" style={{marginLeft: '10%', marginRight: '10%', marginBottom: '100px'}}>
                Over 17 years of leadership and administrative experience in the IT industry.Managed large portfolio/programs/projects including testing (QA) and development and High Enterprise applications.Over nine years of implementing best practices and gathering requirements for Quality Assurance methodology for various software development projects, services, and products.Managed projects, teams, applications with multi-million-dollar budgets, P&L, SOW, RFP ($7-20 million).
            </span>

            <h6 className="font-36px mb-2 my-5 pt-5 paragraph-font" style={{fontWeight: 'bold', letterSpacing: '1px'}}>Team Members</h6>
            
            <Row>
                {
                    teamMembers.map((memb, i) => (
                        <Col xs={12} sm={6} md={6} lg={3} xl={3} key={i}>
                            <div className="w-100 app-flex-column align-items-center justify-content-center mb-4">
                                <img alt="" src={memb.image} />
                                <h6 className="font-18px mb-2 mt-4 heading-font" style={{fontWeight: 'bold', letterSpacing: '1px'}}>{memb.name}</h6>
                                <span className="font-16px mb-1 heading-font">{memb.role}</span>
                            </div>
                        </Col>
                    ))
                }
            </Row>

           {/* <button className="gradient-apply connect-wallet border-0 my-5 paragraph-font" style={{width:'200px', height: '60px', fontSize: '25px', color: 'white'}}>
                See All
            </button>
            */}

        </div>

    );

}

export default RoadMapSection;