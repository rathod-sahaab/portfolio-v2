export class Tag {
  id: string
  name: string
}

export class SkillAspect {
  name: string
  description: string
}

/**
 * Skill certification
 */
export class SkillCert {
  issuer: string
  certification: string
  link: string
}
