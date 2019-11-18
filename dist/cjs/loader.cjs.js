'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-df5cbf37.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["calcite-button.cjs",[[1,"calcite-button",{"color":[1537],"appearance":[1537],"theme":[513],"scale":[1537],"width":[1537],"loading":[516],"href":[513],"icon":[513],"iconPosition":[1537,"icon-position"],"disabled":[516],"hasText":[1028,"has-text"],"childEl":[1,"child-el"]}]]],["calcite-tab_4.cjs",[[1,"calcite-tab",{"tab":[1537],"isActive":[1540,"is-active"],"labeledBy":[32],"getTabIndex":[64],"updateAriaInfo":[64]},[[16,"calciteTabChange","tabChangeHandler"]]],[1,"calcite-tab-nav",{"storageId":[1,"storage-id"],"syncId":[1,"sync-id"],"selectedTab":[32]},[[0,"calciteTabsFocusPrevious","focusPreviousTabHandler"],[0,"calciteTabsFocusNext","focusNextTabHandler"],[0,"calciteTabsActivate","activateTabHandler"],[32,"calciteTabChange","globalTabChangeHandler"]]],[1,"calcite-tab-title",{"tab":[1537],"isActive":[1540,"is-active"],"controls":[32],"getTabIndex":[64],"getTabIdentifier":[64],"updateAriaInfo":[64]},[[16,"calciteTabChange","tabChangeHandler"],[0,"click","onClick"],[0,"keydown","keyDownHandler"]]],[1,"calcite-tabs",{"theme":[513],"layout":[513],"titles":[32],"tabs":[32]},[[0,"calciteTabTitleRegister","calciteTabTitleRegister"],[0,"calciteTabTitleUnregister","calciteTabTitleUnregister"],[0,"calciteTabRegister","calciteTabRegister"],[0,"calciteTabUnregister","calciteTabUnregister"]]]]],["calcite-dropdown_3.cjs",[[1,"calcite-dropdown",{"active":[1540],"alignment":[1537],"theme":[1537],"scale":[1537],"type":[1537]},[[0,"click","openDropdown"],[8,"click","closeCalciteDropdownOnClick"],[0,"closeCalciteDropdown","closeCalciteDropdownOnEvent"],[0,"keydown","keyDownHandler"],[1,"mouseenter","mouseoverHandler"],[1,"mouseleave","mouseoffHandler"],[0,"calciteDropdownItemKeyEvent","calciteDropdownItemKeyEvent"],[0,"calciteDropdownItemMouseover","calciteDropdownMouseover"],[0,"registerCalciteDropdownGroup","registerCalciteDropdownGroup"]]],[1,"calcite-dropdown-group",{"groupTitle":[513,"group-title"],"selectionMode":[1537,"selection-mode"]},[[0,"registerCalciteDropdownItem","registerCalciteDropdownItem"],[0,"calciteDropdownItemSelected","updateActiveItemOnChange"]]],[1,"calcite-dropdown-item",{"active":[1540],"href":[1],"linkTitle":[1,"link-title"]},[[0,"click","onClick"],[1,"mouseover","onMouseover"],[0,"keydown","keyDownHandler"],[16,"registerCalciteDropdownGroup","registerCalciteDropdownGroup"],[16,"calciteDropdownItemHasChanged","updateActiveItemOnChange"]]]]],["calcite-accordion_2.cjs",[[1,"calcite-accordion",{"theme":[1537],"scale":[1537],"appearance":[1537],"iconPosition":[1537,"icon-position"],"selectionMode":[1537,"selection-mode"]},[[0,"calciteAccordionItemKeyEvent","calciteAccordionItemKeyEvent"],[0,"registerCalciteAccordionItem","registerCalciteAccordionItem"],[0,"calciteAccordionItemSelected","updateActiveItemOnChange"]]],[1,"calcite-accordion-item",{"active":[1540],"itemTitle":[1,"item-title"]},[[0,"keydown","keyDownHandler"],[16,"calciteAccordionItemHasChanged","updateActiveItemOnChange"]]]]],["calcite-radio-group_2.cjs",[[1,"calcite-radio-group",{"name":[1],"selectedItem":[16],"theme":[513],"scale":[513]},[[0,"click","handleClick"],[0,"calciteRadioGroupItemChange","handleSelected"],[0,"keydown","handleKeyDown"]]],[1,"calcite-radio-group-item",{"checked":[1540],"value":[8]}]]],["calcite-tree_2.cjs",[[1,"calcite-tree",{"lines":[1540],"root":[1540],"theme":[1537],"size":[1537],"selectionMode":[1537,"selection-mode"]},[[0,"focus","onFocus"],[0,"calciteTreeItemSelect","onClick"]]],[1,"calcite-tree-item",{"selected":[1540],"depth":[1538],"hasChildren":[1540,"has-children"],"expanded":[1540],"parentExpanded":[1028,"parent-expanded"],"selectionMode":[32]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"]]]]],["calcite-alert.cjs",[[1,"calcite-alert",{"active":[1540],"autoDismiss":[4,"auto-dismiss"],"autoDismissDuration":[1537,"auto-dismiss-duration"],"color":[1537],"theme":[1537],"scale":[1537],"icon":[4],"alertQueue":[16],"alertQueueLength":[2,"alert-queue-length"],"currentAlert":[1,"current-alert"],"open":[64],"close":[64]},[[8,"calciteAlertOpen","alertOpen"],[8,"calciteAlertClose","alertClose"],[8,"calciteAlertSync","alertRegister"]]]]],["calcite-checkbox.cjs",[[1,"calcite-checkbox",{"checked":[1540],"indeterminate":[1540],"name":[1537],"value":[1537],"size":[513],"disabled":[516],"theme":[513]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"]]]]],["calcite-example.cjs",[[1,"calcite-example",{"property":[1],"state":[32],"doThing":[64]},[[0,"click","onClick"]]]]],["calcite-modal.cjs",[[1,"calcite-modal",{"beforeClose":[16],"closeLabel":[1,"close-label"],"docked":[516],"firstFocus":[16],"disableEscape":[4,"disable-escape"],"size":[513],"color":[513],"theme":[513],"noPadding":[4,"no-padding"],"isActive":[32],"open":[64],"close":[64],"scrollContent":[64]},[[8,"keyup","handleEscape"]]]]],["calcite-notice.cjs",[[1,"calcite-notice",{"active":[1540],"color":[1537],"theme":[1537],"scale":[1537],"width":[1537],"dismissible":[1540],"icon":[4],"close":[64],"open":[64]}]]],["calcite-popover.cjs",[[1,"calcite-popover",{"addClickHandle":[516,"add-click-handle"],"closeButton":[516,"close-button"],"disableFlip":[516,"disable-flip"],"disablePointer":[516,"disable-pointer"],"flowInner":[516,"flow-inner"],"open":[516],"placement":[513],"referenceElement":[1,"reference-element"],"textClose":[1,"text-close"],"theme":[513],"xOffset":[514,"x-offset"],"yOffset":[514,"y-offset"],"_referenceElement":[32],"reposition":[64],"toggle":[64]}]]],["calcite-progress.cjs",[[1,"calcite-progress",{"type":[1],"value":[2],"text":[1],"reversed":[4],"theme":[513]}]]],["calcite-slider.cjs",[[1,"calcite-slider",{"theme":[513],"disabled":[1540],"min":[1538],"max":[1538],"value":[1538],"minValue":[2,"min-value"],"maxValue":[2,"max-value"],"minLabel":[1,"min-label"],"maxLabel":[1,"max-label"],"snap":[4],"step":[2],"pageStep":[2,"page-step"],"ticks":[2],"labelTicks":[516,"label-ticks"],"labelHandles":[516,"label-handles"],"precise":[4],"tickValues":[32],"activeProp":[32]},[[0,"keydown","keyDownHandler"],[0,"click","clickHandler"]]]]],["calcite-switch.cjs",[[1,"calcite-switch",{"switched":[1540],"name":[1537],"value":[1537],"color":[1537],"scale":[1537],"theme":[1537]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"]]]]],["calcite-tooltip.cjs",[[1,"calcite-tooltip",{"open":[516],"placement":[513],"referenceElement":[1,"reference-element"],"theme":[513],"_referenceElement":[32],"reposition":[64]}]]],["calcite-loader.cjs",[[1,"calcite-loader",{"isActive":[1540,"is-active"],"inline":[1540],"type":[1537],"value":[2],"text":[1],"loaderBarOffsets":[32],"isEdge":[32]}]]],["calcite-date-day_4.cjs",[[1,"calcite-date-picker",{"value":[513],"min":[513],"max":[513],"prevMonthLabel":[1,"prev-month-label"],"nextMonthLabel":[1,"next-month-label"],"startOfWeek":[2,"start-of-week"],"locale":[1],"showCalendar":[32],"activeDate":[32]}],[1,"calcite-date-month",{"month":[2],"year":[2],"selectedDate":[16],"activeDate":[16],"min":[16],"max":[16],"startOfWeek":[2,"start-of-week"],"locale":[1]},[[0,"keydown","keyDownHandler"],[1,"mouseover","mouseoverHandler"]]],[1,"calcite-date-month-header",{"month":[2],"year":[2],"selectedDate":[16],"min":[16],"max":[16],"locale":[1],"prevMonthLabel":[1,"prev-month-label"],"nextMonthLabel":[1,"next-month-label"]}],[1,"calcite-date-day",{"day":[2],"enable":[4],"selected":[4],"active":[4],"hover":[32]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
