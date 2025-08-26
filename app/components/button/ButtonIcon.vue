<template>
  <div class="btn-icon">
    <span ref="elIconWrapper" class="icon-wrapper">
      <span ref="elIcon" class="icon-inner"><slot /></span>
    </span>
  </div>
</template>

<script setup>
const elIconWrapper = useTemplateRef('elIconWrapper');
const elIcon = useTemplateRef('elIcon');

onMounted(() => {
  const clonedElement = elIcon.value.cloneNode(true);
  clonedElement.classList.add('is--clone');
  elIconWrapper.value.appendChild(clonedElement);
});
</script>

<style scoped lang="scss">
.btn-icon {
  cursor: pointer;
  user-select: none;

  position: relative;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  width: fn.toVw(48);
  height: fn.toVw(48);
  border: 1px solid #d9d9d9;
  border-radius: fn.toVw(5);

  &::after {
    content: '';

    position: absolute;
    z-index: -1;
    inset: 0;
    transform: scale(0);

    border-radius: fn.toVw(5);

    background-color: #d9d9d9;

    transition: transform 0.6s $transition-ease;
  }

  &:hover {
    &::after {
      transform: scale(1);
    }

    :deep(.icon-inner:not(.is--clone)) {
      transform: translateX(calc(-100% - fn.toVw(6)));
    }

    :deep(.icon-inner.is--clone) {
      transform: translateX(0%);
    }
  }

  &:deep(.icon-wrapper) {
    position: relative;

    overflow: hidden;
    display: inline-block;

    width: fn.toVw(18);
    height: fn.toVw(18);
  }

  &:deep(.icon-inner) {
    display: block;
    transition: transform $transition-default;
  }

  &:deep(.icon-inner.is--clone) {
    position: absolute;
    inset: 0;
    transform: translateX(calc(100% + fn.toVw(6)));
  }

  &:deep(svg) {
    display: block;
    width: fn.toVw(18);
    height: fn.toVw(18);
  }
}
</style>
