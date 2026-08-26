---
title: FAPI 1 Advanced vs FAPI 2
family: fapi
sources:
  - https://openid.net/specs/fapi-security-profile-2_0-final.html
  - https://openid.net/certification/certification-fapi_op_testing/
updated: 2026-08-26
slug: fapi1-advanced-vs-fapi2-sp
order: 1
illustration: ill-fapi.webp
section: Feature
dek: "UK Open Banking v4 still reads FAPI 1 Advanced. FAPI 2 is a published instrument, not a drop-in replacement."
pullQuote: "A profile that is Final is not, by itself, the UK rulebook."
caption: "Two security profiles, one ink. The fork is the point."
---

The OpenID Foundation published the **FAPI 2.0 Security Profile** as Final on 22 February 2025. It is an OAuth 2.0 profile for high-value APIs, written against the FAPI 2.0 Attacker Model, and formally analysed. That is a finished instrument. It is not, on its own, the profile UK Open Banking v4 implements.

UK Open Banking still aligns to **FAPI 1.0 Part 2 Advanced Final** (March 2021). The certification suite says so in plain language: if a server complies with the UK Open Banking specification, run the FAPI1-Advanced-Final authorization-server tests and set the FAPI Profile to `openbanking_uk`. Those tests are a superset of FAPI 1 Advanced. They are not FAPI 2 tests.

The two profiles do different work. FAPI 2 requires confidential clients only, sender-constrained access tokens (MTLS or DPoP), client-authenticated **pushed authorization requests**, PKCE with `S256`, and `response_type=code`. It drops JAR in the front channel in favour of PAR, and it drops JARM because the authorization response is reduced to a code. FAPI 1 Advanced still lives in a world of request objects, optional JARM, and the BCM-style threat framing that FAPI 2 replaced with an explicit attacker model.

Section 5.5 of the FAPI 2 Security Profile tabulates the swap. JAR becomes PAR. `code id_token` becomes `code`. `s_hash` becomes PKCE. Pre-registered redirect URIs become redirect URIs carried in PAR. MTLS-only sender-constraining becomes MTLS or DPoP. Those are implementor decisions, not marketing ones. If you wire a bank that still speaks FAPI 1 Advanced and you assume FAPI 2 Baseline, you will fail the UK path before you fail a unit test.

OIDF's own certification page lists both families as current: FAPI 1.0 Part 2 Advanced Final, FAPI 2.0 Security Profile Final, plus implementer drafts. "If in doubt, you would normally test against the latest ‘final’ specification." That advice is for a greenfield high-security API. It is not advice for a UK v4 ASPSP. When the conformance surface names `openbanking_uk`, treat that as the pin.

For implementors the useful question is not "which FAPI is newer?" It is "which profile does this ecosystem actually test?" UK Open Banking: FAPI 1 Advanced, `openbanking_uk`. A FAPI 2 deployment: the FAPI 2 Security Profile Final, with the attacker model as the security argument. Mixing the two in one client configuration is how mix-up and intent-registration bugs get written.
