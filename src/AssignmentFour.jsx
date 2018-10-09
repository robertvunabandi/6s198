import React from "react";
import main from "./main";
import AssignmentTitleContainer from "./components/AssignmentTitle";
import XBoxView from "./components/Xbox";
import XContactInformationBoxContainer from "./components/XContactInformationBox";
import XHorizontalSplitContainer from "./components/XHorizontalSplit";
import XImageWrapperComponent from "./components/XImageWrapper";
import XImageView from "./components/XImageView";

// loading image src's
import TSNEOneToSevenSrc from "./assets/4-1.1-one-seven.png";
import TSNEThreeToEightSrc from "./assets/4-1.1-three-eight.png";
import TSNESixOutlier from "./assets/4-1.1-SixOutlier.png";
import Word2Vec10KPiano from "./assets/4-1.3-Word2Vec10KPiano.png";
import Word2VecAllPiano from "./assets/4-1.3-Word2VecAllPiano.png";
import Word2VecAllHome from "./assets/4-1.3-Word2VecAllHome.png";
import Word2VecAllWork from "./assets/4-1.3-Word2VecAllWork.png";
import OriginalFontVector from "./assets/4-2.3.1-originalFont.png";
import MostSimilarFont from "./assets/4-2.3.1-mostSimilarFont.png";
import XInlineCodeContainer from "./components/XInlineCode";

window.addEventListener("load", () => main(<AssignmentFourView/>));

function AssignmentFourView() {
  return (
    <div className={"assignment-four"}>
      <div className={"assignment-box"}>
        <AssignmentTitleContainer title={"6.S198 Assignment 4"}/>
        <XBoxView className={"pad-left-100"}>
          <XContactInformationBoxContainer/>
        </XBoxView>
        <XBoxView className={"pad-left-100"}>
          <h1>1.1: Visualizing Datasets Using the Embedding Projector</h1>
          {/* question */}
          <span><b>Do the different digits separate into distinct clouds?</b></span>
          <br/>
          <span>
            Yes, they do. Each digit kind of clusters on its own side. What's
            interesting is that we get to see which digits are similar to which
            ones! For instance, I'd expect 1 to be close to 7 or 3 to be close to
            8. In the following images, we can see that both are true from these
            t-SNE visualizations.
          </span>
          <XHorizontalSplitContainer>
            <div>
              <XImageWrapperComponent>
                <XImageView
                  src={TSNEOneToSevenSrc}
                  height={"25rem"}
                  caption={"t-SNE showing how one is close to seven"}/>
              </XImageWrapperComponent>
            </div>
            <div>
              <XImageWrapperComponent>
                <XImageView
                  src={TSNEThreeToEightSrc}
                  height={"25rem"}
                  caption={"t-SNE showing how three is close to eight"}/>
              </XImageWrapperComponent>
            </div>
          </XHorizontalSplitContainer>
          {/* question */}
          <span><b>
            Are there images that are in the wrong cloud, and can you make sense of why
            they are wrong? Are there images that are outliers from the rest of the data?
          </b></span>
          <br/>
          <span>
            I don't think there are images that are in the "wrong cloud". However, yes
            there are outliers. In the following image, we can see that 6 is kind of on
            its own. What I mean is that every other digit have a part of them meshed
            together with some other digits and another part where they are separated
            (which is something I'd expect otherwise the predictions would be wrong!) but
            6 in particular doesn't have a part that meshes with other digits. Now, I
            wonder if that's because 6 just particularly looks different from the rest of
            the digits (I'd say, maybe not? It's pretty close to 9. If we think of
            convolution being applied, I can see through a full rotation how 6 can turn
            into a 9 although I don't think convolution does that) or that the dataset
            is flawed in that the 6's in the dataset are written in such a way that they
            differ from the rest of the images (I think this is more plausible).
          </span>
          <XImageWrapperComponent>
            <XImageView
              src={TSNESixOutlier}
              caption={"Six is an outlier when running t-SNE"}/>
          </XImageWrapperComponent>
          {/* question */}
          <span><b>
            Are there digits that seem more separate from the others, and are there pairs
            of digits that are more easily confused?
          </b></span>
          <br/>
          <span>
            Again, yes 6 is very separate from the rest. In addition, yes there are digits
            that are very close. The two that can be seen in the photo above are 4 and 9, which
            are very close to each other. I think that makes sense. I can see myself confusing
            a badly written 4 with a 9—they have a similar shape.
          </span>
          <h1>1.2-1.3 Words as Vector</h1>
          <span><b>
            Do you get different or better results if you use Word2Vec All instead of 10K?
            Did you find any interesting examples that speak to how words are used news articles?
          </b></span>
          <br/>
          <span>
            Doing with the class example, looking up the word "piano" and putting violin on the
            left and drum on the right shows that most words are close to drum in Word2Vec 10K.
            In a way, violin is an outlier. I get similar results with Word2Vec All.
          </span>
          <XImageWrapperComponent>
            <XImageView
              src={Word2Vec10KPiano}
              caption={"Using Word2Vec 10K with Piano, Violin on the left and Drum on the Right"}/>
          </XImageWrapperComponent>
          <XImageWrapperComponent>
            <XImageView
              src={Word2VecAllPiano}
              caption={"Using Word2Vec All with Piano, Violin on the left and Drum on the Right"}/>
          </XImageWrapperComponent>
          <span>
            Something interesting I tried is looking up "home" and placing "man" on the left and
            "woman" on the right. I also looked up "work" and placed "man" on the left and
            "woman" on the right. See results below.
          </span>
          <XImageWrapperComponent>
            <XImageView
              src={Word2VecAllHome}
              caption={
                "Using Word2Vec 10K with home, placing man on the left and woman on the right"
              }/>
          </XImageWrapperComponent>
          <XImageWrapperComponent>
            <XImageView
              src={Word2VecAllWork}
              caption={
                "Using Word2Vec All with work, placing man on the left and woman on the right"
              }/>
          </XImageWrapperComponent>
          <span>
            I think this reflects a little bit of the society. Clearly, home is closer to woman and
            work is closer to man.
          </span>
          <h1>1.4 Finding Word Analogies With Vector Algebra</h1>
          <span>
            I didn't find anything interesting in this section. However, the examples we heard in
            class were really interesting and cool. I find the visualization cooler.
          </span>
          <h1>1.5 Exploring Fonts with the Embedding Projector</h1>
          <h2>1.5.1</h2>
          <span>
            I recorded font id 1131, which is not bold, is italic, and is sans-serif. There are a
            couple of italics fonts next to it. This is close to fonts with ids 1132 and 1133.
          </span>
          <h2>1.5.2</h2>
          <span>
            The fonts that are just the outline of the character group together fairly visibly.
            Some ids are: 404, 1940, 5240. This was after about 500 iterations.
          </span>
          <h2>1.5.3</h2>
          <span>
            I like the font with id 1973. The 10 closest neighbors are 1972 (this one is pretty
            much the same font), 6669, 7191, 2201, 3597, 2216 (also looks very similar), 6867,
            5218, 7098, and 5358.
            <br/>
            I chose the second font 3136. The 10 closest ids are 128, 3230, 3229, 1391, 3697, 8041,
            3083, 143, 114, 3054. This font has like an object and the letter inside it. Some fonts
            here are not similar (like they are not letters inside an object), but a good number
            are.
            <br/>
            Lastly, I got 3868. The 10 closest are 3870, 3869, 5310, 571, 6573, 3763, 394, 7073,
            7075, 395. 3870 and 3869 are pretty much the same font!
          </span>
          <h1>2.3 Creating New Fonts</h1>
          {/* section */}
          <h2>2.3.1</h2>
          <span><b>
            Edit VectorChooser.vue to add a new button under the "Apply vector math" button.
            The new button should show the font Id of the "nearest neighbor" font that is "most
            similar to" the current font, out of all the fonts in the 50K training set.
          </b></span>
          <br/>
          <span>
            I edited the font to get the vectors to get the following font:
          </span>
          <XImageWrapperComponent>
            <XImageView
              src={OriginalFontVector}
              height={"30rem"}
              caption={"original font, with vector [0.254, -0.377, 0.246, -0.192, -0.093, -0.018, 0.087, -0.4, -0.039, 0.071, 0.111, -0.33, -0.007, 0.022, -0.032, 0.141, 0.126, -0.015, -0.075, 0.12, 0.068, 0.021, 0.104, -0.065, -0.085, -0.018, -0.038, -0.059, -0.051, -0.056, 0.154, -0.044, -0.116, 0.038, -0.144, -0.103, -0.032, 0.059, -0.076, -0.03]"}/>
          </XImageWrapperComponent>
          <span>
            Then, the most similar font found was the following:
          </span>
          <XImageWrapperComponent>
            <XImageView
              src={MostSimilarFont}
              caption={"Most similar font, with font id 6964"}/>
          </XImageWrapperComponent>
          I don't think these two look similar, and I think it may be due to two things:
          either my method for computing similarity is wrong or the font I created is just
          not that similar to most fonts in the database.
          {/* section */}
          <h2>2.3.2</h2>
          <span><b>
            What is the “average” of a set of fonts? (Hint: What does that mean in terms of the
            40 dimensions)? Write some code to Find the nearest font neighbor to the average font.
          </b></span>
          <br/>
          <span>
            I think the average of a set of fonts is simply taking the average of each dimension
            in the 40 dimensional vector that represents that font.
          </span>
          {/* section */}
          <h2>2.3.3</h2>
          <h3>2.3.3.a</h3>
          <span><b>
            What does adding this vector to a font do? Does it perform bolding well at thickening
            the original font? Are there other characteristics that seem to also carry over? Try
            this with another characteristic. It may be helpful to use the characteristics you
            gathered previously.
          </b></span>
          <br/>
          <span>
            This kind of just bolds up the current font that we have. I feel like it bolds it also
            inside such that the characters start to get lost. Like, it's hard to see what the
            characters are after bolding.
          </span>
          <h3>2.3.3.b</h3>
          <span>
            I got the following italics vector: <XInlineCodeContainer>
            [-0.0071, -0.0023, -0.0461, -0.256, -0.1843, -0.3526, 0.1051, 0.3138, 0.04, 0.0155, 0.1091, -0.2477, -0.0299, 0.0208, -0.0212, 0.1969, 0.0072, -0.0154, -0.0297, 0.0529, 0.2562, -0.0605, 0.0077, -0.0674, -0.1017, 0.004, -0.0564, -0.0748, -0.0032, 0.0076, 0.0684, -0.0129, -0.124, 0.1052, -0.0882, -0.0121, 0.0314, 0.0708, -0.0798, 0.0638]
          </XInlineCodeContainer>
            <br/>
            This makes the font italic.
          </span>
          <h3>2.3.3.c</h3>
          <span><b>

          </b></span>
          <br/>
          <span></span>
          <h3>2.3.3.d</h3>
          <span><b>

          </b></span>
          <br/>
          <span></span>
          <h3>2.3.3.e</h3>
          <span><b>

          </b></span>
          <br/>
          <span></span>
        </XBoxView>
      </div>
    </div>
  );
}