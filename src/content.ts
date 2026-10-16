export const site = {
  name: "imp.so",
  url: "https://imp.so/",
  title: "imp.so — ephemeral agents on durable workflows",
  tagline: "Ephemeral agents on durable workflows",
  description:
    "imp is an ephemeral agent framework for the software lifecycle. Each task summons a short-lived agent, an imp, inside a durable workflow.",
};

export const hero = {
  title: "Put our imps to work.",
  accent: "Ephemeral agents. Durable workflows.",
  lede: "imp is an ephemeral agent framework for the software lifecycle. Each task summons a short-lived agent, an imp, inside a durable workflow. The imp does one job and exits. The workflow remembers everything, survives crashes and retries, and hands off to the next imp.",
};

export const lifecycleTitle = "Life of an imp";
export const sdlcTitle = "Across the SDLC";

export const durable = {
  title: "The imp is temporary. The work is not.",
  body: "Write the lifecycle as ordinary code. Each step is checkpointed, so a failed test, a crashed worker or a human review that takes three days picks up exactly where it stopped. Imps never hold state between steps, so there is nothing to drift and nothing to clean up.",
};

export const access = {
  title: "Summon your first imp",
  body: "We are onboarding teams in small batches. Drop us a line and we will send the SDK and a workflow to start from.",
};

export const phases = [
  {
    num: "01",
    name: "Summon",
    body: "A workflow step spawns an imp with only the context and tools that step needs.",
    keeps: "Persists: inputs",
  },
  {
    num: "02",
    name: "Work",
    body: "The imp plans, edits and runs tests. Every tool call is recorded as a workflow event.",
    keeps: "Persists: event log",
  },
  {
    num: "03",
    name: "Checkpoint",
    body: "State is committed after each step. A crash or redeploy resumes from the last checkpoint.",
    keeps: "Persists: checkpoint",
  },
  {
    num: "04",
    name: "Dismiss",
    body: "The imp exits. No idle process, no drifting memory. The workflow keeps the history.",
    keeps: "Persists: outputs",
  },
];

export const stages = [
  {
    name: "Plan",
    body: "Triage issues, draft specs and break work into steps a single imp can finish.",
  },
  { name: "Build", body: "Write code on a branch, run the suite and iterate until it is green." },
  {
    name: "Review",
    body: "Read diffs against the spec and leave line-level comments, or wait on a human.",
  },
  {
    name: "Ship",
    body: "Cut the release, watch the rollout and open a rollback when signals turn.",
  },
];

export const codeFile = "fix-issue.ts";

export const codeText = `import { workflow, imp } from "@impso/sdk";

export const fixIssue = workflow("fix-issue",
  async (ctx, issue) => {
    const plan  = await imp("planner").run(ctx, { issue });
    const patch = await imp("coder", { tools: ["git", "test"] })
      .run(ctx, { plan });

    await ctx.waitFor("review.approved");

    return imp("shipper").run(ctx, { patch });
  });`;

export const accessEmail = "access@imp.so";
export const accessMailto = `mailto:${accessEmail}?subject=${encodeURIComponent(
  "imp.so early access",
)}&body=${encodeURIComponent("Team/company:\nWhat we want imps to do:\n")}`;
export const contactEmail = "hello@imp.so";
