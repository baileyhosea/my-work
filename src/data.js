export const resume = {
  profile: {
    name: 'Bailey Hosea',
    title: 'CTO and platform engineering leader',
    location: 'Knoxville, TN',
    email: 'baileyhosea18@gmail.com',
    phone: '(865) 621-0672',
    linkedin: 'LinkedIn',
    github: 'baileyhosea/my-work',
    summary:
      'CTO and platform engineering leader with nearly 9 years of experience building cloud infrastructure, internal developer platforms, and agentic AI systems across AWS and Azure. Proven history of delivering measurable business impact through automation, platform standardization, and production-ready AI workflows. Deep expertise in Terraform, Kubernetes, serverless architecture, CI/CD, and full-stack product delivery.',
  },
  stats: [
    { label: 'Years building', value: '9+' },
    { label: 'Cloud focus', value: 'AWS + Azure' },
    { label: 'Core lane', value: 'Platforms + AI' },
  ],
  modeSpotlights: {
    terminal: {
      label: 'Terminal + Schema Hybrid',
      intro: 'Command-line clarity for platform systems, AI workflows, and measurable delivery.',
      sample: [
        '> resume run --focus impact',
        '{ role: "CTO", stack: ["Terraform", "Kubernetes", "OpenAI"], status: "live" }',
      ],
    },
    json: {
      label: 'JSON Blueprint',
      intro: 'Structured, inspectable, and tuned for signal density.',
      sample: [
        '{',
        '  "owner": "bailey-hosea",',
        '  "outputs": ["cloud platforms", "agentic automation", "exec metrics"]',
        '}',
      ],
    },
    classic: {
      label: 'Minimal Portfolio Classic',
      intro: 'An editorial layout that keeps the hierarchy calm, sharp, and credible.',
      sample: [
        'Build platforms that compound capability.',
        'Ship automation that turns team time into leverage.',
      ],
    },
  },
  highlights: [
    {
      label: 'Operational leverage',
      value: '4 FTE',
      detail: 'Eliminated through email automation that processed roughly 5,000 messages weekly.',
    },
    {
      label: 'Annual savings',
      value: '$6M',
      detail: 'Developer time saved by improving shared provisioning workflows at Fidelity.',
    },
    {
      label: 'AI in production',
      value: 'Live',
      detail: 'Delivered agentic intake, negotiation, and voice workflows used in active operations.',
    },
  ],
  experienceHighlights: [
    'Built a full-stack financial analytics platform used by executive and operations stakeholders to surface reduction and closure performance gaps.',
    'Launched AI-driven negotiation and intake systems that automated healthcare and legal workflows with real operational use.',
    'Improved shared infrastructure delivery by standardizing Terraform modules, CI/CD, and platform patterns across AWS and Azure.',
  ],
  experience: [
    {
      company: 'Kapsa',
      title: 'Chief Technology Officer',
      period: 'Nov 2025 - Present',
      highlights: [
        'Architected and launched agent-to-agent services powering AI automation for healthcare and legal workflows.',
        'Built a full-stack financial analytics platform for executive and operations stakeholders, revealing reps with up to 40% better reduction outcomes, states with up to 30% better performance, and attorneys with up to 50% better reduction and closure performance.',
        'Built an AI-driven negotiation engine now used in live patient-bill negotiations typically ranging from $10K to $60K.',
        'Automated referral intake from clinic email by extracting and summarizing 8-10 page evaluations into patient profiles, saving the virtual care coordinator about 2 hours per day.',
        'Built an agentic email automation workflow that classified unstructured updates and processed about 5,000 emails weekly, eliminating work equivalent to 4 FTEs and saving about $160K annually.',
        'Designed and deployed cost-efficient AWS serverless architecture with CloudFront, S3, Lambda, and DynamoDB using Terraform.',
      ],
    },
    {
      company: 'Blue Sentry Cloud',
      title: 'DevOps Team Lead',
      period: 'Mar 2023 - Nov 2025',
      highlights: [
        'Led a DevOps team delivering reusable AWS and Azure platform patterns for enterprise and mid-size clients.',
        'Delivered a shared Azure architecture for Northern Trust, onboarding 3 applications in 4 months against a 6-month target and helping secure several million dollars in Azure credits.',
        'Expanded hardened Terraform module adoption by publishing terraform-docs and working examples that improved implementation consistency for internal teams.',
        'Implemented CI/CD standards with GitHub Actions and Jenkins; built Jenkins catalogs used by thousands of developers.',
        'Led a microservices migration for an internal app consumed about 400K times per year.',
        'Optimized Fidelity shared provisioning workflows, saving 120,000 developer hours annually (about $6M in developer time using conservative assumptions).',
      ],
    },
    {
      company: 'Blue Sentry Cloud',
      title: 'DevOps Engineer',
      period: 'Dec 2019 - Mar 2023',
      highlights: [
        'Managed Terraform (Terraform Cloud, Env0) and CloudFormation across multi-account, multi-region AWS environments.',
        'Operated shared EKS and centralized Argo CD supporting dozens of teams and 500+ applications with standardized GitOps delivery.',
        'Maintained 3 EKS clusters with 50+ nodes and 400+ services using Helm and Argo CD.',
        'Implemented Security Hub, AWS Config, GuardDuty, and Inspector across client accounts using Terragrunt automation.',
        'Automated patching for 150 EC2 instances via AWS Systems Manager, standardizing Sunday maintenance and reducing manual effort.',
        'Saved one client $80K annually by identifying and removing unused EBS volumes through Python-based automation.',
      ],
    },
    {
      company: 'Pilot Flying J',
      title: 'DevOps Engineer II',
      period: 'Nov 2019 - Aug 2021',
      highlights: [
        'Supported MLOps infrastructure for a 30-person data science organization and pricing optimization across 1,500 stores.',
        'Built infrastructure and CI/CD for pricing pipelines running every 24 hours for a core fuel-pricing product.',
        'Developed AWS EMR, AWS Batch, Docker, and ECS automation for large-scale data processing and model execution.',
        'Built the organization\'s first Docker pipeline and first containerized application integrated with JFrog Artifactory.',
        'Built the first Packer pipeline to automate release of golden base AMIs.',
      ],
    },
    {
      company: 'CDM Smith',
      title: 'Cloud Computing Specialist',
      period: 'Apr 2019 - Nov 2019',
      highlights: [
        'Implemented CodeCommit-based version control, testing, and packaging workflows for Lambda functions.',
        'Established AWS Data Lifecycle Management policies for nightly snapshots across 900 volumes.',
        'Built infrastructure automation that scaled EC2 fleets from 2 to 200 instances across one region and two availability zones.',
        'Automated operating system upgrades through AWS Systems Manager as part of a high-value modernization effort.',
        'Supported EC2, networking, and EKS issue resolution across cloud environments.',
      ],
    },
    {
      company: 'Fidelity Investments',
      title: 'Associate Systems Engineer, Enterprise Cloud Computing',
      period: 'May 2018 - Apr 2019',
      highlights: [
        'Built Python Flask REST APIs on Docker and AWS EC2 for cloud account operations.',
        'Supported creation of 5,000+ AWS accounts through Concourse pipelines, containerized services, and PostgreSQL RDS backends.',
        'Developed REST endpoints covering GET, POST, PUT, and DELETE operations for customer account workflows.',
      ],
    },
  ],
  projects: [
    {
      name: 'Agent-to-agent automation platform',
      summary: 'Built production AI workflows that route intake, classification, and orchestration across healthcare and legal operations.',
      impact: 'Used in live workflows with measurable time savings and fewer manual handoffs.',
      stack: ['OpenAI', 'websockets', 'serverless AWS', 'Terraform'],
    },
    {
      name: 'Negotiation and analytics engine',
      summary: 'Created a decision-support layer for bill negotiation and reduction performance analysis across executive stakeholders.',
      impact: 'Exposed performance gaps by rep, state, and attorney to guide better outcomes.',
      stack: ['data analytics', 'full-stack app', 'cloud UI', 'automation'],
    },
    {
      name: 'Platform standardization toolkit',
      summary: 'Helped shape hardened Terraform modules and deployment patterns that internal teams could adopt with less friction.',
      impact: 'Improved consistency, speed, and trust in shared infrastructure delivery.',
      stack: ['Terraform', 'AWS', 'Azure', 'CI/CD'],
    },
    {
      name: 'Provisioning workflow optimizer',
      summary: 'Developed tooling to improve compute sizing and reduce waste in cloud provisioning pipelines.',
      impact: 'Contributed to 120,000 developer hours saved annually in shared workflow optimization.',
      stack: ['Python', 'automation', 'cost analysis', 'platform ops'],
    },
  ],
  skills: [
    {
      group: 'Cloud & Platform',
      items: ['AWS', 'Azure', 'Kubernetes', 'EKS', 'AKS', 'ECS', 'Fargate', 'Serverless'],
    },
    {
      group: 'IaC & Automation',
      items: ['Terraform', 'Terragrunt', 'CloudFormation', 'Packer', 'AWS Systems Manager'],
    },
    {
      group: 'CI/CD & GitOps',
      items: ['GitHub Actions', 'Jenkins', 'Concourse', 'Argo CD', 'Helm', 'CodeCommit'],
    },
    {
      group: 'MLOps & Data',
      items: ['AWS Batch', 'EMR', 'mlflow'],
    },
    {
      group: 'Observability',
      items: ['Prometheus', 'Grafana', 'Datadog', 'CloudWatch'],
    },
    {
      group: 'Languages',
      items: ['Python', 'Bash', 'Java'],
    },
    {
      group: 'Data & Storage',
      items: ['DynamoDB', 'PostgreSQL', 'Aurora', 'RDS', 'S3'],
    },
    {
      group: 'Security & Ops',
      items: ['AWS Config', 'GuardDuty', 'Security Hub', 'Inspector', 'Azure AD'],
    },
    {
      group: 'Other',
      items: ['JFrog Artifactory', 'Twilio', 'API Management', 'Internal Developer Platforms', 'Agentic AI Systems', 'Disaster Recovery', 'GitHub Administration'],
    },
  ],
  certifications: [
    'AWS Certified Solutions Architect - Professional',
    'AWS Certified DevOps Engineer - Professional',
    'AWS Certified Solutions Architect - Associate',
    'AWS Certified SysOps Administrator - Associate',
    'AWS Certified Developer - Associate',
    'AWS Certified Security Specialty',
    'AWS Certified Cloud Practitioner',
    'Azure AZ-900',
    'Terraform certification',
  ],
  education: {
    school: 'University of North Texas',
    degree: 'Bachelor of Science, Computer Information Systems',
    gpa: '3.8',
  },
  downloads: [
    { label: 'PDF resume', href: 'downloads/bailey_hosea_resume_optimized.pdf' },
    { label: 'DOCX resume', href: 'downloads/bailey_hosea_resume_optimized.docx' },
  ],
};

export const modeOrder = ['terminal', 'json', 'classic'];

export const modeThemeMeta = {
  terminal: {
    label: 'Terminal + Schema Hybrid',
    summary: 'High-signal, command-line clarity with structured data accents.',
    themeColor: '#08111a',
  },
  json: {
    label: 'JSON Blueprint',
    summary: 'Inspect-able and schema-forward, with more literal structure cues.',
    themeColor: '#f5f0e7',
  },
  classic: {
    label: 'Minimal Portfolio Classic',
    summary: 'Editorial, calm, and polished with a restrained developer edge.',
    themeColor: '#f4efe7',
  },
};
