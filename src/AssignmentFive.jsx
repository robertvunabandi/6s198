import React from "react";
import main from "./main";
import AssignmentTitleContainer from "./components/AssignmentTitle";
import XBoxView from "./components/Xbox";
import XContactInformationBoxContainer from "./components/XContactInformationBox";
import XInlineCodeContainer from "./components/XInlineCode";
import XImageWrapperComponent from "./components/XImageWrapper";
import XHorizontalSplitContainer from "./components/XHorizontalSplit";
import XImageView from "./components/XImageView";

// loading image src's
import GeneratedSrc from "./assets/5-1.2.2-generated.png";
import DatasetImageSrc from "./assets/5-1.2.2-original.png";
import GraphDiscriminatorCostSrc from "./assets/5-1.2.2-discriminator-cost.png";
import GraphGeneratorCostSrc from "./assets/5-1.2.2-generator-cost.png";
import AdamGanSrc from "./assets/5-1.3-ConvAdamGenerated.png";
import AdamGanSrc2 from "./assets/5-1.3-ConvAdamGenerated2.png";
import AdamGanSrcMoreDisc from "./assets/5-1.3-ConvAdamGeneratedMoreDisc.png";
import AdamGanSrcMoreGen from "./assets/5-1.3-ConvAdamGeneratedMoreGen.png";
import AdamGanSrcMoreGen2 from "./assets/5-1.3-ConvAdamGeneratedMoreGen2.png";

window.addEventListener("load", () => main(<AssignmentFiveView />));

function AssignmentFiveView() {
  return (
    <div className={"assignment-five"}>
      <div className={"assignment-box"}>
        <AssignmentTitleContainer title={"6.S198 Assignment 5"}/>
        <XBoxView className={"pad-left-100"}>
          <XContactInformationBoxContainer />
        </XBoxView>
        <XBoxView className={"pad-left-100"}>
          <h1>1. Exploring the GAN Playground</h1>
          <h2>1.2. Changing the Model</h2>
          <h3>1.2.1. Question</h3>
          <span>
            <b>
              Why does the Generator need the second FC layer to transform the shape [256] output
              of the first FC layer?
            </b>
            <br/>
            That is because reshaping from a 1D vector into a 3D vector needs to match up. How we
            know whether they match up is my multiplying the dimensions of the 3D vector. I.e.,{" "}
            <XInlineCodeContainer>[28, 28, 1]</XInlineCodeContainer> matches{" "}
            <XInlineCodeContainer>784</XInlineCodeContainer> because{" "}
            <XInlineCodeContainer>28 * 28 * 1 = 784</XInlineCodeContainer>.
          </span>
          <h3>1.2.2. Question</h3>
          <span>
            Here is an image that resulted from training this GAN with fully connected layers:
            <XHorizontalSplitContainer>
              <div>
                <XImageWrapperComponent>
                  <XImageView src={GeneratedSrc} caption={"Generated Image from FC GAN"}/>
                </XImageWrapperComponent>
              </div>
              <div>
                <XImageWrapperComponent>
                  <XImageView src={DatasetImageSrc} caption={"Dataset image from FC GAN"}/>
                </XImageWrapperComponent>
              </div>
            </XHorizontalSplitContainer>
            Then, we also have the costs:
            <XHorizontalSplitContainer>
              <div>
                <XImageWrapperComponent>
                  <XImageView
                    src={GraphDiscriminatorCostSrc}
                    caption={"Discriminator Cost from FC GAN"}/>
                </XImageWrapperComponent>
              </div>
              <div>
                <XImageWrapperComponent>
                  <XImageView src={GraphGeneratorCostSrc} caption={"Generator Cost from FC GAN"}/>
                </XImageWrapperComponent>
              </div>
            </XHorizontalSplitContainer>
            It makes sense that the discriminator's cost goes up as training goes because as the
            generator gets better, it is better able to fool the discriminator thus increasing its
            cost. It also makes sense that the generator's cost goes down because it's better able
            to fool the discriminator (when training it by itself).
          </span>
          <h3>1.2.3. Question</h3>
          <span>
            <b>
              Can you say anything about the performance of the system's default fully connected
              model versus the performance of the convolutional model?
            </b>
            <br/>
            The convolutional model works far better because it's more capable of figuring out the
            image. That is, the fact that it can change the position of different parts of the
            image through convolution means that when training the generator, the generator gets
            better faster.
          </span>
          <h2>1.3. Exploring with the GAN Playground</h2>
          <h3>Some Results</h3>
          <span>
            First, I created a model using Adam with a convolutional network for both generator
            and discriminator. I used a learning rate of 0.2 for both. Here are two images:
            <XHorizontalSplitContainer>
              <div>
                <XImageWrapperComponent>
                  <XImageView
                    src={AdamGanSrc}
                    caption={"Image generated with a Convolutional GAN with Adam"}/>
                </XImageWrapperComponent>
              </div>
              <div>
                <XImageWrapperComponent>
                  <XImageView
                    src={AdamGanSrc2}
                    caption={"Image generated with a Convolutional GAN with Adam"}/>
                </XImageWrapperComponent>
              </div>
            </XHorizontalSplitContainer>
            I then created one with the same convolutional architecture but with the discriminator
            having a learning rate of 0.03 and generator with a learning rate of 0.01. This one had
            very bad results (although I didn't train it for as long):
            <XImageWrapperComponent>
              <XImageView
                src={AdamGanSrcMoreDisc}
                caption={
                  "Image generated with a Convolutional GAN with Adam with learning rate for " +
                  "discriminator at 0.03 and learning rate for generator at 0.01"
                }/>
            </XImageWrapperComponent>
            Finally, I created one with the same convolutional architecture but swapping the
            learning rates (0.01 for discriminator, and 0.03 for generator). This worked much
            better. I got the following images after only about 28K rounds of training:
            <XHorizontalSplitContainer>
              <div>
                <XImageWrapperComponent>
                  <XImageView
                    src={AdamGanSrcMoreGen}
                    caption={
                      "Image generated with a Convolutional GAN with Adam with learning rate for " +
                      "discriminator at 0.01 and learning rate for generator at 0.03"
                    }/>
                </XImageWrapperComponent>
              </div>
              <div>
                <XImageWrapperComponent>
                  <XImageView
                    src={AdamGanSrcMoreGen2}
                    caption={
                      "Image generated with a Convolutional GAN with Adam with learning rate for " +
                      "discriminator at 0.01 and learning rate for generator at 0.03"
                    }/>
                </XImageWrapperComponent>
              </div>
            </XHorizontalSplitContainer>
          </span>
          <h3>1.3.1. Question</h3>
          <span>
            I would say the images above are pretty convincing. I think they look real. For some
            reason, the discriminator got really good when using a Adam and convolutional network.
            However, the model kept generating a lot of 9's. which we sort of touched upon in
            class: that the GAN will tend to generate images that look more a certain way. I would
            say yes that it got a bit stuck; it was generating a lot of 9's, a few 3's and 7's, and
            other images that don't look like digits.
          </span>
          <h3>1.3.2. Question</h3>
          <span>
            <b>
              What happened when the discriminator learning rate was greater than the generator
              learning rate? What about when the generator learning rate was greater than the
              discriminator learning rate?
            </b>
            <br/>
            See above. However, basically when the discriminator learning rate was higher, the
            training took much longer and the results were worse. Things got better by making the
            learning rate for generator higher.
          </span>
          <h3>1.3.3. Question</h3>
          <span>
            <b>
              Try building configurations for CIFAR. (This will require a minute or two to
              loadFirst, try running with only FC layers for ~15 minutes and document your
              results.)
            </b>
            <br/>
            This took much longer to train.
          </span>
        </XBoxView>
      </div>
    </div>
  );
}