---
title: UK Open Banking — OIDF suite
family: lab
sources:
  - https://openid.net/certification/certification-fapi_op_testing/
  - https://openid.net/certification/
updated: 2026-08-26
slug: uk-fcs-public-instrument
order: 6
illustration: ill-uk-fcs.webp
section: Lab
dek: "The public UK path on the OIDF suite is FAPI1-Advanced-Final with profile openbanking_uk."
pullQuote: "Those tests allow you to demonstrate compliance with both FAPI1-Advanced-Final and the OpenBanking UK Profile."
caption: "The bench is public. The UK pin is a profile flag, not a new FAPI."
---

OIDF publishes the conformance suite that UK Open Banking implementors actually run. The instruction is on the FAPI OP testing page. If the server complies with the UK Open Banking specification, run **FAPI1-Advanced-Final: Authorization server test** and select `openbanking_uk` as the FAPI Profile.

That variant is a superset of FAPI 1 Advanced. The major extra is intent: an Open Banking UK authorization server requires pre-registration of intent using an OB-specific API before authorisation succeeds. The suite asks for `ReadAccountsBasic` only. Client credentials should be treated as a temporary third-party onboarding and revoked after the run. A dummy or reference account is enough.

Setup is two clients, different keys, two redirect URLs under `https://www.certification.openid.net/test/a/{ALIAS}/callback` (one with the dummy query string exactly as written). Resource-server URL for UK tests is the AISP base, for example `https://rs.example.com/open-banking/v3.1/aisp/`. The suite's outbound address is published on the home page after login.

Do not pick a test plan with "client" in the name when you are testing an OpenID Provider. Do not treat a green FAPI 2 plan as a UK pin. FAPI 2 tests exist on the same page; they are a different instrument. OpenID Connect (`openid` scope, id_token) is optional in the FAPI 2 tests and required in the UK FAPI 1 path as the ecosystem specifies.

This lab note is the public instrument only — suite, profile flag, intent pre-registration. It is not a score, a bank-by-bank result, or a private run log. When you need the official UK conformance surface, this is the page to open.
