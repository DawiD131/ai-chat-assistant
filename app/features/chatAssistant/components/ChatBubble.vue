<script lang="ts" setup>
import { Marked } from "marked";
import hljs from "highlight.js";
import { markedHighlight } from "marked-highlight";
import "highlight.js/styles/an-old-hope.css";
interface Props {
  message: string;
  isAnswer?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isAnswer: false,
});

const backgroundColor = computed(() =>
  props.isAnswer ? "bg-gray-700" : "bg-primary-600",
);

const renderedMarkdown = ref("");

const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
);

const renderMarkdown = async (markdown: string) => {
  renderedMarkdown.value = await marked.parse(markdown);
};

watch(
  () => props.message,
  (newContent) => {
    renderMarkdown(newContent);
  },
);

renderMarkdown(props.message);
</script>

<template>
  <div class="rounded-md flex p-2 max-w-[90%] text-sm" :class="backgroundColor">
    <div v-html="renderedMarkdown"></div>
  </div>
</template>

<style>
code {
  border-radius: 8px;
  margin: 10px 0;
  display: block;
  max-width: calc(100% - 1px);
}

pre {
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
