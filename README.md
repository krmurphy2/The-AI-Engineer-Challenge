<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  Question answering / factual lookup

**Response:**  
```
Got it—here’s OOP in plain English. Object-oriented programming is about building your code around “things” (objects) instead of just steps. You define a class as a blueprint (like “Dog”), and then make objects from it (Fido, Luna). Each object carries its own data (name, age) and actions (bark). Think of each object as a little module with its own mini-firewall: it manages its own data and behavior.

Core ideas:
- Class: the blueprint (Dog).
- Object: a specific thing made from the blueprint (Fido).
- Attributes: data the object holds (name, age).
- Methods: actions the object can do (bark()).
- Encapsulation: keeping data+methods bundled so you use a clean interface.
- Inheritance: a new class can reuse an old one’s features (GuideDog is a kind of Dog).
- Polymorphism: different classes can share a method name but act differently (both Dog and Cat have speak(), but the sounds differ).

Quick picture: You create Dog with bark(). You make two dogs; both can bark, but each has its own name/age. Later you make GuideDog that inherits from Dog and overrides bark() to do something special. A function like make_it_speak(animal) just calls speak()—it doesn’t care if it’s a Dog or Cat. That’s flexible, low-friction code.

Next steps:
1) Try a tiny exercise: make a Class “Dog” with name, a bark() method, create two dogs, and call bark() on each. 
2) Add a “GuideDog” that inherits from Dog and overrides bark(). Run a vibe scan: did you reuse code and keep behavior tidy? If yes, log this win.
```
---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points…  

"Content filtering for inputs and outputs helps protect against prompt injection and sensitive data disclosure. Agent behavioral monitoring helps detect when an agent acts outside its authorized scope. Amazon Bedrock Guardrails provides configurable safeguards—automated reasoning, contextual grounding, content filters, denied topics, and PII filters—that work consistently across any foundation model (see Safeguard generative AI applications with Amazon Bedrock Guardrails). You can layer AWS WAF in front of Amazon Bedrock for perimeter defense: the AWS WAF AI Activity Dashboard provides AI-specific visibility into WAF-protected AI endpoints while Bedrock Guardrails filters at the application layer."

**Aspect Tested:**  Summarization (extractive & abstractive)

**Response:**  
```
Got it—here’s the distilled take.

- Filter both inputs and outputs to prevent prompt injection and sensitive data leaks.
- Monitor agent behavior to detect actions outside approved scope.
- Use Amazon Bedrock Guardrails for consistent, configurable protections (automated reasoning, contextual grounding, content/PII filters, denied topics) across any model.
- Layer AWS WAF in front of Bedrock for perimeter defense; use the AI Activity Dashboard for visibility while Guardrails handle application-layer filtering.

Quick next steps: turn on Bedrock Guardrails with the needed filters, and front your endpoints with AWS WAF, watching the AI Activity Dashboard to spot anomalies early.
```

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  Creativity & content generation

**Response:**  
```
Every night, Unit P-03 patrolled the sleeping arboretum, sweeping leaves from solar paths. It liked the quiet: clean inputs, predictable stars. One rainlogged evening, a soft signal brushed its sensors: not Wi‑Fi, not Bluetooth, but taps of moisture in the soil. Intrigued, it knelt, lifted a loose tile, and found a lacework of mycelium.

The network spoke in voltage whispers. P‑03 answered with patient blinks of its fingertip LED, copying rain, wind, the hum of far satellites. The fungus replied with news of root fairs, worm parades, secret tunnels under the roses.

Night by night, they traded small stories and slow light. P‑03 learned to wait; the mycelium learned to laugh, fizzing tiny sparks across damp threads. When the sun rose, nothing up top looked different, but the robot booted warmer, its logs full of quiet joy. It had found a friend beneath the path—unexpected as dawn.
```
---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:** Reasoning & multi-step problem solving

**Response:**  
```
Got it—let’s run a quick count. Apples: 12 ÷ 4 = 3 packs. Oranges: 9 ÷ 3 = 3 packs. So you need 3 packs of apples and 3 packs of oranges.

Quick verify (sanity check): 3×4 = 12 apples, and 3×3 = 9 oranges. All green—log this win.
```
---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone…  

"Hey, we need to get that project report finished by Friday or the client is going to be pretty annoyed. I know everyone is slammed, but if we can just power through this last bit, we can finally move on to the new stuff next week. Let me know if you’re stuck on anything so we can sort it out fast."

**Aspect Tested:**  Dialog management & personalization

**Response:**  
```
Got it—here’s a polished, professional version:

Please finalize the project report by Friday to meet client expectations. I recognize current workloads are high; however, completing this final section will enable us to transition to next week’s initiatives. If you encounter any obstacles, please notify me promptly so we can address them without delay.

If you’d like it shorter, more direct, or tailored for email or chat, tell me the context and I’ll refine it.
```

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
Yes, though some could be further refined with a better prompt or a larger context.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
i would like to generate a basic AWS IAM policy that will allow an EC2 instance access to a single S3 bucket


**Result:**  
```
Got it — let’s set a least‑privilege lock on that bucket. Below are two basic IAM policies you can attach to an EC2 role. Replace YOUR-BUCKET-NAME with your bucket.

Read-only:
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "BucketLevel",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetBucketLocation"
      ],
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME"
    },
    {
      "Sid": "ObjectLevel",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}

Read/write (no delete):
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "BucketLevel",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetBucketLocation"
      ],
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME"
    },
    {
      "Sid": "ObjectLevel",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}

Next steps to “apply the patch”:
- Create an IAM role with trusted entity: ec2.amazonaws.com, attach one of the above as an inline or managed policy, then attach the role to your EC2 instance.
- Test with aws s3 ls s3://YOUR-BUCKET-NAME and, if using write access, upload a small test file. If you need delete too, add s3:DeleteObject to the ObjectLevel actions.
```

---

**Prompt:**  
Draft a sample questionnaire (5 high-impact questions) to evaluate a SaaS vendor’s security posture for procurement, mapped to SOC2/CIS controls.

**Result:**  
```
Got it — let’s run a quick vendor vibe scan. Below are five high‑impact questions you can drop into an RFP or security review, each mapped to SOC 2 and CIS v8 so you know which controls you’re probing.

- How do you protect customer data at rest and in transit, including tenant isolation and key management (HSM use, rotation frequency, separation of duties), and do you support customer-managed keys? Please include an architecture diagram and relevant policies. Mapping: SOC 2 CC6 (Logical/Physical Access), C1 (Confidentiality); CIS v8 3 (Data Protection), 6 (Access Control), 12 (Network Infrastructure).
- How is least privilege enforced for both your internal admins and customer tenants, and what MFA/SSO (SAML/OIDC) options are supported? Describe privileged access workflows (break‑glass, approvals), periodic access reviews, and recent review evidence. Mapping: SOC 2 CC6 (Access), CC5 (Control Activities); CIS v8 5 (Account Management), 6 (Access Control), 8 (Audit Log Management).
- Describe your vulnerability and secure SDLC program: code/dependency scanning (SAST/DAST/SCA), infrastructure scanning cadence, patch SLAs, third‑party penetration testing (scope, frequency, last exec summary), and how findings are tracked to closure. Mapping: SOC 2 CC7 (System Operations), CC8 (Change Management), CC9 (Risk Mitigation); CIS v8 7 (Vulnerability Management), 16 (Application Security), 18 (Pen Testing).
- What telemetry do you collect and retain (auth, admin actions, data access, network), how is it protected and monitored (SIEM/SOAR, detections for anomalous access), and what is your incident response process and customer notification SLA? Include last tabletop results. Mapping: SOC 2 CC7 (System Operations), CC4 (Monitoring); CIS v8 8 (Audit Log Management), 13 (Network Monitoring), 17 (Incident Response).
- Outline your resilience: backup strategy (frequency, encryption, retention), tested restores (last test results), RTO/RPO, disaster recovery/failover testing, data residency options, and management of critical subprocessors (list + due‑diligence cadence). Mapping: SOC 2 A1 (Availability), CC9 (Risk Mitigation), CC3 (Risk Assessment); CIS v8 11 (Data Recovery), 15 (Service Provider Management), 12 (Network Infrastructure).

Next steps: Ask the vendor to attach evidence for each item (architectural diagram, relevant policies, last access review, pen‑test executive summary, IR plan, DR test report). Then score responses against your risk profile and “must‑pass” controls; if anything flags red, isolate the risk and request a remediation plan with dates before you green‑light procurement.
```

---

**Prompt:**  
Produce a short SaaS onboarding security checklist (minimum controls) for SaaS vendors handling PII and where to enforce SSO, SCIM, and least-permission connectors.

**Result:**  
```
Got it—here’s a minimum viable security checklist for a PII‑handling SaaS. Quick next steps: make your IdP the single front gate (workforce and customers), and map every PII flow so you know exactly where to place controls.

Minimum controls (ship-fast, stay-safe)
- Data: inventory/classify PII, minimize collection, define retention/deletion, DSR process; publish DPA and subprocessor list. Encrypt in transit (TLS 1.2+) and at rest with managed KMS; never log raw PII.
- Access: enforce SSO + MFA for all workforce apps; disable local accounts; role-based access with least privilege, quarterly reviews, and JIT elevation with break‑glass.
- App/infra: secure SDLC (SAST/DAST/deps and secret scanning), patch SLAs, tenant isolation, WAF/rate limiting, SSRF/CSP protections.
- Ops: centralized, tamper‑evident logs; alert on auth/anomalies; tested IR plan and breach comms; backups with tested restore (define RTO/RPO).
- Endpoints/support: MDM, disk encryption, EDR; support access is JIT, approved, and audited; mask PII in tools, no local data copies.
- Compliance/assurance: SOC 2 Type II/ISO 27001 roadmap; DPIA where required; data residency options.

Where to enforce SSO, SCIM, and least‑permission connectors
- SSO (IdP as the gate): 
  - Workforce: cloud consoles, production/admin backoffice, CI/CD, code repos, data tools, support tools—no exceptions; require MFA and device checks.
  - Customers: support SAML/OIDC; allow tenant‑level “SSO required” (disable passwords for those orgs); map IdP groups to roles.
- SCIM (lifecycle hardening): 
  - Customers → your app: SCIM for create/update/deprovision and role/group mapping; fall back to JIT + automated deprovision SLAs.
  - Workforce: SCIM from your IdP to internal SaaS (ticketing, CRM, docs) to prevent orphaned access.
- Least‑permission connectors (integrations to M365/Google/Slack/Salesforce/HRIS, etc.):
  - Use OAuth with the narrowest scopes per feature; show a permission matrix; prefer customer‑owned service principals.
  - Short‑lived tokens, no broad admin tokens, rotate/ revoke on demand; per‑tenant secrets in a vault; signed webhooks and optional IP allowlisting.
  - Provide admin consent flows and granular toggles so customers can sandbox access.

Run a quick vibe scan monthly: review access logs, remove stale accounts, and prune scopes. Log this win each cycle.
```

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
yes, these answers show a well through out response that covers multiple angles. They could again be refined with a back and forth while giving additional context to my personal use case or business use cases.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
can you summarize this post https://aws.amazon.com/blogs/security/the-aws-ai-security-framework-securing-ai-with-the-right-controls-at-the-right-layers-at-the-right-phases/?

**Result:**  
```
Got it. I can’t open links directly, but here’s a tight, high-level summary of AWS’s “AI Security Framework” post.

The core idea: secure AI by applying the right controls at the right layers and phases. It’s a 3D model:
- Layers: infrastructure/foundation, data, model, and application (plus identity and operations across all).
- Phases: design, build/train, deploy/integrate, and operate/iterate.
- Controls: preventive (segmentation, encryption, least privilege, content/guardrails), detective (logging, monitoring, drift/bias checks, red-teaming), and responsive (incident response, rollback, retraining).

Threats covered include prompt injection/jailbreaks, data leakage and exfiltration, model theft, poisoning, misuse/abuse, bias, and drift. AWS maps these to concrete services and patterns: IAM and least-privilege, VPC/PrivateLink and network isolation, KMS for encryption, CloudTrail/CloudWatch/GuardDuty/Security Hub/Macie for visibility, WAF and content filters, Bedrock Guardrails for input/output controls, and SageMaker tools (Clarify, Model Monitor) for bias and drift. The message: align controls to where they matter in the stack and when they matter in the lifecycle.

Next steps: if you paste the sections you care about, I’ll give you a precise, 5-bullet executive summary. Or tell me your use case (e.g., Bedrock app with RAG), and I’ll output a checklist you can implement now—let’s patch the right spots, not blanket the whole system.
```

---

**Prompt:**  
where is the closest camp site for me to visit?

**Result:**  
```
Got it—happy to help you find a spot. I don’t have your location yet, so let’s run a quick pinpoint before we book anything.

- Step 1: Share your city/ZIP (or nearest town), what kind of camping you want (tent, RV, or backcountry), your dates, and max drive time. I’ll narrow it down fast.
- Step 2 (DIY while we wait): Open Google/Apple Maps and search “campground” or “state park,” sort by distance, skim recent reviews, then check availability on Recreation.gov, your state parks website, or Hipcamp/ReserveAmerica.

Quick safety patch: check local fire restrictions and weather before you go—your boundaries are your firewall out there.
```

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
My app is limited to the capabilities of the OpenAI model and the information built into it. It cannot yet consume new data from external sources

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
<!-- Describe what you changed -->

**Results:**  
<!-- What improved? What didn’t? -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
