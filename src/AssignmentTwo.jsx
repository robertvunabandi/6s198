import React from "react";
import AssignmentTitleContainer from "./components/AssignmentTitle.jsx";
import AssignmentSubTitleContainer from "./components/AssignmentSubTitle.jsx";
import XImageWrapperComponent from "./components/XImageWrapper.jsx";
import XContactInformationBoxContainer from "./components/XContactInformationBox.jsx";
import XImageView from "./components/XImageView.jsx";
import XBoxView from "./components/XBox.jsx";
import XInlineCodeContainer from "./components/XInlineCode.jsx";
import main from "./main.jsx";

// import images
import Src01 from "./assets/assignment-2-1.6.1-1FC.png";
import Src02 from "./assets/assignment-2-1.6.1-2FC.png";
import Src03 from "./assets/assignment-2-1.6.1-3FC.png";
import Src04 from "./assets/assignment-2-1.6.1-4FC.png";
import Src05 from "./assets/assignment-2-1.6.1-5FC.png";
import Src06 from "./assets/assignment-2-1.6.2-128-32-10FC.png";
import Src07 from "./assets/assignment-2-1.6.2-32-128-10FC.png";
import Src08 from "./assets/assignment-2-2.1-batch-size-128.png";
import Src09 from "./assets/assignment-2-2.1-batch-size-16.png";
import Src10 from "./assets/assignment-2-2.1-batch-size-64.png";
import Src11 from "./assets/assignment-2-2.2-test-batch-size-16.png";
import Src12 from "./assets/assignment-2-2.2-test-batch-size-64.png";
import Src13 from "./assets/assignment-2-2.3-modified.png";
import Src14 from "./assets/assignment-2-2.4-index.js.txt";
// import Src15 from "./assets/assignment-2-3-img.JPG";
import Src16 from "./assets/assignment-2-3-style-transfer.jpg";
import Src17 from "./assets/assignment-2-3-style.jpg";

// map image titles to their src's
const IMG_SRC_MAP = {
  "assignment-2-1.6.1-1FC.png": Src01,
  "assignment-2-1.6.1-2FC.png": Src02,
  "assignment-2-1.6.1-3FC.png": Src03,
  "assignment-2-1.6.1-4FC.png": Src04,
  "assignment-2-1.6.1-5FC.png": Src05,
  "assignment-2-1.6.2-128-32-10FC.png": Src06,
  "assignment-2-1.6.2-32-128-10FC.png": Src07,
  "assignment-2-2.1-batch-size-128.png": Src08,
  "assignment-2-2.1-batch-size-16.png": Src09,
  "assignment-2-2.1-batch-size-64.png": Src10,
  "assignment-2-2.2-test-batch-size-16.png": Src11,
  "assignment-2-2.2-test-batch-size-64.png": Src12,
  "assignment-2-2.3-modified.png": Src13,
  "assignment-2-2.4-index.js": Src14,
  // "assignment-2-3-img.JPG": Src15,
  "assignment-2-3-style-transfer.jpg": Src16,
  "assignment-2-3-style.jpg": Src17
};

window.addEventListener("load", () => main(<AssignmentTwoView />));

function AssignmentTwoView() {
  return (
    <div className={"assignment-two"}>
      <div className={"assignment-box"}>
        <AssignmentTitleContainer title={"6.S198 Assignment 2"}/>
        <XBoxView className={"pad-left-100"}><XContactInformationBoxContainer /></XBoxView>
        <AssignmentSubTitleContainer subtitle={"Part Due on Wednesday, September 12, 2018"}/>
        <XBoxView className={"pad-left-100"}>
          <h1>Part 1</h1>
          <h2>Part 1.1: Building models with model builder</h2>
          <span>
            The model is invalid because the layers don't match up. Initially, we have a tensor
            with <XInlineCodeContainer>[28,28,1]</XInlineCodeContainer> while the Soft-Max layer
            expects an input with a one dimensional tensor of dimensions{" "}
            <XInlineCodeContainer>[10]</XInlineCodeContainer>.
            <br/>
            <br/>
            Then, when we add the flatten then fully connected layer, the model makes wrong
            predictions because the weights were generated randomly. So, right now the model is
            working as if we were tossing a 10 sided die every time and picking that number as
            the prediction, which makes it such that we have a success rate of about 10%.
            <br/>
            The model will start working only after we train it.
          </span>
          <h2>Part 1.2: Training</h2>
          <ol>
            <li>
              I observed accuracies 76.5625% in training set and 84.375% on the testing set.
              The demo trains 1220 examples/sec and performs 1010 inferences/sec. When I did
              the same thing on Fashion MNIST, I get accuracies 76.5625%  in training set and
              71.875% in testing set. The demo trains 1270 examples/sec and performs
              1100 inferences/sec.
            </li>
            <li>
              When I trained on CIFAR 10, I got test accuracy of 42.1875% and training accuracy of
              31.35%. Yes, it's pretty bad.
            </li>
            <li>-</li>
            <li>
              The numbers are exploding (either too low or too high), so it makes many of them
              predict as 0. This causes the 1/10 dice roll assumption to be even worse. Now we just
              tend more to predicting 0.
            </li>
          </ol>
          <h2>Part 1.3: Optimizers and Hyperparameters</h2>
          <h2>Part 1.4: Activation Layers</h2>
          <span>
            Training the model with a ReLU activation causes it to perform actually pretty bad.
            I.e., we have the setting <XInlineCodeContainer>
            Input → Flatten → FC(10) → ReLU → FC(10) → Softmax → Label
            </XInlineCodeContainer>. The accuracy doesn't get any better than 30% for
            both test and training. However, using the setting <XInlineCodeContainer>
            Input → Flatten → FC(100) → ReLU → FC(10) → Softmax → Label
            </XInlineCodeContainer> is actually a lot better. We get accuracies as high as 80% for
            both training and testing. So, increasing the first FC layer to have 100 hidden units
            does make a difference.
          </span>
          <h2>Part 1.5: Overfitting</h2>
          <h2>Part 1.6: Exploring with Model Builder</h2>
          <h3>1.6.1: Explore with 1, 2, 3, 4, 5 FC Layers</h3>
          <span>
            I chose the hidden layers to have 128 hidden units.
            <br />
            <br />
            {
              Array.from(Array(5)).map((e,i)=> i+1).map(index => {
                return (
                  <span>
                    Using {index} FC layer, we get the following:
                    <XImageWrapperComponent>
                      <XImageView url={`assignment-2-1.6.1-${index}FC.png`} />
                    </XImageWrapperComponent>
                    <br />
                  </span>
                );
              })
            }
            With that, it's clear that it doesn't seem to make much of a difference to use
            more layers except for the fact that the training takes significantly longer for
            larger networks. So, it might be best to limit to 1 or 2 because there is no clear
            advantage to having more layers.
          </span>
          <h3>1.6.2: Explore with 3 FC Layers of Varying Sizes</h3>
          <span>
            I chose the hidden layers to have 128, 32 hidden units to swap.
            Using the setup <XInlineCodeContainer>
            Input → Flatten → FC(128) → ReLU → FC(32) → ReLU → FC(10) → Softmax → Label
            </XInlineCodeContainer>, we get the following:
            <XImageWrapperComponent>
              <XImageView src={IMG_SRC_MAP["assignment-2-1.6.2-128-32-10FC.png"]} />
            </XImageWrapperComponent>
            Using the setup <XInlineCodeContainer>
            Input → Flatten → FC(32) → ReLU → FC(128) → ReLU → FC(10) → Softmax → Label
            </XInlineCodeContainer>, we get the following:
            <XImageWrapperComponent>
              <XImageView src={IMG_SRC_MAP["assignment-2-1.6.2-32-128-10FC.png"]} />
            </XImageWrapperComponent>
            Again, there doesn't seem to be a clear difference between the two. The 128-32 seemed
            to have gotten to a good level more quickly than the 32-128. However, that could have
            been just due to chance (however, that's something to test more intensively).
          </span>
          <h3>1.6.3: Attempting the Same with Fashion MNIST and CIFAR-10</h3>
          <span>
            I reran 1.6.2 on both MNIST and CIFAR-10, and the quick high accuracy effect didn't
            manifest itself this time. I also got similar results with 1.6.1.
          </span>
          <div className={ "empty-space-100" }>
          </div>
        </XBoxView>
        <AssignmentSubTitleContainer subtitle={"Part Due on Monday, September 17, 2018"}/>
        <XBoxView className={"pad-left-100"}>
          <h1>Part 2</h1>
          <h2>2.1: Setting Up to Code Multilayer Models</h2>
          <span>
            The higher the batch size, the less noisy the loss gets.
            Increasing the number of batches just increases how long we train for.
            There didn't seem to be a speed in training when the batch size changed.
            However, a higher batch size makes the training take longer (while it's
            still not faster, at least wit the current model). So, there should be a
            balance between batch size and how long it takes ideally. I feel like a batch
            of 32 or 64 is good (or somewhere in between).
            <br/>
            <br/>
            {[16, 64, 128].map(batch_size => {
              return (
                <span>
                  Here's what it looks like for a batch size of {batch_size}:
                  <XImageWrapperComponent>
                    <XImageView
                      src={IMG_SRC_MAP[`assignment-2-2.1-batch-size-${batch_size}.png`]} />
                  </XImageWrapperComponent>
                </span>
              );
            })}
            One can see how it quickly progresses from very noisy to a lot less noisy as we
            increase the batch size.
            <br/>
          </span>
          <h2>2.2: Training and Testing</h2>
          <h3>2.2.1: Problem 6.1</h3>
          <span>
            Having a small batch size and number of batches will cause the test accuracy
            to be low.
          </span>
          <h3>2.2.2: Problem 6.2</h3>
          <span>
            Here's what we get with a batch size of 16 (with test batch size
            left at 10 and iteration frequency left at 5):
            <XImageWrapperComponent>
              <XImageView src={IMG_SRC_MAP["assignment-2-2.2-test-batch-size-16.png"]} />
            </XImageWrapperComponent>
            Here's what we get with a batch size of 64 (with test batch size
            left at 10 and iteration frequency left at 5):
            <XImageWrapperComponent>
              <XImageView src={IMG_SRC_MAP["assignment-2-2.2-test-batch-size-64.png"]} />
            </XImageWrapperComponent>
          </span>
          <h3>2.2.3: Problem 6.3</h3>
          <span>
            My modified model yields the following results:
            <XImageWrapperComponent>
              <XImageView src={IMG_SRC_MAP["assignment-2-2.3-modified.png"]} />
            </XImageWrapperComponent>
          </span>
          <h3>2.2.4: Problem 6.4</h3>
          <span>
            Here's a link to my modified javascript file:{" "}
            <a href={IMG_SRC_MAP["assignment-2-2.4-index.js.txt"]} target={"blank"}>
              index.js
            </a>
          </span>
          <h2>2.3: Style Transfer Examples</h2>
          <span>
            I chose the following image:
            <XImageWrapperComponent>
              <XImageView src={IMG_SRC_MAP["assignment-2-3-img.JPG"]} />
            </XImageWrapperComponent>
            And I chose the following style:
            <XImageWrapperComponent>
              <XImageView src={IMG_SRC_MAP["assignment-2-3-style.jpg"]} />
            </XImageWrapperComponent>
            Which yields the following style transfer image:
            <XImageWrapperComponent>
              {/* password: 0078146816 */}
              <XImageView src={IMG_SRC_MAP["assignment-2-3-style-transfer.jpg"]} />
            </XImageWrapperComponent>
          </span>
        </XBoxView>
        <div className={ "empty-space-100" }>
        </div>
      </div>
    </div>
  );
}