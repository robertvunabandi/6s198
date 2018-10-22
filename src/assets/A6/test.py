import gym
import numpy as np

env = gym.make("FrozenLake-v0")     # gets the Frozen Lake environment
obs = env.reset()                         # make the fresh environment

STEP_COUNT = 0

for _ in range(STEP_COUNT):
    i = input("press enter to continue, or type Q to quit:\n")
    if i == "Q":
        print("quitting")
        break
    env.render()                    # render the environment for one time step
    result = env.step(env.action_space.sample()) # take a random action
    print(result)
    print(obs)



