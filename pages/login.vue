<script lang="ts" setup>
import { useSupabaseClient } from "#imports";
import { object, string } from "yup";

const client = useSupabaseClient();
const router = useRouter();
const user = useSupabaseUser();

const state = reactive({
  email: "",
  password: "",
});
async function login() {
  const { error } = await client.auth.signInWithPassword({
    email: state.email,
    password: state.password,
  });
  if (!error) return router.push("/");
  console.log(error);
}

watchEffect(async () => {
  if (user.value) {
    await router.push("/");
  }
});

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

const onSubmit = async () => {
  await login();
};
</script>

<template>
  <main class="flex justify-center items-center min-h-[100vh]">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>
      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>
      <UButton type="submit" block> Login </UButton>
    </UForm>
  </main>
</template>
