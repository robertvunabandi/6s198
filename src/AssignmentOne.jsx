import React from "react";
import AssignmentTitleContainer from "./components/AssignmentTitle.jsx";
import XImageWrapperComponent from "./components/XImageWrapper.jsx";
import XImageView from "./components/XImageView.jsx";
import XBoxView from "./components/XBox.jsx";
import XCodeBlockComponent from "./components/XCodeBlock.jsx";
import { XCodeLineView } from "./components/XCodeBlock.jsx";
import main from "./main.jsx";
import Assignment14Src from "./assets/assignment-1-4.png";
import Assignment15WeighingSrc from "./assets/assignment-1-5-weighing.png";
import Assignment16_2Src from "./assets/assignment-1-6.2.png";
import WebCamClassifierJSFileSrc from "./assets/assignment-1-WebcamClassifier.js.txt";

window.addEventListener("load", () => main(<AssignmentOneView/>));

function AssignmentOneView() {
  return (
    <div className={"assignment-one"}>
      <div className={"assignment-box"}>
        <AssignmentTitleContainer title={"6.S198 Assignment 1"}/>
        <XBoxView className={"pad-left-100"}>
          {/* ------------------------------------------------------------------ */}
          <h1>Part 2: Train Some Classes</h1>
          <h2>2.1: My Face and My Partners</h2>
          <span>The program is able to recognize the faces at 99+ percentage. However, it mixes
up other people with either one of our faces (either partner or me).</span>
          <h2>2.2: Inanimate Objects</h2>
          <span>I used my key, mit id, and phone. This worked decently well.</span>
          <h2>2.3: Same Image Set</h2>
          <span>
            I used my face, using a sad face vs. laughing face. This also worked fine (made
            correct predictions).
          </span>
          <h2>2.4: Two People, Two Expressions</h2>
          <span>
            My partner and I smiled and trained on that on the green class. Then we both made
            and angry face and put that on the red one. Then, we trained the background on the red
            just so that it doesn't confuse the background. It somehow confused my face with the
            first class and confused my partners face with the second class instead of getting the
            expressions.
          </span>
          <h2>2.5: Face Close And Far</h2>
          <span>
            It confuses close up with the close up class, and far with the far class (instead
            of matching the people). In the third class, I went close up (my partner went close
            up in the first class). then, it would get me as close up, but confuse my partner with
            me as close up if he was sort of close but not too close.
          </span>
          <h2>2.6: Russian Tank Problem (See Part 4)</h2>
          {/* ------------------------------------------------------------------ */}
          <h1>Part 4: Display Class Frequencies At Prediction</h1>
          <h2>4.2: Inanimate Objects</h2>
          <span>
            I ordered the class in the order Key, then MIT ID, then Rubik's cube.
            Key, MIT ID, Rubik's cube with about 150 examples for each in that order under same
            lighting conditions. When I held up the key, I got [19,1,0] for 20 closest
            for MIT ID. I got [0,20,0] for 20 closest for Rubik's cube. I got [0,0,20] for 20
            closest holding it far or too close led to different numbers sometimes. So, the
            frequencies of the classes are what is expected.
          </span>
          <h2>4.3: Same Image Set</h2>
          <span>
            I used normal, sad, and smiling (mouth open). Results were pretty accurate except
            for sad, which got me [6, 14, 0] (close to sad but confusing it with normal face).
            See Image Below.
          </span>
          <XImageWrapperComponent>
            <XImageView src={Assignment14Src}/>
          </XImageWrapperComponent>
          <h2>4.6: Russian Tank Problem </h2>
          <span>
            I used magazines vs books, but books are done in low sunlight and magazines in high
            sunlight It got confused when I held up a book in high sunlight and started predicting
            something like [12,8,0] (still closer to books).
          </span>
          {/* ------------------------------------------------------------------ */}
          <h1>Part 5: Editing How Class Frequencies Are Weighed At Prediction Time</h1>
          <h2>5.1: My Method</h2>
          <span>
            I modified the class so that images that appear in the top 5 have weights of 4 (1 + 3)
            and images that appear in the top 6-10 matches have weights of 3 (1 + 2). Images that
            appear in the top 11-K have only weights of 1. So now, the better matches have more
            weights.
          </span>
          <h2>5.2: Some Results</h2>
          <span>
            I trained 3 expressions from my own face:
            <ul>
              <li>wide smiling  (not showing teeth)</li>
              <li>wide laughing (showing teeth)</li>
              <li>one weird face that looks scared / scary (showing tongue but no teeth)</li>
            </ul>
            My weighing actually ended doing better. I did one example smiling that had 9 matches
            from the smiling class and 11 matches from the laughing class. The previous model would
            have predicted the laughing class. However, my weighing model saw that most top matches
            actually came from the smiling one, so it bumped the it up to about 51% for smiling and
            about 49% for wide laughing (still 0 for weird face). See photo below.
          </span>
          <XImageWrapperComponent>
            <XImageView src={Assignment15WeighingSrc}/>
          </XImageWrapperComponent>
          <h2>5.3: Question</h2>
          <span>
            Question:{" "}
            <i>
              What are some image classification situations where your alternative ways of
              confidences might come in useful?
            </i>
            <br/>
            <br/>
            I think cases like this makes it better. In addition, matching people's faces will also
            work better or matching categories. It's important to give more weights to the better
            matches. I was actually planning to do a gradual scaling (top gets more weight, next
            gets less, etc) but I was not sure whether the indices outputted come in order.
          </span>
          {/* ------------------------------------------------------------------ */}
          <h1>Part 6: Limiting the Number of Training Examples per Class</h1>
          <h2>My Method</h2>
          <span>
            I did the smiling, laughing, and weird face again (see 5.2) in the same order. I
            limited the images to 20, 50, and 150 respectively. Then, I did a slight smile (which
            should ideally match class 1). This would have matched class 1 if the no balancing
            happened (that is, with the weighting property), but instead it matched class 2
            because there just was more matches there. See image below.
          </span>
          <XImageWrapperComponent>
            <XImageView src={Assignment16_2Src}/>
          </XImageWrapperComponent>
          <br/>
          <span>
            In my code, I created a constant for the max images per class as follow:
            <XCodeBlockComponent language={"js"}>
              <XCodeLineView>const MAX_IMAGE_FOR_CLASS_INDEX = {"{"}</XCodeLineView>
              <XCodeLineView indent={1}>0: 20,</XCodeLineView>
              <XCodeLineView indent={1}>1: 50,</XCodeLineView>
              <XCodeLineView indent={1}>2: 150,</XCodeLineView>
              <XCodeLineView>{"}"};</XCodeLineView>
            </XCodeBlockComponent>
            Then, I added the following bit of code in the animate function:
            <XCodeBlockComponent>
              <XCodeLineView indent={1}>...</XCodeLineView>
              <XCodeLineView indent={1}>animate() {"{"}</XCodeLineView>
              <XCodeLineView indent={2}>if (</XCodeLineView>
              <XCodeLineView indent={3}>this.current.imagesCount >=</XCodeLineView>
              <XCodeLineView indent={3}>
                MAX_IMAGE_FOR_CLASS_INDEX[this.currentClass.index] &&
              </XCodeLineView>
              <XCodeLineView indent={3}>
                MAX_IMAGE_FOR_CLASS_INDEX[this.currentClass.index] !== -1
              </XCodeLineView>
              <XCodeLineView indent={2}>) {"{"}</XCodeLineView>
              <XCodeLineView indent={3}>
                window.alert(`Max number of images for this class (${"{"}MAX_IMAGE_FOR_CLASS_INDEX[this.currentClass.index]{"}"}) reached! No more images will be accepted.`);
              </XCodeLineView>
              <XCodeLineView indent={3}>this.isDown = false;</XCodeLineView>
              <XCodeLineView indent={3}>this.current.down = false;</XCodeLineView>
              <XCodeLineView indent={3}>this.current = null;</XCodeLineView>
              <XCodeLineView indent={3}>this.currentContext = null;</XCodeLineView>
              <XCodeLineView indent={3}>this.currentClass = null;</XCodeLineView>
              <XCodeLineView indent={3}>
                this.timer = requestAnimationFrame(this.animate.bind(this));
              </XCodeLineView>
              <XCodeLineView indent={3}>return;</XCodeLineView>
              <XCodeLineView indent={2}>{"}"}</XCodeLineView>
              <XCodeLineView indent={2}>...</XCodeLineView>
            </XCodeBlockComponent>

            The code for this can be found{" "}
            <a href={WebCamClassifierJSFileSrc} target={"blank"}>
              here
            </a>
            .
          </span>
          {/* ------------------------------------------------------------------ */}
          <h1>Part 7: Further Explorations</h1>
          <span>
            I chose to adjust K to see how it affects the predictions. I changed K to be 20 vs 50.
            My example now is smile vs laugh. I trained 150 images on smiling and 150 on laughing.
            Then, I trained the last class on the background with also 150 images.
            <br/>
            <br/>
            with K = 20:
            <br/>
            It didn't do that well on recognizing the laughing face. It did better on recognizing
            the smiling face. However, it also defaulted to the smiling face whenever any face was
            on the screen.
            <br/>
            <br/>
            with K = 50:
            <br/>
            It still was not doing as good on getting the laughing face. However, the machine
            seemed less "certain" about its answers. There was no more 90+% predictions, which
            sort of makes sense because there is a larger pool of similar images to get from.
            <br/>
            <br/>
            Question:{" "}
            <i>
              Are there specific expressions/images that are intrinsically "more difficult"
              to train (require more training data) compared to others? What are the types
              of the expressions/images and why do you think this they are more difficult?
            </i>
            <br/>
            <br/>
            I think yes. I think facial recognition is pretty hard in the very specific context of
            the Squeezenet algorithm. The algorithm itself reduces what could be a set of 1000
            features. So, I think it'd be very easy to take a large population of people with the
            same kind of features (race, color, hairstyle, etc). Then, Squeezenet is bound to do
            bad on facial recognition.
            <br/>
            I think also object recognition poses a problem. I don't know how Squeezenet
            recognizes shapes and colors. But I feel like it gives a lot more weight on color
            (see 2). So, it can mix up two different things that even though may have different
            shapes but because of the color, it can mix it up. The whole reducing to 1000
            features means that now we need a lot more training examples. Also, I don't know
            how it picks which images are close to another. I feel like that is another area
            of investigation to make the algorithm better.
          </span>
          <div className={"empty-space-100"}></div>
        </XBoxView>
      </div>
    </div>
  );
}