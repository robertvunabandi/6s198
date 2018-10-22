import React from "react";
import main from "./main";
import AssignmentTitleContainer from "./components/AssignmentTitle";
import XBoxView from "./components/Xbox";
import XContactInformationBoxContainer from "./components/XContactInformationBox";
import XInlineCodeContainer from "./components/XInlineCode";
import XImageWrapperComponent from "./components/XImageWrapper";
import XImageView from "./components/XImageView";

// import image src's
import lr080df095Src from "./assets/6-lr080df095.png";
import lr080df090Src from "./assets/6-lr080df090.png";
import lr090df090Src from "./assets/6-lr090df090.png";

window.addEventListener("load", () => main(<AssignmentSixView />));

function AssignmentSixView() {
  return (
    <div className={"assignment-six"}>
      <div className={"assignment-box"}>
        <AssignmentTitleContainer title={"6.S198 Assignment 6"}/>
        <XBoxView className={"pad-left-100"}>
          <XContactInformationBoxContainer />
        </XBoxView>
        <XBoxView className={"pad-left-100"}>
          <h1>Problem 1: What is the reward scheme for FrozenLake?</h1>
          <span>
            The official documentation says, "The episode ends when you reach the goal or fall in a
            hole. You receive a reward of 1 if you reach the goal, and zero otherwise." So, that
            means that we get a reward of 1 only if we reach the end goal. Otherwise, we get a
            reward of 0.
          </span>
          <h1>Problem 2: How big is the table used for Q-learning above?</h1>
          <span>
            I am not sure what this question is asking specifically, but I think since there are
            16 possible moves in a 4x4 game and there are always 4 actions that we can take at any
            given square, the table must have size 16 * 4 = 64 cells for each pair of cell and
            action.
          </span>
          <h1>Problem 3: Did the rewards improve over time? Why or why not?</h1>
          <span>
            They get really good really fast, but then after that things stop improving. I think
            given that the Q learning table is pretty small, it's easy for this to quickly learn
            what is needed really fast. Then, it has to stop improving at a certain point because
            of the random wind factor. Basically, this can't reach a point where it succeeds 100%
            because the wind always has some amount of chance of messing it up.
          </span>
          <h1>
            Problem 4: In the above code segment, we provided some values for
            the learning rate and discount factor. Try different values for the
            learning rate. What do you observe?
          </h1>
          <span>
            Similar results happen: the Q learning learns really quickly for a bit then stops
            improving. I generated plots in the following way. I ran the program for 10,000 episodes
            instead of 20,000, then I took the{" "}
            <XInlineCodeContainer>rewards_list</XInlineCodeContainer> list and cut it into chunks of
            20 (i.e. going from reward at episode 0 to 20, then 21 to 40, etc.). I plotted the
            number of rewards we had in the 20 episode spans for the following settings:
            <ul>
              <li>
                <XInlineCodeContainer>learning_rate = 0.80</XInlineCodeContainer> and{" "}
                <XInlineCodeContainer>discount_factor = 0.95</XInlineCodeContainer> (this is the
                default one)
              </li>
              <li>
                <XInlineCodeContainer>learning_rate = 0.80</XInlineCodeContainer> and{" "}
                <XInlineCodeContainer>discount_factor = 0.90</XInlineCodeContainer>
              </li>
              <li>
                <XInlineCodeContainer>learning_rate = 0.90</XInlineCodeContainer> and{" "}
                <XInlineCodeContainer>discount_factor = 0.90</XInlineCodeContainer>
              </li>
            </ul>
            Here are the results:
            <XImageWrapperComponent>
              <XImageView
                src={lr080df095Src}
                caption={"learning_rate = 0.80 and discount_factor = 0.95"}/>
            </XImageWrapperComponent>
            <XImageWrapperComponent>
              <XImageView
                src={lr080df090Src}
                caption={"learning_rate = 0.80 and discount_factor = 0.90"}/>
            </XImageWrapperComponent>
            <XImageWrapperComponent>
              <XImageView
                src={lr090df090Src}
                caption={"learning_rate = 0.90 and discount_factor = 0.90"}/>
            </XImageWrapperComponent>
            We can see that when the discount factor is at 0.90, it seems to be performing better.
            Otherwise, I actually tried a bunch of other settings, but these were the interesting
            ones. Surprisingly, when the learning rate was small (like 0.1 or so), this didn't
            perform as well. I found that surprising.
          </span>
        </XBoxView>
      </div>
    </div>
  );
}