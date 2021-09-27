<template>
  <div class="header">
    <div class="content">
    <a class="box-logo">
      <div class="content-logo">
        <img src="../../static/img/logo.svg" alt="logo"/>
      </div>
    </a>
    <div class="main-menu"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.header {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  -moz-box-pack: justify;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
}
.content {
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  padding: 1rem;
  z-index: 21;
  position: relative;
  background-image: linear-gradient(transparent 50%, rgb(255, 255, 255) 50%);
  background-position: 0 0;
  background-size: 100% 200%;
  box-shadow: transparent 0 0 0 1px;
  transition: background-position 0.1s ease 0s, box-shadow 0.1s ease 0s;
  background-blend-mode: hard-light;
}
.box-logo{
  display: flex;
-moz-box-align: center;
align-items: center;
pointer-events: auto;
justify-self: flex-start;
margin-right: 12px;
}
.content-logo{
  transition: transform 0.3s ease 0s;
}
.main-menu{
  justify-self: center;
background-color: rgb(255, 255, 255);
width: -moz-fit-content;
padding: 4px;
border-radius: 16px;
display: grid;
grid-auto-flow: column;
gap: 10px;
overflow: auto;
-moz-box-align: center;
align-items: center;
}
</style>
