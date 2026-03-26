import { ContactFooter } from "@/components/portfolio/ContactFooter";
import { CredentialsBlock } from "@/components/portfolio/CredentialsBlock";
import { ExperienceList } from "@/components/portfolio/ExperienceList";
import { Hero } from "@/components/portfolio/Hero";
import { NavCapsule } from "@/components/portfolio/NavCapsule";
import { Section } from "@/components/portfolio/Section";
import { SiteShell } from "@/components/portfolio/SiteShell";
import { SkillConstellation } from "@/components/portfolio/SkillConstellation";
import { resume } from "@/lib/resume";

export default function Home() {
  return (
    <SiteShell>
      <a
        href="#intro"
        className="fixed left-4 top-4 z-[100] -translate-y-[220%] rounded-lg bg-nebula-teal px-4 py-2 font-mono text-sm text-void shadow-lg transition-transform duration-200 focus-visible:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text-primary"
      >
        Skip to main content
      </a>
      <NavCapsule />
      <main>
        <Hero />
        <Section
          id="experience"
          guideKicker="Work history"
          title="Experience"
          narrator="What I'm shipping now first, then the path backward. Newest to oldest, with room for the work that mattered at each stop."
        >
          <ExperienceList jobs={resume.experience} />
        </Section>
        <Section
          id="skills"
          guideKicker="Technical skills"
          title="Skills"
          narrator="Stack and tools I use regularly, grouped for quick scanning."
          channelBreak
        >
          <SkillConstellation groups={resume.skillGroups} />
        </Section>
        <Section
          id="credentials"
          guideKicker="Education & certifications"
          title="Credentials"
          narrator="Degrees, a GCP certification, and an award from a project I am still proud of."
        >
          <CredentialsBlock
            certifications={resume.certifications}
            education={resume.education}
            awards={resume.awards}
          />
        </Section>
      </main>
      <ContactFooter />
    </SiteShell>
  );
}
