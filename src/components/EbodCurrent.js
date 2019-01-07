import React, { Component } from 'react';
import Footer from './PresidentialFooter.js';
import { CSSTransitionGroup } from 'react-transition-group';
import {
    Row,
    Col
  } from "reactstrap";
  import LuisPic from './ebodPics/LuisAceves.jpg';
  import GenezaratPic from './ebodPics/GenGenQuintana.png';
  import SarahPic from './ebodPics/SarahLee.jpg';
  import TonyPic from './ebodPics/TonyLozano.jpg';
  import MailePic from './ebodPics/MaileChung.jpg';
  import WendyPic from './ebodPics/WendyWang.jpg';
  import CjayPic from './ebodPics/CJayHon.jpg';


class EbodCurrent extends Component {

    GetPhoto = (index, memberPic) => {
        return(memberPic[index]);
    }

    GetInfo = (index) => {
        let names = [
            "Luis Aceves",
            "Gengen Quintana",
            "Sarah Lee",
            "Tony Lozano",
            "Maile Chung",
            "Wendy Wang",
            "CJay Hon"
        ]
        let positions = [
            "President",
            "Vice President",
            "Director of Judicial and Secretarial Affairs",
            "Director of Finance and Budgeting",
            "Director of Events and Programming",
            "Director of Public Relations",
            "Director of Social Media and Communications"
        ]
        let organizations = [
            "ΩΔΦ",
            "ΩΔΦ",
            "ΣΨΖ",
            "ΛΦΕ",
            "ΧΣΑ",
            "αΚΔΦ",
            "ΛΦΕ"
        ]
        let emails = [
            "ugcpres@uw.edu",
            "ugcvp@uw.edu",
            "ugcjsa@uw.edu",
            "ugcfin@uw.edu",
            "ugcprgm@uw.edu",
            "ugcpr@uw.edu",
            "ugccomm@uw.edu"
        ]
        let descriptions = [
            'Luis is a Junior from Othello, WA and is studying Public Health. He enjoys weightlifting in his free time and socializing with friends. When asked what he loves about UGC, he had this to say: “I love the fact that we are concentrated on one goal and that goal is Unity! As minorities on campus we need to stick together and motivate each other to be successful.”',
            'GenGen who is a Senior and a Communications major from Raymond, WA. He is involved with UGC, Omega Delta Phi, and is the Marketing and Communications Assistant at The Whole U - a community that promotes holistic wellness by encouraging healthier lifestyles. He enjoys Fortnite and Twitch streams, and looks forward to the opportunity to build bridges with students he hasn’t necessarily interacted with before at UGC.',
            'Sarah is a Sophomore from Seattle, WA and intends to major in Social Welfare. She is a sister of Sigma Psi Zeta and enjoys alternating between getting McDonald’s and grabbing boba. Regarding UGC, she loves how unique every organization and person is, and she loves meeting new people within the entity, saying that “There’s never a dull moment!!”',
            'Tony is a Senior from Wenatchee, WA majoring in Business and International studies with a minor in Chinese. He is a brother of Lambda Phi Epsilon but also dedicates his time to his business fraternity, Alpha Kappa Psi. He enjoys photography, traveling, and basketball, and loves the big family of UGC and the passion that people have for their organizations.',
            'Maile, a Sophomore from San Jose, CA and is majoring in Asian Studies with a Japan Concentration. Aside from Chi Sigma Alpha, she is a part of the Korean Students’ Association (KSA), UW Hanwoollim and the Husky Break Club. She loves how kind and welcoming the UGC community is: “I have met some of the coolest and most down-to-earth people through UGC and I\'m so glad to be a part of it!”',
            'Wendy is a Junior from Bellevue, WA majoring in Gender, Women and Sexuality Studies & American Ethnic Studies who enjoys hiking and going to concerts. She is a sister of alpha Kappa Delta Phi and is also involved with the UW First Year Programs. She enjoys the UGC community because: “No matter where you or what you are doing you always have a friend!”',
            'CJay is a Junior majoring in Public Health and is from Singapore. He has experience with the Pipeline Project, FIUTS, and UW Leaders. He enjoys finding new spots around the city to enjoy and bingeing on his Mom’s Netflix account. When asked about UGC, he said that he loves that he is able to meet people from different chapters: “It\'s an awesome way to expand your networking circles and know that you\'re being welcomed just because you\'re UGC.”'
        ]
        return(
            <div>
                <Row>
                    <div className = "ebod-member-positions">{positions[index]}</div>
                    
                </Row>
                <Row>
                    <div className = "ebod-member-names">{names[index]}: {emails[index]}</div>
                    
                </Row>
                <Row>
                    <div className = "ebod-member-orgs">Organization: {organizations[index]}</div>
                    
                </Row>
                <Row>
                    <div className = "ebod-member-description">{descriptions[index]}</div>
                    
                </Row>
            </div>

        );
    }

    EbodBody = () => {
        let member = []
        let memberPic = [
            <img alt = "" className = "eboc-member-pic" src = {LuisPic}/>,
            <img alt = "" className = "eboc-member-pic" src = {GenezaratPic}/>,
            <img alt = "" className = "eboc-member-pic" src = {SarahPic}/>,
            <img alt = "" className = "eboc-member-pic" src = {TonyPic}/>,
            <img alt = "" className = "eboc-member-pic" src = {MailePic}/>,
            <img alt = "" className = "eboc-member-pic" src = {WendyPic}/>,
            <img alt = "" className = "eboc-member-pic" src = {CjayPic}/>
        ]
        for(var i = 0; i < memberPic.length; i++) {
        //    if(i % 2 === 0) {
                member.push(
                    <div className = "member-container">
                        <Row>
                            <Col>
                                {this.GetPhoto(i, memberPic)}
                            </Col>
                            <Col>
                                {this.GetInfo(i)}
                            </Col>
                        </Row>
                    </div>

                );
        /*    } else {
                member.push(
                    <Row>
                        <Col>
                            {this.GetInfo(i)}
                        </Col>
                        <Col>
                            {this.GetPhoto(i, memberPic)}
                        </Col>
                    </Row>);
            } */
            
        }
        return member;
    }





    render() {
        return(
            <CSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
                <div className = 'ebod-container'>
                    <div className = 'ebod-title'>2018-2019</div>
                    <Col>
                        {this.EbodBody()}
                    </Col>
                </div>
                <Footer />
            </CSSTransitionGroup>
        );
    }
}

export default EbodCurrent;