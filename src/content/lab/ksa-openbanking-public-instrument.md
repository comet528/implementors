---
title: KSA Open Banking — public listings
family: lab
sources:
  - https://openbanking.sama.gov.sa/index-en.html
  - https://openid.net/certification/certification-fapi_op_testing/
updated: 2026-08-26
slug: ksa-openbanking-public-instrument
order: 8
illustration: ill-ksa.webp
section: Lab
dek: "The public listings host is now openbanking.sama.gov.sa. The KSA FAPI profile text is still not a public document."
pullQuote: "Please note that the KSA FAPI Profile specifications are not currently publicly published but will be soon."
caption: "The door is public. The profile PDF is not."
---

Saudi Open Banking's public listings — Framework, Lab, and the contact path for access — now live at **openbanking.sama.gov.sa**. The previous host, `openbanking.sa`, returns 302 to that name. Cite the SAMA host. Do not keep the old URL as if it were current.

The page describes the Framework (glossary, use cases, business rules, technical standards) and the Lab (sandbox, testing and certification). It does not publish the KSA FAPI profile as a downloadable specification. That is still the rule OIDF's certification page states: "the KSA FAPI Profile specifications are not currently publicly published but will be soon." A snapshot is available to testers through the certification programme; that is not a public URL you can put on a card as the profile itself.

What *is* public on the OIDF suite is the KSA test shape. PAR is mandatory. JARM is not used. Client-credentials grant obtains an access token with `scope=accounts`. `account-access-consents` creates a ConsentId (permission: `ReadAccountsBasic`) before the test. That ConsentId is passed to PAR in a parameterised scope. The accounts endpoint is the resource-server target. The regulator's guidance, as relayed on the certification page, is that KSA banks are expected to certify MTLS client authentication, and may optionally certify `private_key_jwt`.

Where a version string is required in published materials, this issue still cites **KSA-OB 2022.11.01-final-errata2**. That string comes from earlier published materials, not from a profile PDF on the SAMA listings page. Do not invent a newer KSA profile identifier.

This note is a listings pin plus the public certification shape. It is not a private lab score and not a claim that the KSA profile is open. When the profile is published, this page is the first place the host will show it.
