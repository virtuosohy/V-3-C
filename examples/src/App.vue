<script setup>

const handleBtnClick = () => {
  console.log('按钮被点击啦，且处于可用状态');
};
</script>

<template>
  <div>这是按钮区域</div>
  <div class="button-container">
    <!-- 普通按钮 -->
    <AButton>普通按钮</AButton>
    <!-- 主要按钮 -->
    <AButton type="primary">主要按钮</AButton>
    <!-- 成功按钮 -->
    <AButton type="success">成功按钮</AButton>
    <!-- 禁用按钮 -->
    <AButton disabled>禁用按钮</AButton>
    <!-- 带点击事件的按钮 -->
    <AButton type="primary" @click="handleBtnClick">点击触发事件</AButton>
  </div>

</template>

<style scoped>
.button-container {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>
