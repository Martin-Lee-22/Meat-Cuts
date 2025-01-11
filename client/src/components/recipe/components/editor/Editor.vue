<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import EditorPanel from "./EditorPanel.vue";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import ImageResize from "tiptap-extension-resize-image";
import FileHandler from "@tiptap-pro/extension-file-handler";
import Placeholder from "@tiptap/extension-placeholder";
import Youtube from "@tiptap/extension-youtube";
import HardBreak from "@tiptap/extension-hard-break";
import { useRecipeStore } from "@/stores/recipe";
import { ref } from "vue";
import Underline from "@tiptap/extension-underline";

const recipe = ref(useRecipeStore().getRecipe());
const props = defineProps({
  extensions: { type: Object },
  content: { type: String },
});

const editor = useEditor({
  content: props.content,
  onUpdate: ({ editor }) => {
    recipe.value.article = editor.getHTML();
  },
  extensions: [
    StarterKit,
    Highlight,
    HardBreak.extend({
      addKeyboardShortcuts() {
        return { Enter: () => this.editor.commands.setHardBreak() };
      },
    }),
    Underline,
    ImageResize,
    Youtube,
    TextAlign.configure({
      types: ["heading", "paragraph", "bulletList", "orderedList", "youtube"],
    }),
    Placeholder.configure({ placeholder: "Start typing here..." }),
    Image.configure({ allowBase64: true }),
    FileHandler.configure({
      allowedMimeTypes: ["image/png", "image/jpeg", "image/gif", "image/webp"],
      onDrop: (currentEditor, files, pos) => {
        files.forEach((file) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            currentEditor
              .chain()
              .insertContentAt(pos, {
                type: "image",
                attrs: {
                  src: fileReader.result,
                },
              })
              .focus()
              .run();
          };
        });
      },
      onPaste: (currentEditor, files, htmlContent) => {
        files.forEach((file) => {
          if (htmlContent) {
            // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
            // you could extract the pasted file from this url string and upload it to a server for example
            console.log(htmlContent); // eslint-disable-line no-console
            return false;
          }

          const fileReader = new FileReader();

          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            currentEditor
              .chain()
              .insertContentAt(currentEditor.state.selection.anchor, {
                type: "image",
                attrs: {
                  src: fileReader.result,
                },
              })
              .focus()
              .run();
          };
        });
      },
    }),
  ],
});

function onSubmit(e: Event) {
  e.preventDefault();
}
</script>

<template>
  <form class="editor-container" @submit="onSubmit">
    <editor-content :editor="editor" />
    <EditorPanel :editor="editor" :extensions="extensions" />
    <input v-if="extensions?.addPost" type="submit" value="Post" />
  </form>
</template>

<style lang="css" scoped>
.editor-container {
  position: relative;
  margin-top: 20px;
}
input[type="submit"] {
  float: right;
  margin-top: 0.75rem;
  background-color: transparent;
  border: 1px solid rgb(185, 185, 185);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 400;
  font-size: 0.89rem;
  &:hover {
    cursor: pointer;
    background-color: rgb(240, 240, 240);
  }
}
:deep(.tiptap) {
  border: 1px solid rgb(216, 216, 216);
  padding: 1rem 1rem 3rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  &:focus {
    outline: 1px solid black;
  }
  & p.is-editor-empty:first-child::before {
    color: gray;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }
}
</style>
