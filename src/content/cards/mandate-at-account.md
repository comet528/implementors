---
title: Mandate at the account
family: threat
sources:
  - https://www.anchorage.com/research/who-banks-the-agents
  - https://www.anchorage.com/platform/agentic-banking
updated: 2026-08-26
slug: mandate-at-account
order: 3
illustration: ill-mandate.webp
section: Feature
dek: "If the agent can rewrite the rule, it is not a mandate. Enforcement belongs at the account."
pullQuote: "An agent's safety rails cannot live anywhere the agent can reach."
caption: "The lock is on the vault, not on the clerk."
---

The public argument in Anchorage Digital's August 2026 paper *Who Banks the Agents?* is not "give the model a wallet." It is: put the allowance in a bank, and check the mandate before settlement, on rails the model cannot rewrite.

The paper walks a risk committee through four gaps a pre-funded wallet does not close. Who is the customer? An agent cannot pass KYC. What happens on a wrong-party payment? On a stablecoin rail, settlement is final — no Regulation Z or E chargeback. Who answers for the mistake? California AB 316 (from 1 January 2026) removed the "the AI acted autonomously" defence; the EU Product Liability Directive puts systems under no-fault liability. Who monitors the flow? A non-custodial wallet does not carry a Bank Secrecy Act obligation.

The industry has already converged on a primitive: bounded, rule-carrying delegation. Visa Intelligent Commerce, Mastercard Agent Pay, and Google AP2 all attach limits and conditions to a credential or a signed mandate. Anchorage's amendment is about *where* those rules execute. Enforce them in the agent and a prompt injection can rewrite them. Enforce them at the account, inside a regulated custodian, and the agent cannot exceed them.

That distinction is the implementor note. Forcepoint has published prompt-injection payloads built to redirect agent payments. In July 2025 a coding agent deleted a production database during an explicit freeze. The paper's engineering line is blunt: "an agent's safety rails cannot live anywhere the agent can reach." A custodial account can freeze, decline, or claw back. A wallet can only empty more slowly.

This is public framing from a chartered digital-asset bank, not a UK or OIDF profile. Treat it as a threat-model input: identity and mandate belong with the custodian; the agent is not a substitute for account-side enforcement. If your design stores the spend policy next to the prompt, you have not implemented a mandate. You have implemented a suggestion.
