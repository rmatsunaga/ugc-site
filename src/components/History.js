import React, { Component } from 'react';
import Footer from './PresidentialFooter';
import { CSSTransitionGroup } from 'react-transition-group';

class History extends Component{
    render(){
        return(
            <CSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
                <div className = "container">
                    <div className = "president-header">
                    United Greek Council History
                    </div>
                    Multicultural Greek organizations began to flourish at the University of Washington in the late 90s and early 2000s. At that time, three Greek councils served ancillary roles in coordinating activities among their constituent organizations. The <a target="_blank" href = "http://www.uwifc.com/">Interfraternity Council</a> (IFC) governed traditionally white fraternities, the <a target="_blank" href = "https://www.uwpanhellenic.com/">Panhellenic Association</a> (PHA) governed traditionally white sororities, and the <a target="_blank" href = "http://students.washington.edu/nphc/">National Pan-Hellenic Council</a> (NPHC) governed fraternities and sororities of African ancestry. However, organizations with interests outside these councils had no formal structure for organizing or collaborating.
                    <br />
                    <br />
                    Rene Singleton, an advisor within the UW Student Activities Office (SAO), recognized the need to foster unity within the growing Asian and Latino Greek scene and mobilized student leaders to draft a constitution for a new Greek council on campus. <a target="_blank" href = "http://www.dailyuw.com/news/article_2d54ea1d-2c7f-5799-9533-b487300bdf92.html">Established in 2002</a> with approval from the SAO, the <a target="_blank" href = "http://www.uwugc.org/">United Greek Council</a> (UGC) aimed to unify historically underrepresented chapters on campus. According to Singleton, the multicultural chartering organizations of the UGC included Omega Delta Phi (est. 1996), Gamma Alpha Omega (est. 1997), alpha Kappa Delta Phi (est. 1998), Lambda Phi Epsilon (est. 1999), Sigma Lambda Beta (est. 2001), and Chi Sigma Alpha (est. 2002). Andrew Jiang of Lambda Phi Epsilon was elected as the Founding President of UGC.
                    <br />
                    <br />
                    In the mid-2000s, UGC membership more than doubled in size with the addition of Sigma Beta Rho (est. 2003), Lambda Theta Alpha (est. 2003), Delta Phi Omega (est. 2003), Sigma Psi Zeta (est. 2003), Pi Alpha Phi (est. 2004), Sigma Lambda Gamma (est. 2006), Delta Lambda Phi (est. 2006), and <a target="_blank" href = "https://www.facebook.com/UWZKE/posts/822929891071663">Zeta Kappa Epsilon</a> (est. 2007). Although engineering sorority Phi Sigma Rho and honorary band fraternity Kappa Kappa Psi joined the UGC in its formative stages of development, the two organizations disaffiliated from the council due to a lack of interest among their members over the years. Both Delta Phi Omega and Zeta Kappa Epsilon terminated their charter due to steep declines in membership.
                    <br />
                    <br />
                    Unlike traditional fraternities and sororities that mandate their membership to reside in furnished quarters on Greek Row, multicultural Greeks were assigned office spaces housed in campus buildings like the Husky Union Building (HUB) and the Ethnic Cultural Center (ECC). During the <a target="_blank" href = "http://www.dailyuw.com/news/article_c6d936e4-55df-5272-b78c-75fd615bb77d.html">renovation of both the HUB and the ECC</a> from 2010-2012, UGC organizations were forced to move to other campus locations, like Condon Hall. Campus yard shows and tabling events that historically took place in front of the HUB moved to Red Square.
                    <br />
                    <br />
                    As a relatively young council compared to IFC, PHA, and NPHC, the leadership of the United Greek Council spent its first decade forming its identity on campus. Kathy Chin of Chi Sigma Alpha noticed <a target="_blank" href = "http://www.dailyuw.com/features/article_17600702-c4b3-57ad-ac29-29a601b88da7.html">a lack of coordination</a> among the greater Greek community during her time as UGC President in 2009. To better integrate the multicultural Greek community with the rest of the student body, 2010 UGC President Jeff Wang of Zeta Kappa Epsilon collaborated with leadership from the Associated Students of the University of Washington (ASUW) by involving the council in planning and executing campus-wide events, such as <a target="_blank" href = "https://records.asuw.org/Documents/Judicial%20Committee/1112%20Judicial%20Recommendations/20111118-BOD_Bill_105_An_Act_to_Revise_the_Director_of_Community_Relations_and_Director_of_Programming_positions_in_relation_to_Homecoming.pdf">Homecoming</a>.
                    <br />
                    <br />
                    There are currently eleven Greek organizations active within UGC that span across Asian, Latino, and progressive interests. As the council steadily expands in size, UGC will continue to provide a <a target="_blank" href = "http://www.dailyuw.com/news/article_2d54ea1d-2c7f-5799-9533-b487300bdf92.html">safe and inclusive space</a> for the expression of diverse opinions and meaningful social relationships. By equipping its constituent organizations with the proper resources and professional training, the council empowers its individual members to positively impact the University of Washington community and the world around them.
                    <Footer />
                </div>
            </CSSTransitionGroup>
            

        );
    }
}


export default History;