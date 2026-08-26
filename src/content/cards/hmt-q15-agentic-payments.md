---
title: HMT Q15 — agentic payments
family: hmt
sources:
  - https://www.gov.uk/government/consultations/modernising-payment-services-regulation
  - https://www.gov.uk/government/consultations/modernising-payment-services-regulation/modernising-payment-services-regulation-consultation
updated: 2026-08-26
slug: hmt-q15-agentic-payments
order: 2
illustration: ill-hmt.webp
section: Feature
dek: "The consultation is open. Question 15 is the agentic-payments question. It is not a UK standard."
pullQuote: "Agentic payments are a consultation question, not a finished UK payments standard."
caption: "Papers, not a rulebook. The close date is 6 October 2026."
---

HM Treasury published *Modernising Payment Services Regulation* on 14 July 2026. It is an open consultation. It closes at 11:59pm on 6 October 2026. The document covers tokenised payments, the long-term Open Banking framework, and — in chapter 3.2 — agentic payments. That chapter is the one implementors keep misreading as a specification.

Question 15 is the line that matters: "How does existing payment services regulation need to adapt to support agentic payments? For example, do provisions relating to authentication and consent of payments transactions, and liability for unauthorised payment transactions, need updating?" The government is asking whether the Payment Services Regulations 2017, written before agentic AI, can carry consent, authentication, and liability when software initiates. It is not answering.

The surrounding text is ambition, not a profile. The Chancellor's AI Adoption Summit line is quoted. The FCA Supercharged Sandbox is mentioned as evidence of demand. The National Payments Vision is the frame. None of that tells a PISP how to bind a mandate, which SCA outcome applies when the initiator is not a PSU at the device, or who eats an unauthorised push. Those are the questions Q15 is collecting views on.

Read the rest of chapter 3 if you are wiring tokenised payments or Open Banking. Tokenised deposits and UK-issued qualifying stablecoins are being pulled toward the payments perimeter. Chapter 4 proposes a new statutory right of access for variable recurring payments, a Future Entity to succeed today's standards body, and FCA powers under the Data (Use and Access) Act 2025. Those are live legislative tracks. They still sit beside Q15, not instead of it.

For implementors the discipline is simple. Cite the consultation as a consultation. Quote Q15 as the agentic-payments question. Do not treat the chapter as a UK agentic-payments standard, an Open Banking Limited profile, or a substitute for FAPI. If your design depends on how liability will land when an agent initiates, that design is currently an opinion you are sending to Horse Guards Road — not a pin you can put in a conformance plan.
