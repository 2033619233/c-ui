<template>
  <button @click="handleClick" ref="_ref"><slot /></button>
</template>

<script setup lang="ts">
import {
  toRefs,
  watch,
  useAttrs,
  computed,
  ref,
  reactive,
  toRaw,
  onMounted,
} from "vue"
import { buttonProps } from "./button"
import { useButton } from "./use-button"

defineOptions({
  name: "CButton",
})

const emit = defineEmits([""])
const props = defineProps(buttonProps)
const { handleClick, _ref } = useButton(props, emit)

defineExpose({
  ref: _ref,
})
</script>

<style lang="less" scoped></style>
