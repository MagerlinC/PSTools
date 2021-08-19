import React, { useState } from "react";
import "./landing.scss";
function LandingPage({}) {
  return (
    <div className="landing-page">
      <div className={"page-header"}>
        So you want to work psychological safety?
      </div>
      <div className={"page-text"}>
        Welcome to your toolbox of tools for working with psychological safety!
        This site will get your team started on your journey towards working
        with psychological safety. Read further below to get started, or check
        out the list of tools directly in the menu on the right.
      </div>
      <div className={"page-header"}>What is Psychological Safety?</div>
      <div className={"page-text"}>
        Psychological safety is cultural phenomenon which exists in all human
        interaction. Psychological safety is a belief that one will not be
        punished or humiliated for speaking up with ideas, questions, concerns,
        or mistakes within a group. A team with high psychological safety is one
        wherein the team members feel safe to experiment and learn, to make
        mistakes, and to speak openly and address the hard questions. The term
        was first coined by Amy Edmondson, a Professor of Leadership and
        Management at Harvard. Her introduction to the subject can be explored
        by using the very first tool, ”Laying the Foundation”.
      </div>
      <div className={"page-header"}>Why Work With Psychological Safety?</div>
      <div className={"page-text"}>
        Psychological safety has been proven to be one the main predictors of
        team efficiency in innovative and complex environments. Psychological
        safety is an enabler of candor, and helps your team speak openly,
        experiment, and learn from mistakes. However, psychological safety is
        not about feeling comfortable and never challenging each other. While
        the immediate goal of working with psychological safety might consist of
        learning to open up and ask the difficult questions, the end goal of
        psychological safety should be excellence, not comfort.
      </div>
      <div className={"cta-section"}>
        <button>Get Started by Reading the Quickstart Guide!</button>
        <div className={"alternative-cta-text"}>
          ... or download the compendium here, containing both the quickstart
          guide and the tools themselves.
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
