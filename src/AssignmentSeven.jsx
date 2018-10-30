import React from "react";
import main from "./main";
import AssignmentTitleContainer from "./components/AssignmentTitle";
import XBoxView from "./components/Xbox";
import XContactInformationBoxContainer from "./components/XContactInformationBox";

window.addEventListener("load", () => main(<AssignmentSevenView/>));

function AssignmentSevenView() {
  return (
    <div className={"assignment-six"}>
      <div className={"assignment-box"}>
        <AssignmentTitleContainer title={"6.S198 Assignment 7"}/>
        <XBoxView className={"pad-left-100"}>
          <XContactInformationBoxContainer/>
        </XBoxView>
        <XBoxView className={"pad-left-100"}>
          {/* ---------------------------------------------------------------- */}
          <h1>Problem 1: Understanding LSTMs</h1>
          {/* question */}
          <span>
            <b>
              Question:  LSTMs consist of chained, repeating modules. At a high level, what are the
              two pieces of information that is passed between modules?
            </b>
          </span>
          <br/>
          <span>
            The cell state and the new input. These two are used to do the rest of the operations
            that the four sets of network do. The cell state travels and changes throughout the
            whole chain while the new inputs are new for every module.
          </span>
          <br/>
          <br/>
          {/* question */}
          <span>
            <b>
              Question: "LSTM" stands for "Long Short Term Memory". The name is a reference to a
              problem with RNNs that LSTMs are designed to solve. What is this problem? At a high
              level, how do LSTMs attempt to address this problem (what extra information do they
              add)?
            </b>
          </span>
          <br/>
          <span>
            The problem LSTMs are trying to solve is that of predicting the "next" thing but taking
            into account to remember all the things we've seen before. That is, we want to remember,
            through our <i>memory</i>, what we've seen. However, it's a short term memory because
            we only care to remember what we've seen in this specific sequence that we're working
            on.
            <br/>
            How LSTMs attempt to solve it is to add a memory cell that keeps keeping track of the
            words we've seen (in this sequence). They also add a forget cell so that we know what
            we shouldn't keep track of.
          </span>
          <br/>
          <br/>
          {/* question */}
          <span>
            <b>
              Question: The blog post describes two views of RNN/LSTM architectures. In one of
              these views, we think of the RNN as being "unrolled" into a chain of repeating
              modules. What values (represented with tensors) are shared between these modules,
              and what values are different? (The answer is slightly confusing when thinking about
              training, so just think about using the model for prediction.)
            </b>
          </span>
          <br/>
          <span>
            The weights in the network are shared. The cell state is partially changed between
            each module (like the change is somewhat small but still there and could be dramatic).
            The thing that is always new is the input.
          </span>
          <br/>
          <br/>
          {/* question */}
          <span>
            <b>
              Question: The "forget gate layer" has four steps: (A) Concatenate the previous output
              and current input, (B) Run a normal fully connected layer (where we multiply these
              values by a weight matrix), (C) Take the output of the fully connected layer, and run
              it through a sigmoid non-linearity, (D) Set new_state = the output of the sigmoid
              non-linearity * current_state.
              <br/>
              Remember that the purpose of the "forget gate layer" is to allow the network to
              "forget" some of the current state. Why do you think a sigmoid non-linearity is
              used here instead of a ReLU nonlinearity (as we were using in most of our previous
              models)?
            </b>
          </span>
          <br/>
          <span>
            Sigmoid ranges from -1 to 1 while ReLU ranges from 0 to infinity. We want to keep the
            values bounded in the range [-1.0, 1.0], and we don't want to lose information of the
            low values. So, it wouldn't make sense to use ReLU.
          </span>
          <br/>
          <br/>
          {/* ---------------------------------------------------------------- */}
          <h1></h1>
          {/* question */}
          <span>
            <b>

            </b>
          </span>
          <br/>
          <span>

          </span>
          <br/>
          {/* ---------------------------------------------------------------- */}
          <h1></h1>
          {/* ---------------------------------------------------------------- */}
          <h1></h1>
        </XBoxView>
      </div>
    </div>
  );
}