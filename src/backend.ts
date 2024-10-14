import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types'
import { ref } from 'vue'
import { type UsersResponse } from './pocketbase-types'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

import.meta.env.VITE_URL_POCKETBASE

/**Déconnecte l'utilisateur */
export function logout() {
    pb.authStore.clear()
    // location.reload()
  }
  
  /** Connecte l'utilisateur avec GitHub*/
  export async function loginWithGitHub() {
    const authData = await pb
      .collection("users")
      .authWithOAuth2({provider: "github"});
    console.log("loginWithGitHub authData",authData)
  }

  /** Connecte l'utilisateur avec Google*/
    export async function loginWithGoogle() {
      const authData = await pb
        .collection("users")
        .authWithOAuth2({provider: "google"});
      console.log("loginWithGoogle authData",authData)
    }
  /** Utilisteur connecté */
  export const user = ref<UsersResponse | null>(null)
  pb.authStore.onChange((token, model) => {
    user.value = model as UsersResponse
  }, true /* lancé de suite */)
  

  