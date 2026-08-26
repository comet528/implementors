---
title: FAPI 2 Attacker Model
family: lab
sources:
  - https://openid.net/specs/fapi-attacker-model-2_0-final.html
  - https://openid.net/specs/fapi-security-profile-2_0-final.html
updated: 2026-08-26
slug: fapi-2-attacker-model-final
order: 7
illustration: ill-attacker.webp
section: Lab
dek: "Final, 22 February 2025. It is the security argument for FAPI 2, not a UK Open Banking profile."
pullQuote: "Implementers can derive from this document which threats have been taken into consideration — and which fall outside."
caption: "The map is the model. A1 through A5, not a bank's private threat register."
---

The **FAPI 2.0 Attacker Model** is Final as of 22 February 2025. It states the security goals and the attacker capabilities that the FAPI 2 Security Profile is built to meet. Read it before you claim FAPI 2 "covers" a threat. The document is explicit: some attacks are in scope, some are assumed away, and some are outside the profile on purpose.

Three goals. Authorization: no attacker obtains and uses an access token for someone else's resources. Authentication (when OIDC is used): no attacker logs in at a client as another user. Session integrity: no attacker forces a user to be logged in as the attacker, or to use the attacker's resources.

The attackers are typed. **A1** is the web attacker (sends links, tampers on its own endpoints, cannot intercept others). **A1a** is A1 that can also participate as an authorization server. **A2** is the network attacker (rogue Wi-Fi; TLS is assumed to hold). **A3a** can read the front-channel authorization request. **A5** can read resource requests after the resource server has processed them. An attacker who can read the authorization *response* is deliberately out of scope — current browsers make that fatal for redirect protocols. Token-endpoint attacker A4 is retained only as history: FAPI 2 requires the token endpoint from authoritative metadata over a protected channel, so A4 is "not relevant."

Assumptions you must not skip. TLS is not broken. JWKS is fetched from the right place. Browsers and honest endpoints behave. Identity proofing and session management at the AS or client are out of scope. Implementation bugs, leaked keys, and compromised user devices are out of scope. The formal analysis (Hosseyni, Küsters, Würtele) is of this model plus the Security Profile, not of your deployment.

This lab note exists so implementors stop using "we are FAPI 2" as a substitute for reading the attacker list. It also exists so nobody treats the model as the UK Open Banking v4 profile. UK v4 still reads FAPI 1 Advanced. The attacker model is the security argument for FAPI 2 work.
