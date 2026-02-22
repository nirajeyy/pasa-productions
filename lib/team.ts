import { client } from '../sanity/lib/client'
import { teamMembersQuery, teamMemberBySlugQuery } from '../sanity/lib/queries'
import { TeamMember } from '../types'

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(teamMembersQuery)
}

export async function getTeamMemberBySlug(slug: string): Promise<TeamMember | null> {
  return client.fetch(teamMemberBySlugQuery, { slug })
}
