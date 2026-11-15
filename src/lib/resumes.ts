export const RESUMES = {
 coding: { label: 'Coding', title: 'Coding Resume', description: 'View Anshdeep Singh’s software development resume, including programming skills, applications, web technologies, education and practical experience.', pdf: '/resumes/resume_coding.pdf', preview: '/resumes/resume_coding.png', route: '/resume/coding', home: '/coding' },
 editing: { label: 'Editing', title: 'Editing Resume', description: 'View Anshdeep Singh’s video editing and graphic design resume, featuring creative experience, editing tools, project work and education.', pdf: '/resumes/resume_editing.pdf', preview: '/resumes/resume_editing.png', route: '/editing/resume', home: '/editing' },
} as const;
export type ResumeKind = keyof typeof RESUMES;
