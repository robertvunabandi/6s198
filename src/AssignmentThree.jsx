import React from "react";
import AssignmentTitleContainer from "./components/AssignmentTitle";
import XImageWrapperComponent from "./components/XImageWrapper";
import XContactInformationBoxContainer from "./components/XContactInformationBox";
import XImageView from "./components/XImageView";
import XBoxView from "./components/XBox";
import XHorizontalSplitContainer from "./components/XHorizontalSplit";
import main from "./main";

// import image src's
import Src01 from "./assets/assignment-3-1.4-1.png";
import Src02 from "./assets/assignment-3-1.4-2.png";
import Src03 from "./assets/assignment-3-6-no-conv.png";
import Src04 from "./assets/assignment-3-6-one-conv.png";
import Src05 from "./assets/assignment-3-6-two-conv.png";
import Src06 from "./assets/assignment-3-code.js.txt";
import Src07 from "./assets/assignment-3-style-1-me-1.1.png";
import Src08 from "./assets/assignment-3-style-1-me-1.2-filter-3.png";
import Src09 from "./assets/assignment-3-style-1-me-1.2-filter-4.png";
import Src10 from "./assets/assignment-3-style-1-me-1.2-filter-5.png";
import Src11 from "./assets/assignment-3-style-1-me-1.2-filter-6.png";
import Src12 from "./assets/assignment-3-style-1-me-1.2-filter-7.png";
import Src13 from "./assets/assignment-3-style-1-me-1.2.1.png";
import Src14 from "./assets/assignment-3-style-1-me-1.2.png";
import Src15 from "./assets/assignment-3-style-1.jpg";
import Src16 from "./assets/assignment-2-3-style.jpg";
import Src17 from "./assets/assignment-2-3-style-transfer.jpg";
// map the with an object
const IMG_SRC_MAP = {
  "assignment-3-1.4-1.png": Src01,
  "assignment-3-1.4-2.png": Src02,
  "assignment-3-6-no-conv.png": Src03,
  "assignment-3-6-one-conv.png": Src04,
  "assignment-3-6-two-conv.png": Src05,
  "assignment-3-code.js": Src06,
  "assignment-3-style-1-me-1.1.png": Src07,
  "assignment-3-style-1-me-1.2-filter-3.png": Src08,
  "assignment-3-style-1-me-1.2-filter-4.png": Src09,
  "assignment-3-style-1-me-1.2-filter-5.png": Src10,
  "assignment-3-style-1-me-1.2-filter-6.png": Src11,
  "assignment-3-style-1-me-1.2-filter-7.png": Src12,
  "assignment-3-style-1-me-1.2.1.png": Src13,
  "assignment-3-style-1-me-1.2.png": Src14,
  "assignment-3-style-1.jpg": Src15,
  "assignment-2-3-style.jpg": Src16,
  "assignment-2-3-style-transfer.jpg": Src17,
};

window.addEventListener("load", () => main(<AssignmentThreeView />));

function AssignmentThreeView() {
  return (
    <div className={"assignment-three"}>
      <div className={"assignment-box"}>
        <AssignmentTitleContainer title={"6.S198 Assignment 3"}/>
        <XBoxView className={"pad-left-100"}><XContactInformationBoxContainer/></XBoxView>
        <XBoxView className={"pad-left-100"}>
          <h1>Part 1-2</h1>
          <h2>1.4: Visualizing Convolutional Neural Networks</h2>
          <span>
          I think the visualization tool is good, but it didn't really help much in understanding
          really how convolution works. I think it would have been nice to include the actual
          convolution filter. I made the following random inputs:
          <XImageWrapperComponent>
            <XImageView src={IMG_SRC_MAP["assignment-3-1.4-1.png"]}/>
          </XImageWrapperComponent>
          <XImageWrapperComponent>
            <XImageView src={IMG_SRC_MAP["assignment-3-1.4-2.png"]}/>
          </XImageWrapperComponent>
          It's hard to tell why the outputs are 9 and 8.
        </span>
          <h1>Part 3: Style Transfer</h1>
          <h2>3.0: Share Style Transfer Made</h2>
          <XHorizontalSplitContainer>
            <div>
              I took a photo of myself with a camera:
              <XImageWrapperComponent>
                <XImageView
                  src={IMG_SRC_MAP["assignment-2-3-img.JPG"]} height={"12rem"}/>
              </XImageWrapperComponent>
            </div>
            <div>
              And I chose the following style:
              <XImageWrapperComponent>
                <XImageView
                  src={IMG_SRC_MAP["assignment-2-3-style.jpg"]} height={"12rem"}/>
              </XImageWrapperComponent>
            </div>
            <div>
              Which yields the following style transfer image:
              <XImageWrapperComponent>
                <XImageView
                  src={IMG_SRC_MAP["assignment-2-3-style-transfer.jpg"]} height={"12rem"}/>
              </XImageWrapperComponent>
            </div>
          </XHorizontalSplitContainer>
          <h2>Section 3.5: Fast Style Transfer</h2>
          <h3>
            3.5.1: What happens when you pass an image through the same filter several times?
            Do you observe any interesting characteristics or padding artifacts?
          </h3>
          I used the following image and style:
          <XHorizontalSplitContainer>
            <div>
              A photo of myself
              <XImageWrapperComponent>
                <XImageView src={IMG_SRC_MAP["me-1.jpg"]} height={"25rem"}/>
              </XImageWrapperComponent>
            </div>
            <div>
              The style chosen
              <XImageWrapperComponent>
                <XImageView src={IMG_SRC_MAP["assignment-3-style-1.jpg"]} height={"25rem"}/>
              </XImageWrapperComponent>
            </div>

          </XHorizontalSplitContainer>
          After applying this multiple times, I get slightly different images. Here's two of them:
          <XHorizontalSplitContainer>
            <div>
              <XImageWrapperComponent>
                <XImageView src={IMG_SRC_MAP["assignment-3-style-1-me-1.1.png"]} height={"25rem"}/>
              </XImageWrapperComponent>
            </div>
            <div>
              <XImageWrapperComponent>
                <XImageView src={IMG_SRC_MAP["assignment-3-style-1-me-1.2.png"]} height={"25rem"}/>
              </XImageWrapperComponent>
            </div>
          </XHorizontalSplitContainer>
          <h3>
            3.5.2: Apply a filter to an image and then apply another filter to that
            already-filtered image. Is the result similar to what you would get when you apply the
            second filter to the original image?
          </h3>
          In this case, I chose the image that was used in 3.5.1. I would think that the resulting
          image is going to be a bit worse off (farther from the original image) than before. Let's
          see how this work.
          <XHorizontalSplitContainer>
            <div>
              Here's the original image (a style transferred image):
              <XImageWrapperComponent>
                <XImageView src={IMG_SRC_MAP["assignment-3-style-1-me-1.2.png"]} height={"25rem"}/>
              </XImageWrapperComponent>
            </div>
            <div>
              Here's the style transfer (second style transfer):
              <XImageWrapperComponent>
                <XImageView
                  src={IMG_SRC_MAP["assignment-3-style-1-me-1.2.1.png"]} height={"25rem"}/>
              </XImageWrapperComponent>
            </div>
          </XHorizontalSplitContainer>
          It's a bit hard to tell, but yeah the second image looks worse in terms of how close it
          looks to the original image.
          <h3>
            3.5.3: Try different combinations of filters and number of times you filter an image.
            Note on your website if you have any interesting observations or insights.
          </h3>
          Here's what happens when I filter this same image multiple times, going from left
          (unfiltered) to right (filtered many times):
          <XHorizontalSplitContainer>
            <div>
              <XImageWrapperComponent>
                <XImageView src={IMG_SRC_MAP["me-1.jpg"]} height={"10rem"}/>
              </XImageWrapperComponent>
            </div>
            <div>
              <XImageWrapperComponent>
                <XImageView src={IMG_SRC_MAP["assignment-3-style-1-me-1.2.png"]} height={"10rem"}/>
              </XImageWrapperComponent>
            </div>
            <div>
              <XImageWrapperComponent>
                <XImageView
                  src={IMG_SRC_MAP["assignment-3-style-1-me-1.2.1.png"]} height={"10rem"}/>
              </XImageWrapperComponent>
            </div>
            <div>
              <XImageWrapperComponent>
                <XImageView
                  src={IMG_SRC_MAP["assignment-3-style-1-me-1.2-filter-3.png"]} height={"10rem"}/>
              </XImageWrapperComponent>
            </div>
            <div>
              <XImageWrapperComponent>
                <XImageView
                  src={IMG_SRC_MAP["assignment-3-style-1-me-1.2-filter-4.png"]} height={"10rem"}/>
              </XImageWrapperComponent>
            </div>
            <div>
              <XImageWrapperComponent>
                <XImageView
                  src={IMG_SRC_MAP["assignment-3-style-1-me-1.2-filter-5.png"]} height={"10rem"}/>
              </XImageWrapperComponent>
            </div>
            <div>
              <XImageWrapperComponent>
                <XImageView
                  src={IMG_SRC_MAP["assignment-3-style-1-me-1.2-filter-6.png"]} height={"10rem"}/>
              </XImageWrapperComponent>
            </div>
            <div>
              <XImageWrapperComponent>
                <XImageView
                  src={IMG_SRC_MAP["assignment-3-style-1-me-1.2-filter-7.png"]} height={"10rem"}/>
              </XImageWrapperComponent>
            </div>
          </XHorizontalSplitContainer>
          Now, it's much more obvious that the original image gets lost as we apply the same
          filter many times.
          <h2>Section 3.6: Building CNNs with Code</h2>
          <h3>
            3. Do you have a hypothesis for why CIFAR-10 is so much harder to train on than Fashion
            MNIST and MNIST (i.e. it’s more difficult to achieve a 90%+ accuracy) while Fashion
            MNIST has similar training times to MNIST (even though Fashion MNIST is more complex
            than MNIST)?
          </h3>
          <span>
          CIFAR-10 is harder because there is a lot more classes to predict. In addition, CIFAR-10
          is in color. I think that can be seen in both ways (i.e. better and worse). The thing is,
          you can have two very different things have the same colors in the same background. That
          can make things slightly worse.
        </span>
          <h3>
            4. How does adding more convolutional layers relate to accuracy and training speed? Is
            there
            a point at which adding more layers plateaus or even decreases the maximum accuracy you
            are able to achieve with that model?
          </h3>
          <span>
          I think that adding a couple more makes the training go by faster. I went from
          having just one convolution layer to two, and we reached 90% accuracy a bit faster (about
          140th batch vs. 170th). I think this can make a difference if training larger images.
        </span>
          <h3>6. Add code that captures some performance statistic from a testing run.</h3>
          <span>
          Here is what we get with no convolution for 400 batches of training with using leaky ReLU
          activations:
          <XImageWrapperComponent>
            <XImageView src={IMG_SRC_MAP["assignment-3-6-no-conv.png"]}/>
          </XImageWrapperComponent>
          Here is what we get with one layer of convolution:
          <XImageWrapperComponent>
            <XImageView src={IMG_SRC_MAP["assignment-3-6-one-conv.png"]}/>
          </XImageWrapperComponent>
          Here is what we get with two layers of convolution:
          <XImageWrapperComponent>
            <XImageView src={IMG_SRC_MAP["assignment-3-6-two-conv.png"]}/>
          </XImageWrapperComponent>

          Here's a link to my modified javascript file:{" "}
            <a href={IMG_SRC_MAP["assignment-3-code.js.txt"]} target={"blank"}>
            index.js
          </a>
        </span>
        </XBoxView>
        <div className={"empty-space-100"}>
        </div>
      </div>
    </div>
  );
}