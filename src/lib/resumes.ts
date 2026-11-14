export const RESUMES = {
 coding: { label: 'Coding', title: 'Coding Resume', description: 'Software development, applications, web technology and education.', pdf: '/resumes/resume_coding.pdf', preview: '/resumes/resume_coding.png', route: '/resume/coding', home: '/coding' },
 editing: { label: 'Editing', title: 'Editing Resume', description: 'Video editing, graphic design, creative experience and education.', pdf: '/resumes/resume_editing.pdf', preview: '/resumes/resume_editing.png', route: '/editing/resume', home: '/editing' },
} as const;
export type ResumeKind = keyof typeof RESUMES;
