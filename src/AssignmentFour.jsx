import React from "react";
import main from "./main";
import AssignmentTitleContainer from "./components/AssignmentTitle";
import XBoxView from "./components/Xbox";
import XContactInformationBoxContainer from "./components/XContactInformationBox";
import XHorizontalSplitContainer from "./components/XHorizontalSplit";
import XImageWrapperComponent from "./components/XImageWrapper";
import XImageView from "./components/XImageView";
import XInlineCodeContainer from "./components/XInlineCode";
import XCodeBlockComponent, { XCodeLineView } from "./components/XCodeBlock";

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
import ConvertFontOriginal_2_3_3_b from "./assets/4-2.3.3.b-original.png";
import ConvertFontBold_2_3_3_b from "./assets/4-2.3.3.b-bold.png";
import ConvertFontItalics_2_3_3_b from "./assets/4-2.3.3.b-italics.png";
import ConvertFontBold_2_3_3_c from "./assets/4-2.3.3.c-bold.png";
import ConvertFontItalics_2_3_3_c from "./assets/4-2.3.3.c-italics.png";
import VectorChooserSrc from "./assets/4-2.3.3.f-VectorChooser.vue.txt";
import AlphabetSrc from "./assets/4-2.3.3.f-Alphabet.vue.txt";
import FontModelSrc from "./assets/4-2.3.3.f-FontModel.js.txt";

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
            Using fonts with ids
            <XInlineCodeContainer>52373</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>39509</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>39880</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>741</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>41602</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>5230</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>18913</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>40041</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>35823</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>38158</XInlineCodeContainer>. I got the following bolding vector:
            <XCodeBlockComponent>
              <XCodeLineView indent={0}>[</XCodeLineView>
              <XCodeLineView indent={1}>
                0.00364, -0.00794, -0.0061, -0.00136, -0.01055, 0.00469, -0.00168, -0.00231,
              </XCodeLineView>
              <XCodeLineView indent={1}>
                -0.00947, 0.00636, 0.00158, -0.01646, -0.00466, 0.00335, -0.00325, 0.01391,
              </XCodeLineView>
              <XCodeLineView indent={1}>
                0.01958, 0.01067, 0.00242, 0.01077, 0.00709, 0.02155, 0.00251, -0.01843,
              </XCodeLineView>
              <XCodeLineView indent={1}>
                -0.02028, 0.00173, 0.00663, -0.00034, -0.001, 0.00428, -0.01205, 0.0098
              </XCodeLineView>
              <XCodeLineView indent={1}>
                -0.00479, -0.00358, -0.01807, -0.01458, -0.00882, 0.01139, 0.01664, -0.00818,
              </XCodeLineView>
              <XCodeLineView indent={0}>]</XCodeLineView>
            </XCodeBlockComponent>

            Using the fonts with ids
            <XInlineCodeContainer>30467</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>3504</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>18913</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>9817</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>50226</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>44711</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>15351</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>6860</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>45297</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>24008</XInlineCodeContainer>. I got the following italics vector:
            <XCodeBlockComponent>
              <XCodeLineView indent={0}>[</XCodeLineView>
              <XCodeLineView indent={1}>
                -0.01142, 0.0143, 0.00133, -0.01204, -0.00344, -0.0069, 0.00214, 0.01294,
              </XCodeLineView>
              <XCodeLineView indent={1}>
                -0.00099, -0.00557, 0.01029, -0.02676, -0.01154, 0.00069, -0.00049, 0.00388,
              </XCodeLineView>
              <XCodeLineView indent={1}>
                -0.00008, -0.01421, 0.00507, 0.00148, 0.01521, -0.02426, 0.00469, 0.00368,
              </XCodeLineView>
              <XCodeLineView indent={1}>
                -0.00921, 0.00512, 0.00001, 0.00902, -0.00083, -0.00075, 0.00497, 0.01202,
              </XCodeLineView>
              <XCodeLineView indent={1}>
                0.00647, 0.00519, 0.00703, -0.0148, -0.00439, -0.00163, -0.00539, -0.01326,
              </XCodeLineView>
              <XCodeLineView indent={0}>]</XCodeLineView>
            </XCodeBlockComponent>

            The results were completely tragic. It worked pretty badly. The text just went
            from normal text to some unreadable font. Well, it worked okay for bold on bold
            texts that weren't initially bold (in particular, that were very thin). However,
            if the text was already kind of bold, the result are just tragic. See the results
            below.



            <XHorizontalSplitContainer>
              <div>
                <XImageWrapperComponent>
                  <XImageView
                    src={ConvertFontOriginal_2_3_3_b}
                    caption={"Original font"}
                    height={"30rem"}/>
                </XImageWrapperComponent>
              </div>
              <div>
                <XImageWrapperComponent>
                  <XImageView
                    src={ConvertFontBold_2_3_3_b}
                    caption={"Font after applying bold vector above"}
                    height={"30rem"}/>
                </XImageWrapperComponent>
              </div>
              <div>
                <XImageWrapperComponent>
                  <XImageView
                    src={ConvertFontItalics_2_3_3_b}
                    caption={"Font after applying italics vector above"}
                    height={"30rem"}/>
                </XImageWrapperComponent>
              </div>
            </XHorizontalSplitContainer>
          </span>
          <h3>2.3.3.c</h3>
          <span><b>
            Find 10 fonts the exhibit for a specific characteristic and 10 fonts for the opposite of
            that characteristic (i.e. bold vs. corresponding non-bold). Subtract the vectors for
            each pair and take the average difference. How does this work as a vector for the
            characteristic (e.g., as a "bolding vector")?   Does this work better or worse than the
            method above to obtain your desired characteristic?
          </b></span>
          <br/>
          <span>
            For this, I found the following regular fonts ids:
            <XInlineCodeContainer>44559</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>822</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>3406</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>19445</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>3596</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>52551</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>40611</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>5638</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>8296</XInlineCodeContainer>,{" "}
            <XInlineCodeContainer>38643</XInlineCodeContainer>. This let to the following vector:
            <XCodeBlockComponent>
              <XCodeLineView indent={0}>[</XCodeLineView>
              <XCodeLineView indent={1}>
                0.0005, -0.00487, 0.01401, 0.00456, -0.01574, 0.00148, 0.00118, -0.00163,
              </XCodeLineView>
              <XCodeLineView indent={1}>
                0.01217, -0.00334, -0.00334, -0.00163, 0.00255, 0.00439, -0.00529, -0.00713,
              </XCodeLineView>
              <XCodeLineView indent={1}>
                -0.00427, -0.00927, 0.01287, -0.00596, -0.0104, -0.00894, -0.0053, 0.00017,
              </XCodeLineView>
              <XCodeLineView indent={1}>
                0.01309, -0.00308, -0.00054, 0.00412, 0.00095, 0.00541, -0.00007, 0.00138,
              </XCodeLineView>
              <XCodeLineView indent={1}>
                -0.00366, -0.00091, -0.00292, 0.00123, 0.00668, -0.00357, -0.00345, 0.00285,
              </XCodeLineView>
              <XCodeLineView indent={0}>]</XCodeLineView>
            </XCodeBlockComponent>

            Using the regular fonts, I creating a bolding from taking the average of bold from part
            b minus the regular vector above. I did the same for italics. I won't include the
            numbers because that can be easily recomputed. However, here are the results from the
            same font as above:
            <XHorizontalSplitContainer>
              <div>
                <XImageWrapperComponent>
                  <XImageView
                    src={ConvertFontOriginal_2_3_3_b}
                    caption={"Original font"}
                    height={"30rem"}/>
                </XImageWrapperComponent>
              </div>
              <div>
                <XImageWrapperComponent>
                  <XImageView
                    src={ConvertFontBold_2_3_3_c}
                    caption={
                      "Font after applying bold vector from taking avg. bold vector minus regular"
                    }
                    height={"30rem"}/>
                </XImageWrapperComponent>
              </div>
              <div>
                <XImageWrapperComponent>
                  <XImageView
                    src={ConvertFontItalics_2_3_3_c}
                    caption={
                      "Font after applying italics vector from taking avg. italics " +
                      "vector minus regular"
                    }
                    height={"30rem"}/>
                </XImageWrapperComponent>
              </div>
            </XHorizontalSplitContainer>
            This actually got worse. I had high hopes. The italics one got slightly better, but
            it's still tragic. I think it might be because I didn't make good choices of fonts
            when taking the average.
          </span>
          <h3>2.3.3.d</h3>
          <span><b>
            Can you figure out how to create a vector that makes uppercase fonts lowercase?
          </b></span>
          <br/>
          <span>
            Yes, this can be done by taking only fonts that are uppercase and finding their
            average. Then, using that as the vector to add.
          </span>
          <h3>2.3.3.e</h3>
          <span><b>
            Can you create a vector based on your personal font tastes (i.e. a personal-likeable
            vector)?
          </b></span>
          <br/>
          <span>
            This should also be possible. This is a cool problem because one can come up with fonts.
            However, I still feel like it's a little too tedious to have to go through a bunch of
            fonts, do the math, then test it. What would be great is if that process was completely
            automated.
          </span>
          <h3>2.3.3.f My Code</h3>
          <span>
            Here are links to the codes I edited:
            <br/>
            <a href={VectorChooserSrc} target={"blank"}>VectorChooser.Vue</a>
            <br/>
            <a href={AlphabetSrc} target={"blank"}>Alphabet.Vue</a>
            <br/>
            <a href={FontModelSrc} target={"blank"}>FontModel.js</a>
            <br/>
          </span>
          <div className={"empty-space-100"}>
          </div>
        </XBoxView>
      </div>
    </div>
  );
}