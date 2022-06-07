import React from 'react';

const primaryColor = "RGB(16, 25, 32)";
const secondaryColor = "RGB(255, 231, 21)";
const tartiaryColor = "RGB(255, 255, 255)";
const quaternaryColor = "RGB(25, 118, 210)";

const homeStyling = {
  container: {
    position: "absolute",
    background: secondaryColor,
    minHeight: "calc(100vh - 56px)",
    width: "100%",
  },
  heroSection: {
    marginTop: "100px",
    fontSize: "50px",
    marginLeft: "100px",
    color: primaryColor,
  },
  colA: {
    color: primaryColor
  },
  colB: {
    color: secondaryColor
  },
  colC: {
    color: tartiaryColor
  },
  colD: {
    color: quaternaryColor
  },
  space: {
    marginTop: "10px"
  },
  spaceTODO: {
    marginTop: "25px",
    fontSize: "75px"
  },
}

function Home() {
  return (
    <div style={homeStyling.container} className="hideBar">

      <div style={homeStyling.heroSection}>

        <div>
          <span style={homeStyling.colD}>WELCOME</span>
        </div>

        <div style={homeStyling.space}>
          <span style={homeStyling.colC}> TO MY </span>
        </div>

        <div style={homeStyling.spaceTODO}>
          <span style={homeStyling.colA}> T</span>
          <span style={homeStyling.colD}> O</span>
          <span style={homeStyling.colA}> D</span>
          <span style={homeStyling.colD}> O</span>
        </div>

      </div>

    </div>
  )
}

export default Home