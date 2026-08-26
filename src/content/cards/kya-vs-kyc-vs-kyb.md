---
title: KYA, KYC, and KYB
family: kyc
sources:
  - https://www.anchorage.com/research/who-banks-the-agents
updated: 2026-08-26
slug: kya-vs-kyc-vs-kyb
order: 4
illustration: ill-identity.webp
section: Feature
dek: "Know Your Agent sits beside customer and business due diligence. It does not replace them."
pullQuote: "Collapsing KYA into KYC is how liability and auth evidence go fuzzy."
caption: "Three stamps. Three questions. Do not ink them as one."
---

Know Your Customer is still about a person. Know Your Business is still about a legal entity. Know Your Agent is the extra layer: establish the agent's identity, bind it to a responsible human or organisation, confirm its permitted actions, and monitor it. The World Economic Forum framed those four capabilities in January 2026. The IMF has since called for regulators to shift attention toward agent identity. None of that retires KYC or KYB.

Anchorage's *Who Banks the Agents?* (3 August 2026) is the public source this issue uses for the layering. Nathan McCauley, speaking at Consensus 2026: "KYA, know your agent… we're not only underwriting the human that is the owner of the bot or agent, but also the agent itself." The paper's point is underwriting two principals, not renaming one. A capped wallet answers "how much can we lose?" It does not answer "who is this, and who stands behind it?"

Machine identities already outnumber human ones by a wide margin in industry surveys the paper cites. Most organisations still lack identity controls for software that acts. That is why collapsing the three checks into one screen is an implementor failure mode. If the same evidence pack is used to satisfy customer due diligence, entity due diligence, and agent permissioning, you cannot later say which layer failed. Liability statutes now assume a responsible principal exists. Your logs have to name that principal separately from the agent that initiated.

For an open-finance stack the practical split is: KYC/KYB at onboarding of the PSU or the firm; KYA at issuance of the delegated credential; mandate (see the previous piece) at the account before settlement. AuthZEN and AIIM, later in this issue, are about how you express the agent and the permission. They are not a substitute for the due-diligence layers.

Do not treat KYA as a product name or a finished UK rule. Treat it as a named gap: the agent is a distinct subject. If your token only carries the human `sub`, you have not identified the agent. If it only carries the agent, you have not identified the principal.
