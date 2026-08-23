export const complianceMeta = {
  chapters: {
    governance: {
      title: "Governance and policy",
      lede: "The Information Security Policy that everything else hangs from — how it is validated, reviewed, audited, and held against ISO 27001, SOC 2, GDPR, and LGPD.",
    },
    identity: {
      title: "Identity and access",
      lede: "Who can reach what, proven at every boundary. Least privilege, documented identity lifecycle, enforced multi-factor authentication, and enterprise federation.",
    },
    infrastructure: {
      title: "Infrastructure and perimeter",
      lede: "Where the compute physically sits, how the network is cut into segments, and what stands between the public internet and a database.",
    },
    operations: {
      title: "Operations and response",
      lede: "The day-to-day: hardened workstations, change control, log aggregation, and what happens in the hours after something goes wrong.",
    },
    data: {
      title: "Data, backup, and continuity",
      lede: "Classification, encryption, immutable snapshots, and the recovery objectives we hold ourselves to when a region goes dark.",
    },
    engineering: {
      title: "Engineering and supply chain",
      lede: "How software gets built and reviewed before it ships, how tenants stay separated, and what we require of every vendor we bring in.",
    },
  },
  posture: [
    { label: "At rest, every tier", note: "FileVault · RDS · S3" },
    { label: "In transit, enforced", note: "HTTP redirected to HTTPS" },
    { label: "Recovery time objective", note: "RPO under one hour" },
    { label: "Backup durability", note: "Multi-AZ, WORM locked" },
  ],
  standards: [
    {
      scope: "UNFLD practice · AWS certified",
      detail: "Information security management system controls and review cadence.",
    },
    {
      scope: "UNFLD practice",
      detail: "Control implementation guidance applied across the PSSI.",
    },
    {
      scope: "UNFLD practice · AWS certified",
      detail: "Security, availability, and confidentiality criteria.",
    },
    {
      scope: "Contractual",
      detail: "Legal basis, DPAs with Standard Contractual Clauses, subject rights.",
    },
    {
      scope: "Contractual",
      detail: "Brazilian personal data protection across products we operate.",
    },
    {
      scope: "Aligned",
      detail: "Risk management, incident reporting, and supply chain practice.",
    },
    {
      scope: "AWS certified",
      detail: "Platform accreditation inherited from the hosting layer.",
    },
  ],
  response: [
    { label: "Log retention" },
    { label: "Critical patch window" },
    { label: "Snapshot retention" },
  ],
  regions: [
    {
      country: "Germany",
      role: "EU primary",
      note: "GDPR-resident workloads and encrypted RDS instances.",
    },
    {
      country: "Ireland",
      role: "EU secondary",
      note: "Cross-region replication target for European clients.",
    },
    {
      country: "Brazil",
      role: "LATAM primary",
      note: "Local residency for Brazilian and LGPD-governed data.",
    },
  ],
  lifecycle: [
    {
      title: "Peer review",
      body: "Every pull request needs a human reviewer. No exceptions, no self-merge to production branches.",
    },
    {
      title: "Automated gates",
      body: "Static analysis, dependency scanning, and secret detection run on each commit before a merge is possible.",
    },
    {
      title: "Staged deploy",
      body: "Infrastructure and application changes reach staging first, under the same encryption and access controls.",
    },
    {
      title: "External assessment",
      body: "Penetration tests and vulnerability assessments with outside specialists, remediated by severity.",
    },
  ],
  highlights: [
    {
      title: "ISO 27001 & SOC 2 aligned",
      desc: "Internal controls calibrated against ISO 27001/27002 and SOC 2 Type II criteria, on certified AWS infrastructure.",
    },
    {
      title: "Data residency by contract",
      desc: "European workloads in Frankfurt and Ireland, LATAM workloads in São Paulo. GDPR and LGPD alignment throughout.",
    },
    {
      title: "Encrypted end to end",
      desc: "AES-256 at rest across databases, object storage, and snapshots. TLS 1.3/1.2 for every connection in transit.",
    },
    {
      title: "Enterprise SSO and MFA",
      desc: "SAML 2.0, OAuth 2.0, and OpenID Connect federation with multi-factor authentication mandatory for privileged access.",
    },
    {
      title: "Immutable backups",
      desc: "S3 Object Lock snapshots that cannot be deleted or altered, validated by quarterly restoration drills.",
    },
    {
      title: "Continuous verification",
      desc: "Dependency and static analysis on every pull request, monthly system scans, and periodic external penetration tests.",
    },
  ],
} as const;
