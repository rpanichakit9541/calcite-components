# calcite-popover

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                                | Type                                                                                                                                                                                                                                                                                                              | Default     |
| ------------------ | ------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `addClickHandle`   | `add-click-handle`  | Adds a click handler to the referenceElement to toggle open the Popover.                   | `boolean`                                                                                                                                                                                                                                                                                                         | `false`     |
| `closeButton`      | `close-button`      | Display a close button within the Popover.                                                 | `boolean`                                                                                                                                                                                                                                                                                                         | `false`     |
| `open`             | `open`              | Display and position the component.                                                        | `boolean`                                                                                                                                                                                                                                                                                                         | `false`     |
| `placement`        | `placement`         | Determines where the component will be positioned relative to the referenceElement.        | `"auto-start" \| "auto" \| "auto-end" \| "top-start" \| "top" \| "top-end" \| "right-start" \| "right" \| "right-end" \| "bottom-end" \| "bottom" \| "bottom-start" \| "left-end" \| "left" \| "left-start" \| "leading-start" \| "leading" \| "leading-end" \| "trailing-end" \| "trailing" \| "trailing-start"` | `"auto"`    |
| `referenceElement` | `reference-element` | Reference HTMLElement used to position this component according to the placement property. | `HTMLElement \| string`                                                                                                                                                                                                                                                                                           | `undefined` |
| `textClose`        | `text-close`        | Text for close button.                                                                     | `string`                                                                                                                                                                                                                                                                                                          | `"Close"`   |
| `theme`            | `theme`             | Select theme (light or dark)                                                               | `"dark" \| "light"`                                                                                                                                                                                                                                                                                               | `"light"`   |
| `xOffset`          | `x-offset`          | Offset the position of the popover in the horizontal direction.                            | `number`                                                                                                                                                                                                                                                                                                          | `0`         |
| `yOffset`          | `y-offset`          | Offset the position of the popover in the vertical direction.                              | `number`                                                                                                                                                                                                                                                                                                          | `0`         |


## Methods

### `reposition() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `toggle() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Slots

| Slot      | Description                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| `"image"` | A slot for adding an image. The image will appear above the other slot content. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*