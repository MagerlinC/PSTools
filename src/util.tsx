export type ToolType = {
  id: number;
  name: string;
  content: { title: string; body: string }[];
};

export const TOOL_LIST: ToolType[] = [
  {
    id: 1,
    name: "What’s it to me?",
    content: [
      {
        title: "Use When",
        body: "Your team wants to practice identifying psychological safety in their daily work.",
      },
      {
        title: "Prerequisites",
        body: "The team members should have been introduced to psychological safety, and have an understanding of what the term means.",
      },
      {
        title: "Tool Description",
        body: `As an early step of working with psychological safety, it can be helpful for team members to identify how it manifests in their daily work. Psychological safety is subtle, but experienced to varying degrees every single day. Taking time to write these experiences down can help solidify your team members’ understanding of the concrete implications of psychological safety in the team.
At the end of the work day, each team member takes a post-it note, and notes down an experience related to psychological safety they had during the day. This can either be a moment in which they felt safe to contribute, ask questions, challenge the status quo, moments wherein they held back, or were afraid to seem intrusive, incompetent, ignorant or negative. Give your team members an example before starting.
Team members place these post-it notes somewhere visible to them on their desk, such as along the bottom of a monitor. The post-its can be replaced as new ones come in, or be completely scrapped every week.
`,
      },
      {
        title: "Purpose",
        body: `“What's it to me?” helps your team members develop their own understanding of the role of psychological safety in the team. This understanding can vastly help fuel further discussions about the subject, and can help identify key elements of your team’s practice wherein working with psychological safety might matter the most.`,
      },
      {
        title: "Outocome",
        body: `A foundation of what psychological safety means to the team members and their work within the team, which can be used for future work with psychological safety.
The post-its can be used as an outcome for sharing, if your team members wish to. Remember to let the team know ahead of time whether the post-its will be shared or not.`,
      },
    ],
  },
  {
    id: 2,
    name: "Checking In",
    content: [
      { title: "Use When", body: "" },
      { title: "Prerequisites", body: "" },
      { title: "Tool Description", body: "" },
      { title: "Purpose", body: "" },
      { title: "Outcome", body: "" },
    ],
  },
];
