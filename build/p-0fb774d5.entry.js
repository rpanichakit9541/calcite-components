import{r as t,c as s,h as i,H as h,g as e}from"./p-490fe8c9.js";import{I as a}from"./p-aa9926da.js";const r=class{constructor(i){t(this,i),this.calciteListOrderChange=s(this,"calciteListOrderChange",7),this.handleSelector="calcite-handle",this.disabled=!1,this.loading=!1,this.handleActivated=!1,this.items=[],this.observer=new MutationObserver(()=>{this.cleanUpDragAndDrop(),this.items=Array.from(this.el.children),this.setUpDragAndDrop()})}connectedCallback(){this.items=Array.from(this.el.children),this.setUpDragAndDrop(),this.beginObserving()}disconnectedCallback(){this.observer.disconnect(),this.cleanUpDragAndDrop()}calciteHandleNudgeHandler(t){const s=this.items.find(s=>s.contains(t.detail.handle)||t.composedPath().includes(s)),i=this.items.length-1,h=this.items.indexOf(s);let e,a=!1;switch(t.detail.direction){case"up":t.preventDefault(),0===h?a=!0:e=h-1;break;case"down":t.preventDefault(),h===i?e=0:h===i-1?a=!0:e=h+2;break;default:return}this.observer.disconnect(),a?s.parentElement.appendChild(s):s.parentElement.insertBefore(s,this.items[e]),this.items=Array.from(this.el.children),t.detail.handle.activated=!0,t.detail.handle.setFocus(),this.beginObserving()}setUpDragAndDrop(){this.sortable=a.create(this.el,{handle:this.handleSelector,onUpdate:()=>{this.items=Array.from(this.el.children),this.calciteListOrderChange.emit()},onStart:()=>{this.observer.disconnect()},onEnd:()=>{this.beginObserving()}})}cleanUpDragAndDrop(){this.sortable.destroy(),this.sortable=null}beginObserving(){this.observer.observe(this.el,{childList:!0,subtree:!0})}render(){return i(h,null,i("slot",null))}get el(){return e(this)}};export{r as calcite_sortable_list}