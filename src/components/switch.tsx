import { FC, useRef } from 'react'
import { useSwitch } from '@react-aria/switch'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useToggleState } from '@react-stately/toggle'
import { useFocusRing } from '@react-aria/focus'
import { ToggleProps } from '@react-types/checkbox'

interface Props extends ToggleProps {}

export const Switch: FC<Props> = (props) => {
  const state = useToggleState(props)
  const ref = useRef<HTMLInputElement>(null)
  const { inputProps } = useSwitch(props, state, ref)
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <label className="inline-flex items-center">
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <svg width={40} height={24} aria-hidden="true" className="mr-2">
        <rect
          className={state.isSelected ? 'fill-primary' : 'fill-display'}
          x={4}
          y={4}
          width={32}
          height={16}
          rx={8}
        />
        <circle
          cx={state.isSelected ? 28 : 12}
          cy={12}
          r={5}
          className="fill-background"
        />
        {isFocusVisible && (
          <rect
            className="stroke-primary"
            x={1}
            y={1}
            width={38}
            height={22}
            rx={11}
            fill="none"
            strokeWidth={2}
          />
        )}
      </svg>
      {props.children}
    </label>
  )
}
