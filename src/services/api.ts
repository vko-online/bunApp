import { Profile } from 'src/store/model'

enum Decision {
  SKIP,
  LIKE,
  DISLIKE
}

export default class FirebaseApi {
  async getCurrentUserProfile (): Promise<Profile> {
    throw new Error('not implemented')
  }

  async getProfiles (): Promise<Profile[]> {
    throw new Error('not implemented')
  }

  async getConversations (): Promise<Profile[]> {
    throw new Error('not implemented')
  }

  async sendMessage (): Promise<void> {
    throw new Error('not implemented')
  }

  async makeDecision (decision: Decision): Promise<void> {
    throw new Error('not implemented')
  }
}
