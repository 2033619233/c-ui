import { ExtractPropTypes } from "vue"

export const buttonProps = {
    disabled: Boolean,
}

export const buttonEmits = {
    click: (evt:MouseEvent) => void
}


export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits