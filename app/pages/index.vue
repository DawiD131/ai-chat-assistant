<script lang="ts" setup>
import { object, string } from "yup";
import { useAuthStore } from "~/features/chatAssistant/core/auth/useAuthStore";

const router = useRouter();

const state = reactive({
  email: "",
  password: "",
});

const authStore = useAuthStore();

watch(
  computed(() => authStore.isAuthenticated),
  async (value) => {
    console.log("hello!");

    if (value) {
      console.log("redirect!");
      await router.push("/chat-assistant");
    }
  },
  { immediate: true },
);

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

const onSubmit = async () => {
  await authStore.login({
    email: state.email,
    password: state.password,
  });
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
