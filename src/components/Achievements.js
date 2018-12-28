import React, { Component } from 'react';
import '../App.css';

class Achievements extends Component{
    getAchievements = () => {
        let titles = ["Order of Omega: Epsilon Epsilon Chapter Initiates", "Student Activities Office: RSO of the Week", "Ethnic Cultural Center: Gala Recognition Honorees", "Husky Union Building: Hall of Fame"]
        let achievementBody = [
            "Order of Omega is a leadership honor society for members of social Greek organizations. Order of Omega recognizes juniors and seniors who have exemplified high standards in the areas of scholarship, leadership, involvement within their respective organization and within the fraternity/sorority, campus, and local community. Members are selected from the top 3% of students at each institution. To date, over 500 chapters have been chartered throughout North America, each sharing the common goal of recognizing the many outstanding student leaders at his or her institution.",
            "The Student Activities Office and HUB Games Area celebrate the achievements of Registered Student Organizations each week. The deserving RSO receives a Certificate of Achievement, a bowling event in the HUB Games Area, and a gift bag. It’s the administration's way of appreciating their leadership and contributions to the UW Community. A team of advisers review leadership, planning, implementation, publicity, outreach and participant enthusiasm to determine award recipients each week.",
            "The Ethnic Cultural Center organizes an annual awards gala to recognize affiliated students organizations and individuals who are active members of our ECC community, UW community and the greater Seattle community through activism, leadership, event planning, philanthropy, community service, and outreach. The ECC recognizes the hard work and enthusiasm of student organizations as they seek to give back to others in a constructive and enriching way.",
            '"We will carve their names into the Hall of Fame to preserve the memory of our devotion." The Hall of Fame is made up of four awards for individual students: one each for Academics, Activities, Alumni and Athletics. The awards are granted annually in the spring. Award recipient’s names are engraved on the HUB Hall of Fame wall on the first floor of the HUB. Additionally, the RSO Awards are made up of four categories: Husky Impact, Husky Tradition, Husky Empowerment, and Adviser of the Year. Awarded annually, each award comes with a $500 RSO Programming Grantandare recognized alongside the HUB Hall of Fame.'
        ]
        var orderOfOmegaPoints = [
            "Sunishchal Dev, Sigma Beta Rho, Fall 2014",
            "Mai Roach, alpha Kappa Delta Phi, Winter 2013",
            "Amy Chung, alpha Kappa Delta Phi, Winter 2013",
            "Weiyi Li, Zeta Kappa Epsilon, Spring 2012",
            "Bryan Dosono, Lambda Phi Epsilon, Winter 2012 ",
            "Se-Eun Kim, Chi Sigma Alpha, Winter 2012",
            "Quy Nguyen, alpha Kappa Delta Phi, Winter 2012",
            "Jeffrey Wang, Zeta Kappa Epsilon, Winter 2012"
        ]
        var studentActivitiesOfficePoints = [
            "Lambda Theta Alpha, Fall 2013",
            "Sigma Lambda Beta, Fall 2013",
            "Sigma Lambda Gamma, Fall 2013",
            "United Greek Council, Fall 2014"
        ]
        var eccPoints = [
            "Community Service: Lambda Phi Epsilon, 2013, 2014",
            "Participation and Collaboration: Omega Delta Phi, 2013"
        ]
        var hallOfFamePoints = [
            "Husky Empowerment: Lambda Theta Alpha, 2014",
            "Student Activities: Bryan Dosono, Lambda Phi Epsilon, 2013"
        ]
        let points = [orderOfOmegaPoints, studentActivitiesOfficePoints,eccPoints, hallOfFamePoints]

        let achievements = []
        // Outer loop to create achievements
        for (let i = 0; i < 5; i++) {
            let achievement = []
            achievement.push(<div>{titles[i]}</div>)
            achievement.push(<div>{achievementBody[i]}</div>)
            achievement.push(<ul>)
            for (let j = 0; j < points[i].length; j++) {
                achievement.push(<li>{points[i][j]}</li>)
            }
            achievement.push(</ul>)
            achievements.push(<div>{achievement}</div>)
        }
        achievements.push(<div>Have a campus-wide achievement you'd like to see listed here? Send us a message!</div>)
        return achievements
    }

    render(){
        return(
            <div> 
                <div className="mission-statement-header">Achievements</div>
                {this.getAchievements()}
            </div>
            
        );
    }
}

class Achievement extends Component {
    render(){
        return(
            <div> Fuck </div>
        );
    }
}

export default Achievements;