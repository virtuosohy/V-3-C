<template>
  <!-- 使用 button 标签渲染按钮，动态绑定类名和禁用状态 -->
  <button
      class="a-button"
      :class="{
      'a-button--primary': type === 'primary',
      'a-button--success': type === 'success',
      'a-button--disabled': disabled
    }"
      :disabled="disabled"
      @click="handleClick"
  >
    <!-- 插槽，支持自定义按钮文本，默认显示“普通按钮” -->
    <slot>普通按钮</slot>
  </button>
</template>

<script>
export default {
  name: 'AButton',
  // 定义属性，控制按钮类型、是否禁用
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['default', 'primary', 'success'].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'], // 声明触发的事件，可选但建议规范声明
  methods: {
    handleClick() {
      // 禁用状态下不触发点击事件
      if (!this.disabled) {
        this.$emit('click');
      }
    }
  }
}
</script>

<style scoped>
/* 基础按钮样式 */
.a-button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}
/* 主要按钮样式 */
.a-button--primary {
  background-color: #409eff;
  color: #fff;
  border-color: #409eff;
}
/* 成功按钮样式 */
.a-button--success {
  background-color: #67c23a;
  color: #fff;
  border-color: #67c23a;
}
/* 禁用按钮样式 */
.a-button--disabled {
  background-color: #f5f7fa;
  color: #c0c4cc;
  border-color: #ebeef5;
  cursor: not-allowed;
}
/* 交互态样式 */
.a-button:not(.a-button--disabled):hover {
  border-color: #999;
  opacity: 0.9;
}
.a-button:not(.a-button--disabled):active {
  background-color: #f0f0f0;
  opacity: 1;
  transform: scale(0.98);
}
/* 主要按钮、成功按钮的交互态单独调整（可选，让颜色过渡更自然） */
.a-button--primary:not(.a-button--disabled):hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}
.a-button--success:not(.a-button--disabled):hover {
  background-color: #85ce61;
  border-color: #85ce61;
}
</style>
