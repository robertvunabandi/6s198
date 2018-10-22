import gym
import numpy as np

env = gym.make("FrozenLake-v0")

### Q learning code starts here
Qmain = np.zeros([env.observation_space.n, env.action_space.n])

### set learning parameters, you will play around with these
# how fast the Q-learning will learn at
learning_rate = 0.8
# how much future rewards matter
discount_factor = 0.95
num_episodes = 10000


def run_algorithm(Q, environment, ep, learning_steps = 100):
    state = environment.reset()
    total_rewards = 0

    for _ in range(learning_steps):
        # pick the action greedily from the Q table
        action = np.argmax(Q[state, :] + np.random.randn(1, environment.action_space.n) * (1./(ep + 1)))
        new_state, reward, is_game_finished, _ = environment.step(action)
        # Update Q-Table with new knowledge
        q_before = Q[state, action]
        gain = reward + discount_factor * np.max(Q[new_state,:]) - q_before
        Q[state, action] = q_before + (learning_rate * gain)

        # update the rewards and state
        total_rewards += reward
        state = new_state
        if is_game_finished: 
            break
    return total_rewards

# list to contain total rewards and steps per episode
rewards_list = []
for i in range(num_episodes):
    total_rewards = run_algorithm(Qmain, env, i)
    rewards_list.append(total_rewards)

batches = []
for i in range(0, num_episodes, 20):
    rs = rewards_list[i:i+20]
    print(rs, any([el == 1 for el in rs]))
    batches.append(len([el for el in rs if el == 1]))
# print(rewards_list)
print(Qmain)
print(batches)
