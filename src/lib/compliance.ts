export type ComplianceItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export type ComplianceCategory = {
  name: string;
  slug: string;
  description: string;
  items: ComplianceItem[];
};

export const COMPLIANCE_ITEMS: readonly ComplianceItem[] = [
  {
    id: "pssi-alignment",
    category: "General and PSSI",
    question: "Do you have a validated PSSI aligned with ISO 27001/27002?",
    answer:
      "Yes. We maintain a robust Information Security Policy (PSSI) formally validated and championed by our executive leadership. It is aligned with stakeholder requirements and calibrated against ISO 27001 and ISO 27002 standards, with active enforcement across all UNFLD operations.",
  },
  {
    id: "security-risk-reviews",
    category: "General and PSSI",
    question: "Are security risks mapped and reviewed regularly? How often?",
    answer:
      "Yes, we regularly map and reassess computer security risks through a formalized review process. We conduct comprehensive risk evaluations at least quarterly with ongoing continuous monitoring in between. Workstations utilize macOS with disk encryption (FileVault) and endpoint protection.",
  },
  {
    id: "isms-evaluation",
    category: "General and PSSI",
    question: "Do you regularly evaluate ISMS performance and effectiveness?",
    answer:
      "We conduct ad-hoc reviews and risk-based assessments whenever critical architecture changes occur or new threat vectors emerge, combining continuous monitoring with periodic review cycles aligned with stakeholder expectations.",
  },
  {
    id: "intrusion-tests-vulnerability-scans",
    category: "General and PSSI",
    question: "Do you run intrusion tests and vulnerability scans? Fix within 1 year?",
    answer:
      "Yes. We conduct intrusion testing and vulnerability scanning on a regular cadence, partnering with industry specialists and leveraging automated security insights. Remediations are prioritized by severity, typically resolved in days to weeks and well within standard service level agreements.",
  },
  {
    id: "pssi-internal-audits",
    category: "General and PSSI",
    question: "Do you conduct regular internal audits for PSSI compliance?",
    answer:
      "We perform targeted compliance evaluations and enforce heightened security controls during onboarding, key releases, and high-risk client engagements, establishing audit trails and verification checkpoints.",
  },
  {
    id: "non-conformity-improvement",
    category: "General and PSSI",
    question: "Is an improvement approach in place for non-conformities?",
    answer:
      "Yes. We maintain a responsive remediation mechanism whenever non-conformities or findings are identified, tracking items systematically and integrating technical corrections into development workflows.",
  },
  {
    id: "certifications-iso-soc2",
    category: "General and PSSI",
    question: "Do you hold ISO 27001, SOC2 type 2, or similar certifications?",
    answer:
      "While UNFLD operates as a lean organization, we align our internal security controls and processes directly with ISO 27001 and SOC 2 Type II criteria. Our core cloud hosting provider (AWS) holds certified ISO 27001, SOC 1/2/3, and PCI DSS compliance.",
  },
  {
    id: "software-component-inventory",
    category: "General and PSSI",
    question: "Do you maintain an inventory of software and components (e.g. libraries)?",
    answer:
      "Yes. We maintain an up-to-date inventory of all software and third-party dependencies used across our infrastructure. We enforce automated dependency scanning (e.g. GitHub Dependabot and secret scanning), alongside due diligence reviews before adopting external services.",
  },
  {
    id: "security-awareness-training",
    category: "User awareness and training",
    question: "Do you have an IT security awareness process?",
    answer:
      "Yes. We run mandatory security training covering phishing detection, credential hygiene, secure coding practices, and privacy compliance (GDPR/LGPD). Training is tailored by engineering, operations, and leadership roles.",
  },
  {
    id: "least-privilege-duties",
    category: "Access Authorization Management",
    question: "Do authorization profiles follow least privilege and separation of duties?",
    answer:
      "Yes. Authorization profiles strictly adhere to the principle of least privilege and separation of duties. Access rights are provisioned strictly according to job function to prevent unauthorized access and minimize insider threat.",
  },
  {
    id: "identity-lifecycle-procedure",
    category: "Access Authorization Management",
    question: "Procedure for creating, modifying and deleting identifiers? Describe.",
    answer:
      "We follow a documented identity lifecycle procedure. Account creation, role modifications, and offboarding de-provisioning are logged, approved by designated managers, and executed promptly upon organizational or project changes.",
  },
  {
    id: "mfa-enforcement",
    category: "Access Authorization Management",
    question: "Is multi-factor authentication for administrators and users applied?",
    answer:
      "Yes. Multi-factor authentication (MFA) is strictly enforced for all administrative and developer access across production consoles, code repositories, cloud providers, and corporate workspace tools using TOTP or hardware security keys.",
  },
  {
    id: "cryptographic-standards",
    category: "Access Authorization Management",
    question: "Strong cryptographic auth aligned with RGS or CNIL?",
    answer:
      "Yes. We enforce modern cryptographic standards including AES-256 for data at rest, TLS 1.3/1.2 for transport security, and resilient hashing algorithms (such as Argon2/bcrypt) for authentication storage, adhering to established security standards.",
  },
  {
    id: "password-policy",
    category: "Access Authorization Management",
    question: "Strong password policy? Describe for users and administrators.",
    answer:
      "Our password policy mandates minimum length (12+ characters), high complexity requirements, and prohibition of reused or compromised credentials. Elevated privilege accounts require mandatory hardware or TOTP second factors.",
  },
  {
    id: "password-rotation",
    category: "Access Authorization Management",
    question: "Do you require the user to change the password regularly?",
    answer:
      "We enforce scheduled rotation for administrative accounts, alongside automated credential invalidation and reset triggers upon any anomaly or suspicion of credential exposure.",
  },
  {
    id: "login-audit-logs",
    category: "Access Authorization Management",
    question: "Are logs of successful and failed logins recorded?",
    answer:
      "Yes. All authentication events—both successful logins and failed attempts—are recorded, timestamped, and ingested into centralized monitoring systems for real-time alerting and auditability.",
  },
  {
    id: "access-compromise-detection",
    category: "Access Authorization Management",
    question: "Means of detecting access compromise? If yes, describe them.",
    answer:
      "We utilize automated anomaly detection, rate-limiting on authentication gateways, and SIEM alerting to identify suspicious geolocation changes, brute-force attempts, or unusual privilege escalations.",
  },
  {
    id: "sso-saml-oauth2",
    category: "Access Authorization Management",
    question: "Do you support SSO? Which protocols (SAML, OAuth2, etc.) are supported?",
    answer:
      "Yes. We support Single Sign-On (SSO) utilizing industry-standard SAML 2.0, OAuth 2.0, and OpenID Connect (OIDC), enabling seamless integration with enterprise identity providers such as Microsoft Entra ID (Azure AD), Okta, and Google Workspace.",
  },
  {
    id: "access-rights-review",
    category: "Access Authorization Management",
    question: "Is access rights review conducted regularly? If so, how frequently?",
    answer:
      "Yes. We perform quarterly access audits for critical infrastructure and production databases, and semi-annual reviews across corporate applications to ensure all permissions match current roles and responsibilities.",
  },
  {
    id: "logging-system-implementation",
    category: "Monitoring and Traceability",
    question: "Have you implemented a logging system?",
    answer:
      "Yes. We maintain centralized logging infrastructure capturing critical system events, API requests, infrastructure changes, and administrative actions across all application tiers.",
  },
  {
    id: "admin-action-tracing",
    category: "Monitoring and Traceability",
    question: "Are actions performed by administrators traced?",
    answer:
      "Yes. Heightened audit tracing is applied to all administrator activities, including configuration modifications, privilege adjustments, and infrastructure changes with immutable audit logs.",
  },
  {
    id: "centralized-log-management",
    category: "Monitoring and Traceability",
    question: "Is centralized log management (infrastructure and application) in place?",
    answer:
      "Yes. We utilize centralized log aggregation (such as AWS CloudWatch and SIEM integrations) to collect, index, and analyze operational and security logs from both infrastructure and application layers.",
  },
  {
    id: "real-time-log-console",
    category: "Monitoring and Traceability",
    question: "Have you set up a real-time log viewing console?",
    answer:
      "Yes. Real-time dashboards and log consoles allow engineering and security personnel to inspect operational health, query telemetry, and monitor anomalies on demand.",
  },
  {
    id: "log-retention-period",
    category: "Monitoring and Traceability",
    question: "What is the log retention period?",
    answer:
      "Operational and security logs are retained for a baseline minimum of one year in encrypted storage, with configurable extended retention periods for sensitive enterprise contracts.",
  },
  {
    id: "security-operations-soc",
    category: "Monitoring and Traceability",
    question: "Do you have a SOC (Security Operations Center)?",
    answer:
      "Yes. We operate a hybrid security response model combining internal on-call incident response with automated cloud security tooling and specialist partner support for continuous threat monitoring and escalation.",
  },
  {
    id: "data-hosting-locations",
    category: "Physical security",
    question: "Where is data hosted? If you use a provider, please mention their name.",
    answer:
      "Primary data hosting is provisioned on Amazon Web Services (AWS), utilizing European regions (e.g. Frankfurt, Ireland) for GDPR alignment and South America (São Paulo) for local LATAM data residency. Cloudflare is used for edge delivery and DDoS mitigation; Google Workspace is used for corporate collaboration.",
  },
  {
    id: "physical-datacenter-security",
    category: "Physical security",
    question: "Do hosting locations meet physical security requirements? Describe.",
    answer:
      "Yes. AWS data centers maintain strict multi-tier physical safeguards: perimeter fencing, biometric access control, CCTV monitoring, 24/7 security guards, and environmental redundancies (power, cooling, fire suppression) verified under ISO 27001 and SOC 2 audits.",
  },
  {
    id: "cabling-transport-security",
    category: "Physical security",
    question: "Are power and telecom cables for data transport secured?",
    answer:
      "Yes. Hosting facilities utilize redundant power feeds and secured conduits for data and telecom cabling to protect physical transport paths against disruption and tampering.",
  },
  {
    id: "it-asset-inventory-cmdb",
    category: "Security related to operations",
    question: "Do you have an inventory of information system components (e.g. CMDB)?",
    answer:
      "We maintain a centralized asset register tracking critical infrastructure, repositories, managed devices, domain assets, and third-party SaaS integrations.",
  },
  {
    id: "change-management-process",
    category: "Security related to operations",
    question: "Do you have a change management process for security of technical updates?",
    answer:
      "Yes. All codebase and infrastructure changes require automated CI validation, pull request peer review, and approval before automated deployment to staging and production environments.",
  },
  {
    id: "workstation-auto-lock",
    category: "Security related to operations",
    question: "Do you have automatic session locking on workstations?",
    answer:
      "Yes. Company-managed devices enforce automatic screen locking after a brief period of inactivity, requiring biometric or password re-authentication.",
  },
  {
    id: "antivirus-edr-workstations",
    category: "Security related to operations",
    question: "Do you use updated antivirus or EDR to secure workstations?",
    answer:
      "Yes. Workstations combine native macOS endpoint protections (XProtect, Gatekeeper, System Integrity Protection) with automated security patch management and EDR monitoring.",
  },
  {
    id: "workstation-firewall-logging",
    category: "Security related to operations",
    question: "Is workstation firewall configured to log blocked flows and intrusions?",
    answer:
      "Yes. Local firewalls and endpoint controls are active on managed devices, with unusual network traffic patterns monitored and blocked.",
  },
  {
    id: "log-integrity-protection",
    category: "Security related to operations",
    question: "Do you protect logging equipment and logged information?",
    answer:
      "Yes. Log streams are protected with AES-256 encryption at rest, strict least-privilege IAM access policies, and audit trails to prevent log tampering or deletion.",
  },
  {
    id: "storage-encryption-at-rest",
    category: "Security related to operations",
    question: "Have you implemented encryption for storage?",
    answer:
      "Yes. Workstations enforce full-disk encryption via Apple FileVault (AES-XTS). Cloud databases, object storage (S3), and snapshot volumes are encrypted at rest with AES-256.",
  },
  {
    id: "daily-vulnerability-detection",
    category: "Security related to operations",
    question: "Are vulnerability detection tools in place and updated daily?",
    answer:
      "Yes. Continuous vulnerability scanners inspect source repositories, Docker container images, and deployed dependencies against daily-updated CVE databases.",
  },
  {
    id: "patch-management-timeframe",
    category: "Security related to operations",
    question: "Are security patches installed within a defined time frame?",
    answer:
      "Critical security vulnerabilities are prioritized for immediate remediation (within 24–72 hours), while standard software updates follow established release cadences.",
  },
  {
    id: "periodic-vulnerability-scans",
    category: "Security related to operations",
    question: "Do you perform periodic scans (at least monthly) for vulnerabilities?",
    answer:
      "Yes. Automated dependency and security scans run on every pull request, complemented by monthly system-level scans and external network assessments.",
  },
  {
    id: "internet-facing-segmentation",
    category: "Security of communications",
    question: "Are Internet-facing services segmented from the rest of the system?",
    answer:
      "Yes. Public ingress is isolated through edge layers (Cloudflare / AWS CloudFront and ALBs), with backend application containers and database instances placed in private VPC subnets with no direct public route.",
  },
  {
    id: "risk-based-network-segmentation",
    category: "Security of communications",
    question: "Is network segmentation risk-based and in place?",
    answer:
      "Yes. Cloud architectures employ virtual private clouds (VPCs), strict security groups, and container network isolation to separate production environments, staging environments, and database layers.",
  },
  {
    id: "encrypted-protocols-transit",
    category: "Security of communications",
    question: "Do you use encrypted protocols for all internal and external traffic?",
    answer:
      "Yes. All client-to-server and internal service communications enforce encrypted protocols (HTTPS/TLS 1.2+ and SSH/encrypted VPC tunnels). Unencrypted HTTP traffic is automatically redirected to HTTPS.",
  },
  {
    id: "secure-internet-gateway-waf",
    category: "Security of communications",
    question: "Secure Internet gateway with firewall and proxy security?",
    answer:
      "We leverage Cloudflare Web Application Firewall (WAF), rate limiting, DDoS shielding, and AWS security group firewalls at ingress boundaries.",
  },
  {
    id: "filtering-rule-reviews",
    category: "Security of communications",
    question: "Is a regular review of filtering rules performed? If so, how frequently?",
    answer:
      "Yes. Security group rules, WAF configurations, and DNS records are reviewed quarterly and upon major architecture deployments.",
  },
  {
    id: "email-antivirus-filtering",
    category: "Security of communications",
    question: "Is antivirus scanning applied upstream of user mailboxes?",
    answer:
      "Yes. Upstream email security is handled by Google Workspace, with automated malware, attachment sandbox analysis, and virus scanning prior to inbox delivery.",
  },
  {
    id: "email-antispam-phishing",
    category: "Security of communications",
    question: "Do you have an anti-spam service for email?",
    answer:
      "Yes. Google Workspace ML-driven spam filters protect email accounts against inbound spam, malicious links, and phishing attempts.",
  },
  {
    id: "email-sender-authenticity",
    category: "Security of communications",
    question: "Have you implemented mechanisms for verifying authenticity?",
    answer:
      "Yes. We implement and enforce full SPF, DKIM, and DMARC records across all corporate and product email domains to protect domain reputation and prevent spoofing.",
  },
  {
    id: "remote-access-security",
    category: "Security of communications",
    question: "Is remote access secured with VPN and MFA?",
    answer:
      "Cloud management and production access require MFA-authenticated identity verification and SSH keys; dedicated VPN or bastion tunnels are utilized where required by client architectures.",
  },
  {
    id: "incident-management-procedure",
    category: "Incident Management",
    question: "Have you defined a security incident management procedure?",
    answer:
      "Yes. We maintain a documented incident response procedure covering triage, containment, forensic investigation, root cause analysis (RCA), and stakeholder notification.",
  },
  {
    id: "data-breach-notification",
    category: "Incident Management",
    question: "Have you established procedures for notifying personal data breaches?",
    answer:
      "Yes. Data breach notification protocols are aligned with GDPR, LGPD, and contractual SLA terms, guaranteeing rapid investigation and notification to affected parties and regulatory authorities without undue delay.",
  },
  {
    id: "password-storage-protection",
    category: "Incident Management",
    question: "Do you protect stored passwords with secure solutions?",
    answer:
      "Yes. Passwords in applications are salted and hashed with modern algorithms (Argon2 / bcrypt). Team credentials are held in encrypted password vaults with mandatory MFA.",
  },
  {
    id: "cyber-crisis-preparedness",
    category: "Incident Management",
    question: "Is a cyber crisis plan in place and tested annually?",
    answer:
      "We maintain incident escalation paths and cloud disaster recovery playbooks, reviewing recovery procedures and leadership escalation protocols periodically.",
  },
  {
    id: "incident-response-team-cert",
    category: "Incident Management",
    question: "Do you have a CERT (Computer Emergency Response Team)?",
    answer:
      "We maintain an internal security incident response team and partner with specialized cybersecurity assessors and incident handlers for high-tier enterprise needs.",
  },
  {
    id: "subcontractor-security-clauses",
    category: "Subcontracting Security",
    question: "Do subcontractor contracts contain a specific security clause?",
    answer:
      "Yes. All third-party vendor and contractor agreements contain strict non-disclosure agreements (NDAs), data protection clauses, and security compliance obligations.",
  },
  {
    id: "subcontractor-security-verification",
    category: "Subcontracting Security",
    question: "Is the effective application of security principles regularly verified?",
    answer:
      "Yes. Subcontractor and vendor tools undergo due diligence checks prior to onboarding, evaluating GDPR/LGPD compliance, infrastructure posture, and confidentiality controls.",
  },
  {
    id: "project-security-risk-evaluation",
    category: "Project Information Systems",
    question: "Are project risks evaluated against pre-defined security impact criteria?",
    answer:
      "Yes. Architecture reviews and risk assessments are conducted before kickoff for each new product initiative and client milestone, identifying data classification and risk vectors.",
  },
  {
    id: "third-party-maintenance-framing",
    category: "Project Information Systems",
    question: "Are third-party maintenance interventions framed?",
    answer:
      "Yes. Any external technical intervention is governed by strict service agreements, temporary time-bound credentials, least privilege scoping, and audit logging.",
  },
  {
    id: "secure-development-environment",
    category: "Project Information Systems",
    question: "Are development tasks done in a secure environment?",
    answer:
      "Yes. Source code resides in GitHub Enterprise with protected branches, mandatory code reviews, automated CI static analysis, and automated dependency security scanning.",
  },
  {
    id: "pre-delivery-security-verification",
    category: "Project Information Systems",
    question: "Do you verify security before delivery (code audit, pentest, etc.)?",
    answer:
      "Yes. We run automated static code analysis (SAST), dependency scans, peer code reviews, and periodic penetration testing prior to production releases.",
  },
  {
    id: "backup-policy-implementation",
    category: "Backups Management",
    question: "Have you implemented a backup policy? If so, please describe it.",
    answer:
      "Yes. Automated daily snapshots and incremental backups are scheduled for all production databases and persistent volumes, with automated retention and monitoring.",
  },
  {
    id: "backup-storage-locations",
    category: "Backups Management",
    question: "Where are backups located?",
    answer:
      "Backups are stored in dedicated AWS S3 storage buckets with cross-region replication capabilities in São Paulo and European regions.",
  },
  {
    id: "backup-encryption",
    category: "Backups Management",
    question: "Are backups encrypted?",
    answer:
      "Yes. All database backups and storage snapshots are encrypted at rest using AES-256 and protected in transit with TLS.",
  },
  {
    id: "backup-durability-protection",
    category: "Backups Management",
    question: "Are they stored securely (against degradation, loss or theft)?",
    answer:
      "Yes. AWS S3 provides 99.999999999% (11 9s) durability across multiple Availability Zones. We leverage bucket versioning, access logging, and WORM (Object Lock) policies to protect against accidental deletion or ransomware.",
  },
  {
    id: "backup-recovery-drills",
    category: "Backups Management",
    question: "Is the recovery process tested regularly? If so, how often?",
    answer:
      "Yes. Restoration drills and database snapshot test restores are performed quarterly to validate backup integrity and measure recovery time objectives.",
  },
  {
    id: "backup-retention-schedule",
    category: "Backups Management",
    question: "Can you describe your policy? (ex retention)",
    answer:
      "Database snapshot retention defaults to 90 days for operational backups, with monthly and yearly point-in-time archives available for regulatory compliance requirements.",
  },
  {
    id: "immutable-backups",
    category: "Backups Management",
    question: "Do you have an offline or immutable backup copy?",
    answer:
      "Yes. We utilize AWS S3 Object Lock (WORM policy) to establish immutable backup versions that cannot be deleted or modified by unauthorized accounts.",
  },
  {
    id: "dr-bcp-testing",
    category: "Business Continuity",
    question: "Is a business continuity and DR plan tested annually and covering cyber?",
    answer:
      "Yes. Our disaster recovery protocols leverage multi-AZ cloud architecture, automated snapshot restores, and infrastructure-as-code to rapidly recreate service environments.",
  },
  {
    id: "dr-bcp-process-description",
    category: "Business Continuity",
    question: "Describe your Disaster Recovery and Business Continuity Plan process",
    answer:
      "Our disaster recovery plan combines automated database failover, immutable cloud backups in AWS S3, edge traffic routing via Cloudflare, and clear emergency leadership escalation procedures.",
  },
  {
    id: "rto-rpo-targets",
    category: "Business Continuity",
    question: "Are MAD and MADL defined for service continuity and data integrity?",
    answer:
      "Yes. We define explicit Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) based on application criticality, targeting RTO < 4 hours and RPO < 1 hour for core database workloads.",
  },
  {
    id: "data-classification-tiers",
    category: "Data Security",
    question: "Have you implemented information classification?",
    answer:
      "Yes. Data is classified into defined sensitivity tiers (Public, Internal, Confidential, Restricted) to govern storage encryption, access controls, and retention rules.",
  },
  {
    id: "secure-media-destruction",
    category: "Data Security",
    question: "Have you implemented secure destruction of unused media?",
    answer:
      "Because our infrastructure is 100% cloud-hosted, decommissioned cloud volumes are cryptographically erased by AWS. Physical hardware is sanitized using cryptographic wiping or physical destruction.",
  },
  {
    id: "data-loss-prevention",
    category: "Data Security",
    question: "Do you have DLP (leak detection/prevention) in place?",
    answer:
      "We enforce GitHub secret scanning, IAM least privilege controls, Cloudflare egress inspection, and repository access restrictions to prevent unintended data exfiltration.",
  },
  {
    id: "non-production-anonymization",
    category: "Data Security",
    question: "Do you anonymize non-production data?",
    answer:
      "Yes. Test and staging environments utilize synthetic data or masked datasets. Production customer personal data is never copied unmasked into test environments.",
  },
  {
    id: "client-data-reversibility",
    category: "Data Security",
    question: "How do you ensure reversibility and data restoration for clients?",
    answer:
      "We provide standardized data export capabilities (e.g. SQL dumps, CSV, JSON) upon contract termination or on request, ensuring full customer data portability without vendor lock-in.",
  },
  {
    id: "database-encryption-details",
    category: "Data Security",
    question: "Do you encrypt databases? If so, which data is encrypted?",
    answer:
      "Yes. AWS RDS PostgreSQL/MySQL instances enforce AES-256 encryption at rest across all tables, indexes, logs, and backups, along with TLS-encrypted transport connections.",
  },
  {
    id: "data-residency-access",
    category: "Data Security",
    question: "Are data only accessed in EU?",
    answer:
      "Data residency is configured per project contract. European client workloads are hosted in AWS EU regions (Frankfurt, Ireland), while LATAM workloads reside in São Paulo (Brazil). Remote access is authenticated and encrypted.",
  },
  {
    id: "nis2-directive-compliance",
    category: "Compliance",
    question: "Are you compliant with the requirements of the European NIS2 directive?",
    answer:
      "While UNFLD is headquartered in Brazil, we align our cybersecurity risk management, incident reporting procedures, and supply chain security practices with modern European standards including NIS2 recommendations.",
  },
  {
    id: "gdpr-privacy-management",
    category: "Compliance",
    question: "Describe personal data management and privacy compliance (Europe):",
    answer:
      "For EU resident data, we adhere to GDPR requirements: clear legal basis for processing, execution of Data Processing Addenda (DPAs) with Standard Contractual Clauses (SCCs), data minimization, and strict security controls.",
  },
  {
    id: "isms-review-process",
    category: "Compliance",
    question: "Describe your ISMS review and audit process:",
    answer:
      "Our Information Security Management System is reviewed periodically and upon significant infrastructure updates, incorporating automated compliance scanning, internal reviews, and third-party security audits.",
  },
  {
    id: "gdpr-compliance-details",
    category: "Compliance",
    question: "How does the organization ensure GDPR compliance?",
    answer:
      "1. Data Security: Encrypted AWS storage with separation of production and testing environments.\n2. Subject Rights: Documented procedures to execute data access, rectification, and erasure requests within statutory deadlines.\n3. Privacy by Design: Anonymization, tokenization, and least privilege data access.\n4. Oversight: Regular privacy training and maintenance of processing records.",
  },
  {
    id: "reversibility-contract-end",
    category: "Compliance",
    question: "Describe how reversibility is addressed (end of contract):",
    answer:
      "Upon contract conclusion, clients receive comprehensive exports in standard machine-readable formats. Following a contractual transition grace period, residual data is permanently sanitized and deleted from production servers and backup rotation.",
  },
  {
    id: "data-retention-policy-details",
    category: "Compliance",
    question: "Describe your data retention policy:",
    answer:
      "Production data is retained throughout active customer subscription contracts. Backup copies are retained for 90 days by default (extendable by agreement). Logs are retained for 12 months.",
  },
  {
    id: "hosting-services-overview",
    category: "Hosting",
    question: "Which services are used?",
    answer:
      "Core hosting is powered by Amazon Web Services (EC2, ECS, Lambda, RDS, S3), with Cloudflare managing edge CDN, DNS, and WAF, and Google Workspace for productivity.",
  },
  {
    id: "hosting-server-locations",
    category: "Hosting",
    question: "Where are located server & data?",
    answer:
      "Primary server clusters reside in AWS EU regions (Ireland, Frankfurt) and South America (São Paulo), with edge points of presence globally through Cloudflare.",
  },
  {
    id: "hosting-drp-plan",
    category: "Hosting",
    question: "Do you have DRP? If yes describe it:",
    answer:
      "Yes. Our Disaster Recovery Plan uses multi-AZ automated database replication, regular S3 snapshots with cross-region capability, and automated infrastructure deployment.",
  },
  {
    id: "hosting-sla-contracts",
    category: "Hosting",
    question: "SLA and kind of contract between hoster and publisher:",
    answer:
      "We operate under AWS Enterprise service level agreements guaranteeing up to 99.99% infrastructure availability, offering contractual uptime SLAs up to 99.9% for Enterprise product tiers.",
  },
  {
    id: "switch-back-protocol",
    category: "Hosting",
    question: "What is the switch back protocol?",
    answer:
      "Following any emergency regional failover, state synchronizations are reconciled and verified before traffic is progressively switched back to primary hosting regions via automated health-checked DNS routing.",
  },
  {
    id: "security-certifications-held",
    category: "Hosting",
    question: "Do you have security certifications held and provable?",
    answer:
      "Our underlying cloud platform (AWS) holds certified ISO 27001, SOC 1/2/3, PCI DSS Level 1, and FedRAMP accreditations. UNFLD adheres to these baseline controls across all architecture implementations.",
  },
  {
    id: "code-review-practices",
    category: "Software",
    question: "Do you have code review on applications?",
    answer:
      "Yes. Mandatory peer code review is enforced on 100% of pull requests alongside automated static analysis (SAST), linter checks, and automated security scans prior to merging.",
  },
  {
    id: "regular-penetration-testing",
    category: "Software",
    question: "Do you do regular pentesting?",
    answer:
      "Yes. We conduct regular penetration testing and vulnerability assessments on key applications and edge surfaces in partnership with external cybersecurity specialists.",
  },
  {
    id: "services-used-stack",
    category: "Services and layers",
    question: "Which services are used?",
    answer:
      "Compute: AWS ECS, Lambda, EC2; Storage: AWS S3, Cloudflare R2; Database: AWS RDS (PostgreSQL/MySQL), DynamoDB; Edge & Security: Cloudflare WAF & CDN; CI/CD: GitHub Actions.",
  },
  {
    id: "application-layers-description",
    category: "Services and layers",
    question: "Describe the different layers of the application:",
    answer:
      "• Presentation Layer: Fast, responsive client interfaces built with modern web frameworks and served globally via Cloudflare / AWS CloudFront.\n• Application Layer: Modular API services and containerized backend microservices built in TypeScript/Node.js, Python, or Go.\n• Data Layer: High-availability relational databases (AWS RDS PostgreSQL) and managed document/object stores with automated encryption.",
  },
  {
    id: "technologies-used-list",
    category: "Services and layers",
    question: "List the technologies used by the application:",
    answer:
      "• Front-End: React, TanStack, TypeScript, Tailwind CSS\n• Back-End: Node.js, TypeScript, Python\n• Databases: PostgreSQL (AWS RDS), DynamoDB, S3\n• Infrastructure: AWS, Cloudflare, Docker\n• CI/CD: GitHub Actions\n• Monitoring & Telemetry: AWS CloudWatch, Datadog/ELK, structured JSON logs",
  },
  {
    id: "multi-tenant-data-separation",
    category: "Services and layers",
    question: "What technology is used to separate data between different clients?",
    answer:
      "Tenant separation is achieved through tenant isolation keys, database schema segregation, and strict row-level security (RLS) policies, preventing cross-tenant data leakage.",
  },
  {
    id: "software-third-party-interactions",
    category: "Services and layers",
    question: "Describe software interactions with other products (e.g. cloud services):",
    answer:
      "Integrations with external providers (such as payment gateways, identity providers, messaging APIs) utilize secure REST/GraphQL endpoints with encrypted TLS transmission, API keys stored in AWS Secrets Manager, and webhook signature verification.",
  },
  {
    id: "hypervisor-os-details",
    category: "Hypervisor & OS",
    question: "List hypervisor and OS used with name, version:",
    answer:
      "• Workstations: Apple macOS (latest stable versions) with FileVault encryption.\n• Servers: Hardened Linux distributions (Amazon Linux 2 / Ubuntu LTS) running on AWS Nitro / Xen virtualization hypervisors.",
  },
  {
    id: "authentication-methods",
    category: "Authentication",
    question: "List kind of authentication used by the application:",
    answer:
      "We implement OAuth 2.0, OpenID Connect (OIDC), and SAML 2.0 for enterprise single sign-on, alongside secure token-based session management and optional multi-factor authentication.",
  },
  {
    id: "sso-saml2-integration",
    category: "Authentication",
    question: "Can we use SSO with SAML2 integration?",
    answer:
      "Yes. We support enterprise SSO via SAML 2.0 and OIDC, allowing direct federation with corporate identity systems like Microsoft Entra ID (Azure AD), Okta, and Google Workspace.",
  },
  {
    id: "mfa-requirement-application",
    category: "Authentication",
    question: "Is MFA required to access the application?",
    answer:
      "MFA is mandatory for all administrative and operational access. For end-user applications, MFA is supported and can be enforced based on tenant security policies.",
  },
] as const;

export function getComplianceCategories(): ComplianceCategory[] {
  const categoriesMap = new Map<string, ComplianceItem[]>();
  
  for (const item of COMPLIANCE_ITEMS) {
    const list = categoriesMap.get(item.category) ?? [];
    list.push(item);
    categoriesMap.set(item.category, list);
  }

  const categoryDescriptions: Record<string, string> = {
    "General and PSSI": "Information Security Policy (PSSI), risk evaluation cadences, ISO 27001/27002 alignment, and vulnerability management.",
    "User awareness and training": "Security awareness curricula, phishing simulations, and privacy compliance training by role.",
    "Access Authorization Management": "Identity lifecycle, least privilege, RBAC, password policies, and multi-factor authentication.",
    "Monitoring and Traceability": "Centralized log aggregation, SIEM alerting, administrator tracing, and SOC response.",
    "Physical security": "Data center physical safeguards, AWS hosting facilities, and cabling infrastructure.",
    "Security related to operations": "Workstation hardening (macOS FileVault), patch management, and daily vulnerability detection.",
    "Security of communications": "Network segmentation, VPC architectures, Cloudflare WAF, TLS encryption, and email authentication (SPF/DKIM/DMARC).",
    "Incident Management": "Security incident response playbooks, data breach notification protocols, and disaster preparedness.",
    "Subcontracting Security": "Vendor due diligence, contractual security clauses, and supplier compliance verification.",
    "Project Information Systems": "Secure SDLC, GitHub Enterprise code controls, automated SAST, and pre-release audits.",
    "Backups Management": "Automated snapshot policies, AWS S3 storage with WORM immutability, encryption, and quarterly recovery drills.",
    "Business Continuity": "Disaster recovery planning, RTO/RPO targets, multi-region redundancy, and leadership escalation.",
    "Data Security": "Data classification tiers, AWS RDS database encryption at rest, synthetic testing data, and DLP.",
    "Compliance": "GDPR and LGPD compliance, NIS2 alignment, ISMS review cadences, and end-of-contract data reversibility.",
    "Hosting": "AWS cloud infrastructure, Cloudflare edge services, enterprise SLAs, and disaster recovery.",
    "Software": "Peer review standards, CI/CD automated security gates, and regular penetration testing.",
    "Services and layers": "Three-tier architecture, technology stack, multi-tenant data separation, and API integrations.",
    "Hypervisor & OS": "Workstation and server operating systems, AWS virtualization hypervisors, and security posture.",
    "Authentication": "Enterprise SAML 2.0/OAuth2/OIDC SSO federation, token security, and MFA enforcement.",
  };

  const categories: ComplianceCategory[] = [];

  for (const [name, items] of categoriesMap.entries()) {
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    categories.push({
      name,
      slug,
      description: categoryDescriptions[name] || "Security controls and compliance practices.",
      items,
    });
  }

  return categories;
}

export const COMPLIANCE_HIGHLIGHTS = [
  {
    title: "ISO 27001 & SOC 2 Aligned",
    desc: "Practices and internal controls calibrated against ISO 27001/27002 and SOC 2 standards.",
  },
  {
    title: "Data Residency & GDPR",
    desc: "Deployment in EU (Frankfurt, Ireland) and Brazil (São Paulo) with full GDPR and LGPD alignment.",
  },
  {
    title: "AES-256 & TLS 1.3",
    desc: "End-to-end encryption for all data at rest and in transit across applications, databases, and backups.",
  },
  {
    title: "Enterprise SSO & MFA",
    desc: "SAML 2.0, OAuth 2.0, and OpenID Connect identity federation with mandatory multi-factor authentication.",
  },
  {
    title: "Immutable Backups",
    desc: "AWS S3 WORM-protected snapshots with quarterly recovery validation drills and 99.999999999% durability.",
  },
  {
    title: "Continuous Audits & SAST",
    desc: "Automated vulnerability scanning on every pull request, peer code reviews, and regular external pentests.",
  },
] as const;
