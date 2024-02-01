import { StateCreator } from 'zustand'

export interface UserSlice {
  user: { age: number }
  handleIncrementUserAge: () => void
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: { age: 0 },
  handleIncrementUserAge: () => set(({ user }) => ({ user: { age: user.age + 1 } }))
})
