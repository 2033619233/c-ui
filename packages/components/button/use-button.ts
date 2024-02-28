import { SetupContext, ref } from "vue"
import { ButtonProps, ButtonEmits } from "./button"

export const useButton = (
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>["emit"]
) => {
  const _ref = ref<HTMLButtonElement>()

  const handleClick = (evt: MouseEvent) => {
    emit("click", evt)
  }
  return {
    handleClick,
    _ref
  }
}
