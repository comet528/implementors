---
title: AIIM and AuthZEN / CoAZ
family: fapi
sources:
  - https://openid.net/cg/artificial-intelligence-identity-management-community-group/
  - https://openid.net/getting-cozy-with-coaz-securing-apis-and-ai-agents-with-standardized-authorization/
  - https://openid.net/openid-foundation-advances-authorization-for-the-agent-era-with-new-authzen-working-group-drafts/
updated: 2026-08-26
slug: aiim-authzen-coaz
order: 5
illustration: ill-aiim.webp
section: Feature
dek: "Who the agent is, and what it may invoke, are different layers. Do not wire them as one."
pullQuote: "Design them as separate layers: who the agent is, then what it is allowed to invoke."
caption: "Identity in one ring. Permission in the next. The tool call sits outside both until both clear."
---

The OpenID **Artificial Intelligence Identity Management Community Group** is the public venue for agent-identity gaps: how an LLM or agent asserts identity to the servers it calls; what belongs in a token that moves between agents rather than from a consumer to an IdP; discovery; governance. The OIDF board commissioned a landscape paper in April 2025. The CG is explicitly *not* a protocol working group. Protocol work is deferred to an OIDF or liaison WG.

Authorization is a different stack. **AuthZEN** standardises PEP↔PDP exchange on a Subject-Action-Resource-Context model. **COAZ** ("Compatible with OpenID AuthZEN," pronounced "cozy") maps a source protocol into that model. The AuthZEN Working Group published the COAZ Framework and a COAZ-MCP binding as drafts on 31 July 2026, and in June 2026 approved working-group drafts for the Access Request and Approval Profile (AARP) and the COAZ profile for MCP tool authorization.

COAZ-MCP is the implementor detail. Every JSON-RPC message from an AI client is meant to be authorised before execution. Default mappings cover basic MCP methods; a tool can declare a CEL mapping that projects arguments into AuthZEN. The binding captures both the human the agent acts for and the agent identity. That is how you avoid the confused-deputy case where a high-level grant becomes an unauthorised tool call.

AARP is the other half of the June drafts. Agents do not pause for a side process the way a human workflow does. When policy cannot yet allow an action, AARP gives an interoperable "not yet, and here is what is required" — approval, consent, attestation — then policy is evaluated again. Policy stays the decision-maker. The vendor quotes on the June 15 post are consistent on that point.

For this directory the rule is: AIIM is about who the agent is. AuthZEN/COAZ is about what the agent may invoke. AARP is about gathering prerequisites when the answer is not yet allow. Do not collapse them into one "agent auth" ticket. And do not read working-group drafts as Final. They will move through Implementer's Draft and Final on the OpenID process. Until then, cite the dated posts and the draft names.
