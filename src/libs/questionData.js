//ONLY once you get your functionality sorted, change the sample text below to make your own questions and answers.

export const questionData = [
  {
    questionText: "In the workplace I am... ",
    choices: [
      "Hardworking and organised",
      "Friendly and flexible",
      "Kind and quiet",
      "Creative and full of ideas",
    ],
  },
  {
    questionText: "I tend to... ",
    choices: [
      "Mostly look for affirmation from others",
      "Mostly do what I think is best",
      "Always do what I think is best",
      "Always look for affirmation from others",
    ],
  },
  {
    questionText: "I am typically led by...",
    choices: [
      "Mostly my head",
      "Mostly my heart",
      "My head",
      "my heart",
    ],
  },
  {
    questionText: "In romantic relationships we value...",
    choices: [
      "Trust and security",
      "Keeping the romance alive",
      "Keeping things fun and exciting",
      "Challenging each other's ideas",
    ],
  },
  {
    questionText: "I would enjoy a career in...",
    choices: [
      "accounting, education or admin",
      "Social work, journalism or customer service",
      "Acting, photography or teaching",
      "Medicine, sales or research",
    ],
  },
].map(({ questionText, choices }, questionId) => {
  // Safe to use array index as ID here (and for React key later) as it's stable and unique.
  // Even if the array gets shuffled, each question object will still contain the ID it started off with.
  return {
    questionId,
    questionText,
    choices: choices.map((choiceText, i) => {
      const choiceId = "abcd"[i];
      return {
        choiceText,
        choiceId,
      };
    }),
  };
});
