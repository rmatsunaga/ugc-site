import React, { Component } from 'react';
import {
  Row,
  Col
} from "reactstrap";
//import "bootstrap/dist/css/bootstrap.css";
import '../App.css';
import { CSSTransitionGroup } from 'react-transition-group';
import SigmaPsiZetaPic from './organizationPics/sor/sigmaPsiZeta.jpg';
import AKDPhiPic from './organizationPics/sor/AKDPhi.png';
import ChiSigmaAlphaPic from './organizationPics/sor/ChiSigmaAlpha.jpg';
import DeltaKappaDeltaPic from './organizationPics/sor/DeltaKappaDelta.png';
import GammaAlphaOmegaPic from './organizationPics/sor/GammaAlphaOmega.png';
import LambdaThetaAlphaPic from './organizationPics/sor/LambdaThetaAlpha.png';
import PiNuIotaPic from './organizationPics/sor/PiNuIota.jpg';
import SigmaLambdaGammaPic from './organizationPics/sor/SigmaLambdaGamma.jpg';
import DeltaLambdaPhiPic from './organizationPics/frat/DeltaLambdaPhi.jpg';
import LambdaPhiEpsilonPic from './organizationPics/frat/LambdaPhiEpsilon.jpg';
import OmegaDeltaPhiPic from './organizationPics/frat/OmegaDeltaPhi.png';
import PiAlphaPhiPic from './organizationPics/frat/PiAlphaPhi.png';
import SigmaLambdaBetaPic from './organizationPics/frat/SigmaLambdaBeta.jpg';
import Footer from './PresidentialFooter';



const OrganizationsRoute = () => {
    return(
      <CSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
        <Organizations />
        <OldOrganizations />
        <Footer />
      </CSSTransitionGroup>
    );
  };

const OldOrganizations = () => {
    return(
        <Row>
            <Col>
                <div className = "old-org-container">
                    <OldOrganizationTitle />
                    <OldOrganizationNames />
                </div>
            </Col>
        </Row>
    );
}

const OldOrganizationTitle = () => {
    return(
        <div className = "old-org-title">
            Former Organizations
        </div>
    );
}

const GetOldNames = () => {
    let oldNames = [
        "Delta Phi Omega (defunct)",
        "Kappa Kappa Psi (disassociated)",
        "Phi Sigma Rho (disassociated)",
        "Sigma Beta Rho (defunct)",
        "Zeta Kappa Epsilon (defunct)",
        "Delta Lambda Phi (disassociated)",
        "Pi Nu Iota (inactive)"
    ]
    let names = []
    for(var i = 0; i < oldNames.length; i++) {
        names.push(<li className = "old-org-names">{oldNames[i]}</li>);
    }
    return names;
}

const OldOrganizationNames = () => {
    return(
        <div>
            {GetOldNames()}
        </div>
    );
}

const Organizations = () => {
    return(
        <div className="org-text">
            <OrgTitle />
            <Row className="full-width">
                <Col>
                    <div className="frat-header">
                        Fraternities
                    </div>
                    <div className="fraternities"> 
                        {/* <DeltaLambdaPhi /> */}
                        <LambdaPhiEpsilon />
                        <OmegaDeltaPhi />
                        <PiAlphaPhi />
                        <SigmaLambdaBeta />
                    </div>
                </Col>
                <Col>
                    <div className="frat-header">
                        Sororities
                    </div>
                    <div className = "sororities">
                        <AlphaKappaDeltaPhi />
                        <ChiSigmaAlpha />
                        <DeltaKappaDelta />
                        <GammaAlphaOmega />
                        <LambdaThetaAlpha />
                        {/*<PiNuIota />*/}
                        <SigmaLambdaGamma />
                        <SigmaPsiZeta />
                    </div>
                </Col>
            </Row>
        </div>
    );
}


const SigmaPsiZeta = () => {
    return(
        <div className="individual-org">
        <div className="frat-name">
            ΣΨΖ​
        </div>
        <img src={SigmaPsiZetaPic}/>
        <div className="org-name">
            Sigma Psi Zeta - Rho Chapter
            <br />
            <a href="http://www.uwsyz.com/">Official Website</a>
        </div>
        <div className = "org-description">
            "We are a cultural, social, educational and community service oriented sorority. We embody the ideals of strong independent women, loyalty, allegiance, and dedication in the spirit of sisterhood. Rho Chapter of Sigma Psi Zeta was formally recognized on November 22, 2003, and has been going strong since."
        </div>
        </div>
    );
}

const SigmaLambdaGamma = () => {
    return(
        <div className="individual-org">
        <div className="frat-name">
            ΣΛΓ
        </div>
        <img src={SigmaLambdaGammaPic}/>
        <div className="org-name">
            Sigma Lambda Gamma - Upsilon Gamma Chapter
            <br />
            <a href="http://udubgammas.wixsite.com/upsilongamma">Official Website</a>
        </div>
        <div className = "org-description">
            "Sigma Lambda Gamma strives to be the premier organization committed to providing a mechanism of empowerment to all women."
        </div>
        </div>
    );
}
/*
const PiNuIota = () => {
    return(
        <div className="individual-org">
        <div className="frat-name">
            ΠΝΙ
        </div>
        <img src = {PiNuIotaPic}/>
        <div className="org-name">
            Pi Nu Iota - Alpha Chapter
            <br />
            <a href="http://pinuiota.com/">Official Website</a>
        </div>
        <div className = "org-description">
            "The care and dedication to found this group has materialized into a movement that will unite and bond Filipina Sisters together in the efforts to discover our strength as women and to provide for our younger Sisters a place to grow."
        </div>
        </div>
    );
}
*/

const LambdaThetaAlpha = () => {
    return(
        <div className="individual-org">
        <div className="frat-name">
            ΛΘΑ​
        </div >
        <img src = {LambdaThetaAlphaPic}/>
        <div className="org-name">
            Lambda Theta Alpha - Gamma Omicron Chapter
            <br />
            <a href="https://www.facebook.com/LTAGammaOmicron/">Official Facebook Page</a>
        </div>
        <div className = "org-description">
            "The purpose of Lambda Theta Alpha is to provide a sisterhood based on unity, love and respect."
        </div>
        </div>
    );
}

const GammaAlphaOmega = () => {
    return(
        <div className="individual-org">
            <div className="frat-name">
                ΓΑΩ
            </div>
            <img src = {GammaAlphaOmegaPic}/>
            <div className="org-name">
                Gamma Alpha Omega - Gamma Chapter
                <br />
                <a href="http://uwgamma.wixsite.com/genuinegammas">Official Website</a>
            </div>
            <div className = "org-description">
                "The UW Gammas are the first Latina Founded Sorority to land on campus and the first in the Pacific Northwest."
            </div>
        </div>
    );
}

const DeltaKappaDelta = () => {
    return(
        <div className="individual-org">
            <div className="frat-name">
                ΔΚΔ
            </div>
            <img src = {DeltaKappaDeltaPic}/>
            <div className="org-name">
                Delta Kappa Delta
                <br />
                <a href="https://www.facebook.com/dkduw/">Official Facebook Page</a>
            </div>
            <div className = "org-description">
                "We are the one and ONLY National South-Asian Service Sorority founded on October 1, 1999 at Texas A&M University."
            </div>
        </div>
    );
}

const ChiSigmaAlpha = () => {
    return(
        <div className="individual-org">
            <div className="frat-name">
                ΧΣΑ
            </div>
            <img src = {ChiSigmaAlphaPic}/>
            <div className="org-name">
                Chi Sigma Alpha - Alpha Chapter
                <br />
                <a href="https://www.facebook.com/uwchisigmaalpha/">Official Facebook Page</a>
            </div>
            <div className = "org-description">
                "These letters don't make me better than you. These letters make me better than I used to be."
            </div>
        </div>
    );
}

const AlphaKappaDeltaPhi = () => {
    return(
        <div className="individual-org">
            <div className="frat-name">
                αΚΔΦ
            </div>
            <img src = {AKDPhiPic}/>
            <div className="org-name">
                alpha Kappa Delta Phi - Pi Chapter
                <br />
                <a href="https://uwakdphi.weebly.com/">Official Website</a>
            </div>
            <div className = "org-description">
                "alpha Kappa Delta Phi International Sorority, Inc. is the first, largest, and ONLY international Asian-interest sorority."
            </div>
        </div>
    );
}
/*
const DeltaLambdaPhi = () => {
    return(
        <div className="individual-org">
            <div className="frat-name">
                ΔΛΦ
            </div>
            <img src = {DeltaLambdaPhiPic}/>
            <div className="org-name">
                Delta Lambda Phi - Psi Chapter
                <br />
                <a href="https://dlp.org/psi/">Official Website</a>
            </div>
            <div className = "org-description">
                "A social fraternity for gay, bi, trans, and progressive men"
            </div>
        </div>
    );
}
*/

const LambdaPhiEpsilon = () => {
    return(
        <div className="individual-org">
            <div className="frat-name">
              ΛΦΕ
            </div>
            <img src = {LambdaPhiEpsilonPic}/>
            <div className="org-name">
                Lambda Phi Epsilon
                <br />
                <a href="http://uwlambdas.com/">Official Website</a>
            </div>
        </div>
    );
}

const OmegaDeltaPhi = () => {
    return(
        <div className="individual-org">
            <div className="frat-name">
                ΩΔΦ
            </div>
            <img src = {OmegaDeltaPhiPic} />
            <div className="org-name"> 
                Omega Delta Phi - Lambda Chapter

                <br />
                <a href="http://odphiuw.wixsite.com/odphi-uw">Official Website</a>
            </div>
            <div className = "org-description">
            "This Brotherhood was founded in order to provide, to ANY man, a diverse fraternal experience, which coincides with a higher education."
            </div>
        </div>
    );
}

const PiAlphaPhi = () => {
    return(
        <div className="individual-org">
            <div className="frat-name">
                ΠΑΦ​
            </div>
            <img src = {PiAlphaPhiPic}/>
            <div className="org-name">
                Pi Alpha Phi - Xi Chapter
                <br />
                <a href="https://www.facebook.com/uwpaphi/">Official Facebook Page</a>
            </div>
            <div className = "org-description">
                "Pi Alpha Phi is the FIRST Asian-American interest fraternity in the nation founded in 1929"
            </div>
        </div>
    );
}

const SigmaLambdaBeta = () => {
    return(
        <div className="individual-org">
            <div className="frat-name">
                ΣΛΒ
            </div>
            <img src = {SigmaLambdaBetaPic}/>
            <div className="org-name">
                Sigma Lambda Beta - Phi Beta Chapter
                <br />
                <a href="http://students.washington.edu/slbuw/index2.html">Official Website</a>
            </div>
            <div className = "org-description">
            "The Phi Beta Chapter of Sigma Lambda Beta was the final link in establishing the fraternity on all four corners of the United States."
            </div>
        </div>
    );
}

const OrgTitle = () => {
    return(
        <div className="org-title">
            Organizations
        </div>
    )
}

export default OrganizationsRoute;